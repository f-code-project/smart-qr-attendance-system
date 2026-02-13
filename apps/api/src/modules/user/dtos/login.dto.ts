import z from 'zod';

export const LoginRequestSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(6).max(255),
});
export type LoginRequestDTO = z.infer<typeof LoginRequestSchema>;
