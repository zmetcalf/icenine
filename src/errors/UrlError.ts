import BaseError from './BaseError';

export default class UrlError extends BaseError {
  errorCode: number = 2;

  constructor(message: string) {
    super(message);
  }
}
