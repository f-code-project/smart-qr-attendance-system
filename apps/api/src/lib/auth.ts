class AuthUtils {
  hashPassword = async (plainPwd: string) => {
    const pwdHash = await Bun.password.hash(plainPwd);
    return pwdHash;
  };
}
export default AuthUtils;
