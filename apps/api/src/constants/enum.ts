// copy project cũ: https://github.com/f-code-project/fcode-web-system-challenge-3/blob/main/backend/src/constants/enums.ts

export enum TokenType {
  AccessToken,
  RefreshToken,
  ActivateAccount,
}

export enum ExpiresInTokenType {
  AccessToken = 30 * 24 * 60 * 60, // 30 ngày
  RefreshToken = 30 * 24 * 60 * 60, // 30 ngày
  ActivateAccount = 24 * 60 * 60, // 24 giờ
}
