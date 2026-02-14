class HashUtils {
  static hashPassword = (plainPwd: string) => {
    const hashPwd = Bun.password.hash(plainPwd, {
      algorithm: 'argon2id', // thuật toán =)) thuật toán này mạnh hơn HS256 trong việc hash pwd =))
      memoryCost: 65536, // lượng ram sử dụng
      timeCost: 3, // số vòng lặp
    });
    return hashPwd;
  };
  static verifyPassword = (plainPwd: string, hashPwd: string) => {
    const isVerify = Bun.password.verify(plainPwd, hashPwd);
    return isVerify;
  };

  // này hash bth thôi, đơn giản k phức tạp bằng hash pwd bằng thuật toán argon2id
  static hashData = async (token: string) => {
    const hashedToken = await Bun.password.hash(token, {
      algorithm: 'bcrypt',
    });
    return hashedToken;
  };

  static verifyHashData = async (token: string, hashedToken: string) => {
    const isValid = await Bun.password.verify(token, hashedToken);
    return isValid;
  };
}
export default HashUtils;
