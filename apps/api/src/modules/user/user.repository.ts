import { RowDataPacket } from 'mysql2';
import pool from '../../db/mysql';
import { createNewUser, UserType } from './user.schema';
interface UserEntity extends UserType, RowDataPacket {}
class UserRepository {
  getUserByEmail = async (email: string): Promise<UserEntity | null> => {
    const sql = 'SELECT * FROM `users` WHERE `email` = ?';
    const [rows] = await pool.execute<UserEntity[]>(sql, [email]);
    return rows.length > 0 ? rows[0] : null;
  };
  createUser = async (email: string, pwdHash: string) => {
    const user = await createNewUser({ email, password: pwdHash });
    const sql = 'INSERT INTO `users` (`email`, `password`, `createdAt`) VALUES (?, ?, ?)';
    const [rows] = await pool.execute(sql, [user.email, user.password, user.createdAt]);
    return rows;
  };
}

const userRepository = new UserRepository();
export default userRepository;
