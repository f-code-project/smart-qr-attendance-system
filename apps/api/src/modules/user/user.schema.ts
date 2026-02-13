import { v7 as uuidv7 } from 'uuid';
import { z } from 'zod';

export const UserSchema = z.object({
  id: z
    .string()
    .uuid()
    .default(() => uuidv7()),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z.string().min(8, { message: 'Mật khẩu phải ít nhất 8 ký tự' }),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type UserType = z.infer<typeof UserSchema>;

export const createNewUser = (data: Partial<UserType>) => {
  return UserSchema.parse(data);
};
