import { Hono } from 'hono';
import userRouterV1 from '../../modules/user/user.route';

const routeV1 = new Hono().basePath('/v1');
routeV1.route('/users', userRouterV1);
export default routeV1;
