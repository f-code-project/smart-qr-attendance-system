import app from './app';

export default {
  port: Bun.env.PORT || 8000,
  fetch: app.fetch,
};
