import { redis } from 'bun';
import { v7 as uuidV7 } from 'uuid';
import { ExpiresInTokenType, TokenType } from '../../constants/enum';
import HashUtils from '../../lib/hash';
import JwtUtils from '../../lib/jwt';
import userRepository from './user.repository';

class UserService {
  async login(email: string, password: string) {
    const count = await this.checkCountErrorPwd(email);
    if (count >= 5) throw new Error('Tài khoản của bạn tạm thời bị khóa do đăng nhập sai nhiều lần!');

    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      await this.incrCountErrorPwd(email); // vẫn incr tránh brute force
      throw new Error('Email hoặc mật khẩu không chính xác!'); // luôn trả về tb chung chung :((((
    }

    const isCorrectPwd = await HashUtils.verifyPassword(password, user.password);
    if (!isCorrectPwd) {
      // add vô redis +=1 login sai mk
      await this.incrCountErrorPwd(email);
      throw new Error('Email hoặc mật khẩu không chính xác!'); // luôn trả về tb chung chung :((((
    }
    // login thành công thì xóa count login sai
    await redis.del(`lock:${email}`);

    const { accessToken, refreshToken, jti } = await this.signToken(email);

    await redis.set(`RT:${user.id}:${jti}`, refreshToken, 'EX', ExpiresInTokenType.REFRESH);

    return {
      ...user,
      accessToken,
      refreshToken,
    };
  }

  private async signToken(email: string) {
    const { token: accessToken, jti } = await JwtUtils.signToken(email, TokenType.ACCESS);
    const refreshToken = uuidV7();
    return {
      accessToken,
      refreshToken,
      jti,
    };
  }
  private async checkCountErrorPwd(email: string) {
    const key = `lock:${email}`;
    const count = await redis.get(key);
    return Number(count || 0);
  }

  private async incrCountErrorPwd(email: string) {
    const key = `lock:${email}`;
    const count = await redis.incr(key);
    if (count == 1) await redis.expire(key, 60 * 15); // lock trong 15p từ lần sau đầu tiên
    return count;
  }
}
const userService = new UserService();
export default userService;
