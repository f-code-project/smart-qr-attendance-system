class AuthUtils {
  static hashPassword = (plainPwd: string) => {
    const hashPwd = Bun.password.hash(plainPwd, {
      algorithm: 'argon2id', // thuật toán =)) thuật toán này mạnh hơn HSA256 trong việc hash pwd =))
      memoryCost: 65536, // lượng ram sử dụng
      timeCost: 3, // số vòng lặp
    });
    return hashPwd;
  };
  static verifyPassword = (plainPwd: string, hashPwd: string) => {
    const isVerify = Bun.password.verify(plainPwd, hashPwd);
    return isVerify;
  };
}
export default AuthUtils;
