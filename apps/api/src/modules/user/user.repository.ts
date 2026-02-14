import db from '../../db/mysql';
import { members, refreshTokens } from '../../db/schema';
import { MemberType, createNewMember, createNewRefreshToken } from './user.schema';
class UserRepository {
  getUserByEmail = (email: string) => {
    const result = db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });
    return result;
  };

  createUser = async ({ studentCode, email, fullName, tokenIdentifyMember }: MemberType) => {
    const insertId = await db
      .insert(members)
      .values(createNewMember({ studentCode, email, fullName, tokenIdentifyMember }))
      .$returningId();
    return insertId;
  };

  saveRefreshToken = async (userId: string, jti: string, tokenHash: string, expiresAt: Date) => {
    const insertId = await db
      .insert(refreshTokens)
      .values(
        createNewRefreshToken({
          userId,
          jti,
          expiresAt,
          tokenHash,
        }),
      )
      .$returningId();
    return insertId;
  };
}

const userRepository = new UserRepository();
export default userRepository;
