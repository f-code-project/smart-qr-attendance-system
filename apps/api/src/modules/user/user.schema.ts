import { v7 as uuidv7 } from 'uuid';
import { z } from 'zod';
import { Role } from '../../constants/role';

export const UserSchema = z.object({
  id: z
    .string()
    .uuid()
    .default(() => uuidv7()),
  fullName: z.string().min(1, { message: 'Tên đầy đủ không được để trống' }),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  password: z.string().min(8, { message: 'Mật khẩu phải ít nhất 8 ký tự' }),
  role: z.nativeEnum(Role).default(Role.HR),
  createdAt: z.date().default(() => new Date()),
});
export const MemberSchema = z.object({
  id: z
    .string()
    .uuid()
    .default(() => uuidv7()),
  fullName: z.string().min(1, { message: 'Tên đầy đủ không được để trống' }),
  studentCode: z.string().min(1, { message: 'Mã sinh viên không được để trống' }),
  email: z.string().email({ message: 'Email không hợp lệ' }),
  tokenIdentifyMember: z.string().min(1, { message: 'Token không được để trống' }),
  note: z.string().optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});
export const RefreshTokenSchema = z.object({
  id: z
    .string()
    .uuid()
    .default(() => uuidv7()),
  userId: z.string().uuid(),
  tokenHash: z.string().min(1),
  jti: z.string().uuid(),
  createdByIp: z.string().optional(),
  userAgent: z.string().optional(),
  expiresAt: z.date(),
  revokedAt: z.date().optional(),
  replacedByTokenId: z.string().uuid().optional(),
});
export const createNewUser = (data: Partial<UserType>) => {
  return UserSchema.parse(data);
};
export const createNewMember = (data: Partial<MemberType>) => {
  return MemberSchema.parse(data);
};
export const createNewRefreshToken = (data: Partial<RefreshTokenType>) => {
  return RefreshTokenSchema.parse(data);
};

export type UserType = z.infer<typeof UserSchema>;
export type MemberType = z.infer<typeof MemberSchema>;
export type RefreshTokenType = z.infer<typeof RefreshTokenSchema>;
