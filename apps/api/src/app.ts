import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import './db/mysql';
import { env } from './lib/env';
import { errorHandler } from './middlewares/error-handler.middleware';
import routeV1 from './routes/v1';
const app = new Hono();

app.use('*', logger());
app.use(
  '*',
  cors({
    origin: [env.URL_FRONTEND],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  }),
);
app.onError(errorHandler);
app.get('/', (c) => c.text('Ping pong!'));
app.route('/api', routeV1);
export default app;
