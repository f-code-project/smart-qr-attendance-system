import { Context } from 'hono';
import ApiResponse from '../common/api-response';
import AppError from '../common/app-error';
import { ErrorCode } from '../constants/error-code';

export const errorHandler = async (err: any, c: Context) => {
  console.error(`[Error Log]: ${err.stack || err.message}`);
  // lỗi của hệ thống nên mới có status (do mặc định đều phải ném ra lỗi ApiResonse.error)
  if (err instanceof AppError) {
    return ApiResponse.error(c, err.message, err.errorCode, err.errors, err.statusCode);
  }
  // lỗi của hệ thống, do k có .StatusRequest
  return ApiResponse.error(
    c,
    'Đã có lỗi xảy ra bên phía máy chủ. Vui lòng liên hệ BTQ F-Code',
    ErrorCode.INTERNAL_ERROR,
    null,
    500,
  );
};
