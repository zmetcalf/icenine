import BaseError from './BaseError';

export default class RequestError extends BaseError {
  errorCode: number = 3;

  constructor(message: string) {
    super(message);
  }
}
