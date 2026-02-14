import db from '../../db/mysql';
import { members } from '../../db/schema';
import { MemberType, createNewMember } from './user.schema';
class UserRepository {
  getUserByEmail = (email: string) => {
    const result = db.query.users.findFirst({
      where: (users, { eq }) => eq(users.email, email),
    });
    return result;
  };

  createUser = async ({ studentCode, email, fullName, tokenIdentifyMember }: MemberType) => {
    const userId = await db
      .insert(members)
      .values(createNewMember({ studentCode, email, fullName, tokenIdentifyMember }))
      .$returningId();
    return userId;
  };
  // getUserByEmail = async (email: string): Promise<UserEntity | null> => {
  //   const sql = 'SELECT * FROM `users` WHERE `email` = ?';
  //   const [rows] = await pool.execute<UserEntity[]>(sql, [email]);
  //   return rows.length > 0 ? rows[0] : null;
  // };
  // createUser = async (email: string, pwdHash: string) => {
  //   const user = await createNewUser({ email, password: pwdHash });
  //   const sql = 'INSERT INTO `users` (`email`, `password`, `createdAt`) VALUES (?, ?, ?)';
  //   const [rows] = await pool.execute(sql, [user.email, user.password, user.createdAt]);
  //   return rows;
  // };
}

const userRepository = new UserRepository();
export default userRepository;
