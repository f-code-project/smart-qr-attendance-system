import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { LoginRequestSchema } from './dtos/login.dto';
import * as userController from './user.controller';

const userRouterV1 = new Hono();
userRouterV1.post('/login', zValidator('json', LoginRequestSchema), userController.login);
export default userRouterV1;
