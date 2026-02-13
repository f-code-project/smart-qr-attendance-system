import z from 'zod';

const envSchema = z.object({
  PORT: z.string().default('8000').transform(Number),
  URL_FRONTEND: z.string().url().default('http://localhost:5173'),
});
const parsedEnv = envSchema.safeParse(Bun.env);
if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error.format());
  throw new Error('Invalid environment variables');
}
export const env = parsedEnv.data;
