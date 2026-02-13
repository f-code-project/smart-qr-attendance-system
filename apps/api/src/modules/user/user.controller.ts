import { Context } from 'hono';
import { LoginRequestDTO } from './dtos/login.dto';
import userService from './user.service';

export const login = async (c: Context<any, any, { out: { json: LoginRequestDTO } }>) => {
  const { email, password } = c.req.valid('json');
  const result = await userService.login(email, password);
  return c.json({
    result: result,
  });
};
