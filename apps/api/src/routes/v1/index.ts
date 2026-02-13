import { Hono } from 'hono';
import userRouter from '../../modules/user/user.route';

const routeV1 = new Hono().basePath('/v1');
routeV1.route('/users', userRouter);
export default routeV1;
