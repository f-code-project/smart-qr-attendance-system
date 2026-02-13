import { Context } from 'hono';
import { HttpStatusCode } from './../constants/http-status';
interface SuccessResponse<T> {
  success: true;
  message: string;
  data: T;
  metadata?: any;
  timestamp: string;
}
interface ErrorResponse {
  success: false;
  message: string;
  errorCode: string;
  errors?: any;
  timestamp: string;
}
class ApiResponse {
  static success<T>(
    c: Context,
    data: T,
    message = 'Thành công',
    meta = {},
    statusCode: HttpStatusCode = HttpStatusCode.OK,
  ) {
    const response: SuccessResponse<T> = {
      success: true,
      message,
      data,
      metadata: Object.keys(meta).length ? meta : undefined,
      timestamp: new Date().toISOString(),
    };
    return c.json(response, statusCode as any);
  }

  static error(
    c: Context,
    message = 'Đã xảy ra lỗi',
    errorCode = 'INTERNAL_ERROR',
    errors: any,
    statusCode: HttpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR,
  ) {
    const response: ErrorResponse = {
      success: false,
      message,
      errorCode,
      errors: errors || undefined,
      timestamp: new Date().toISOString(),
    };
    return c.json(response, statusCode as any);
  }
}
export default ApiResponse;
