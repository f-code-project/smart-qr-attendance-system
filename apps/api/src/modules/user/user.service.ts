import { redis } from 'bun';
import { v7 as uuidV7 } from 'uuid';
import AppError from '../../common/app-error';
import { ErrorCode } from '../../constants/error-code';
import { HttpStatusCode } from '../../constants/http-status';
import { TokenType } from '../../constants/token';
import HashUtils from '../../lib/hash';
import JwtUtils from '../../lib/jwt';
import userRepository from './user.repository';

class UserService {
  private keyLock: string;
  constructor() {
    this.keyLock = 'lock:';
  }
  async login(email: string, password: string) {
    const count = await this.checkCountErrorPwd(email);
    // if (count >= 5) throw new Error('Tài khoản của bạn tạm thời bị khóa do đăng nhập sai nhiều lần!');
    if (count >= 5) {
      throw new AppError(
        'Tài khoản của bạn tạm thời bị khóa do đăng nhập sai nhiều lần!',
        ErrorCode.AUTH_ACCOUNT_LOCKED,
        null,
        HttpStatusCode.FORBIDDEN,
      );
    }

    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      await this.incrCountErrorPwd(email); // vẫn incr tránh brute force
      throw new AppError(
        'Email hoặc mật khẩu không chính xác!',
        ErrorCode.AUTH_INVALID_CREDENTIALS,
        null,
        HttpStatusCode.UNAUTHORIZED,
      ); // luôn trả về tb chung chung :((((
    }

    const isCorrectPwd = await HashUtils.verifyPassword(password, user.password);
    if (!isCorrectPwd) {
      // add vô redis +=1 login sai mk
      await this.incrCountErrorPwd(email);
      throw new AppError(
        'Email hoặc mật khẩu không chính xác!',
        ErrorCode.AUTH_INVALID_CREDENTIALS,
        null,
        HttpStatusCode.UNAUTHORIZED,
      ); // luôn trả về tb chung chung :((((
    }
    // login thành công thì xóa count login sai
    await this.removeErrorCountPwd(email);

    const { accessToken, refreshToken, jti } = await this.signToken(email);

    // await redis.set(`RT:${user.id}:${jti}`, refreshToken, 'EX', ExpiresInTokenType.REFRESH);

    return {
      // ...user,
      accessToken,
      refreshToken,
    };
  }

  private async signToken(email: string) {
    const { token: accessToken, jti, exp } = await JwtUtils.signToken(email, TokenType.ACCESS);
    const refreshToken = uuidV7();
    await this.saveRefreshToken(email, jti, refreshToken, new Date(exp * 1000));
    return {
      accessToken,
      refreshToken,
      jti,
    };
  }
  private async checkCountErrorPwd(email: string) {
    const key = `${this.keyLock}${email}`;
    const count = await redis.get(key);
    return Number(count || 0);
  }

  private async incrCountErrorPwd(email: string) {
    const key = `${this.keyLock}${email}`;
    const count = await redis.incr(key);
    if (count == 1) await redis.expire(key, 60 * 15); // lock trong 15p từ lần sau đầu tiên
    return count;
  }

  private async removeErrorCountPwd(email: string) {
    const key = `${this.keyLock}${email}`;
    await redis.del(key);
  }

  private async saveRefreshToken(userId: string, jti: string, refreshToken: string, expiresAt: Date) {
    const tokenHash = await HashUtils.hashData(refreshToken);
    await userRepository.saveRefreshToken(userId, jti, tokenHash, expiresAt);
  }
}
const userService = new UserService();
export default userService;
