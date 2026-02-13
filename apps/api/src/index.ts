import app from './app';
import { env } from './lib/env';

export default {
  port: env.PORT || 8000,
  fetch: app.fetch,
};
