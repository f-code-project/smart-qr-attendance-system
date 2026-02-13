import mysql from 'mysql2/promise';
import { env } from '../lib/env';

const pool = mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
});

try {
  const connection = await pool.getConnection();
  console.log('MySQL Database connected successfully.');
  connection.release();
} catch (error) {
  console.error('Failed to connect to the MySQL database:');
  console.error(error);
  process.exit(1);
}

export default pool;
