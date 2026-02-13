import { redis } from 'bun';
import AuthUtils from '../../lib/auth';
import userRepository from './user.repository';

class UserService {
  async login(email: string, password: string) {
    const count = await this.checkCountErrrorPwd(email);
    if (count >= 5) throw new Error('Tài khoản của bạn tạm thời bị khóa do đăng nhập sai nhiều lần!');

    const user = await userRepository.getUserByEmail(email);
    if (!user) throw new Error('Không tìm thấy tài khoản của bạn!');

    const pwdHash = await AuthUtils.verifyPassword(password, user.password);
    if (!pwdHash) {
      // add vô redis +=1 login sai mk
      await this.inckCountErrrorPwd(email);
      throw new Error('Mật khẩu của bạn không chính xác!');
    }
    // sign access token + refresh token
    return user;
  }

  private asignAccessToken = (id: string, email: string) => {
    
  };
  private async checkCountErrrorPwd(email: string) {
    const count = await redis.get(`lock:${email}`);
    return Number(count || 0);
  }

  private async inckCountErrrorPwd(email: string) {
    const count = await redis.incr(`lock:${email}`);
    return count;
  }
}
const userService = new UserService();
export default userService;
