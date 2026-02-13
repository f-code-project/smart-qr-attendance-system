import { sign, verify } from 'hono/jwt';
import { ExpiresInTokenType, TokenType } from '../constants/enum';
import { env } from './env';

class JwtUtils {
  static async signToken(email: string, type: TokenType) {
    const jti = crypto.randomUUID();
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      iss: env.URL_BACKEND,
      sub: email,
      role: 'admin',
      jti,
      nbf: now - 30, // trừ đi 30s để đảm bảo chênh lệch đồng hồ giữa các server nhưng token vẫn OK
      iat: now,
      exp: now + ExpiresInTokenType[type],
      typ: type,
    };
    const secret = env.JWT_SECRET;
    const token = await sign(payload, secret);
    return {
      token,
      jti,
      expiresAt: payload.exp,
    };
  }

  static async verifyToken(token: string, type: TokenType) {
    const secret = env.JWT_SECRET;
    const payload = await verify(token, secret, 'HS256');
    if (payload.iss !== env.URL_BACKEND) return { valid: false, payload: {} };
    if (payload.typ !== type) return { valid: false, payload: {} };
    return {
      valid: true,
      payload,
    };
  }
}
export default JwtUtils;
