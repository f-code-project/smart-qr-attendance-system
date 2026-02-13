import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import './db/mysql';
import { env } from './lib/env';
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
app.notFound((c) => {
  return c.json({ message: 'Route not found' }, 404);
});
export default app;
