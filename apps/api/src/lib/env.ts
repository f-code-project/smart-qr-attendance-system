import z from 'zod';

const envSchema = z.object({
  // SERVER
  PORT: z.string().default('8000').transform(Number),

  URL_BACKEND: z.string().url().default('http://localhost:8000'),
  URL_FRONTEND: z.string().url().default('http://localhost:5173'),

  // DATABASE
  DB_HOST: z.string().default('localhost'),
  DB_PORT: z.string().default('3306').transform(Number),
  DB_USER: z.string().default('root'),
  DB_PASSWORD: z.string().default(''),
  DB_NAME_DATABASE: z.string().default('mydatabase'),

  JWT_SECRET: z.string().default('mytoken'),
});
const parsedEnv = envSchema.safeParse(Bun.env);
if (!parsedEnv.success) {
  console.error('Error parse enviroment =)))): ', parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}
export const env = parsedEnv.data;
