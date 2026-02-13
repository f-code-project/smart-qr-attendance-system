import { Context } from 'hono';
import ApiResponse from '../common/api-response';

export const errorHandler = async (err: any, c: Context) => {
  console.error(`[Error Log]: ${err.stack || err.message}`);
  // lỗi của hệ thống nên mới có status (do mặc định đều phải ném ra lỗi ApiResonse.error)
  if (err.status) {
    return ApiResponse.error(c, err.message, err, err.status);
  }
  // lỗi của hệ thống, do k có .StatusRequest
  return ApiResponse.error(c, 'Đã có lỗi xảy ra bên phía máy chủ. Vui lòng liên hệ BTQ F-Code', err, 500);
};
