// copy project cũ: https://github.com/f-code-project/fcode-web-system-challenge-3/blob/main/backend/src/constants/enums.ts

export enum TokenType {
  ACCESS = 'ACCESS',
  REFRESH = 'REFRESH',
  ACTIVATE = 'ACTIVATE',
}

export enum ExpiresInTokenType {
  ACCESS = 5 * 60, // 5 phút
  REFRESH = 30 * 24 * 60 * 60, // 30 ngày
  ACTIVATE = 24 * 60 * 60, // 24 giờ
}
