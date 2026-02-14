import { Context } from 'hono';
import ApiResponse from '../../common/api-response';
import { HttpStatusCode } from '../../constants/http-status';
import { LoginRequestDTO } from './dtos/login.dto';
import userService from './user.service';

export const login = async (c: Context<any, any, { out: { json: LoginRequestDTO } }>) => {
  const { email, password } = c.req.valid('json');
  const result = await userService.login(email, password);
  return ApiResponse.success(c, result, 'Đăng nhập thành công!', HttpStatusCode.OK);
};
