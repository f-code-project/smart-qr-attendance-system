import { ErrorCode } from '../constants/error-code';
import { HttpStatusCode } from '../constants/http-status';

class AppError extends Error {
  constructor(
    public message: string,
    public errorCode: ErrorCode = ErrorCode.INTERNAL_ERROR,
    public errors: any = null,
    public statusCode: number = HttpStatusCode.BAD_REQUEST,
  ) {
    super(message);
    this.name = 'AppError';
  }
}
export default AppError;
