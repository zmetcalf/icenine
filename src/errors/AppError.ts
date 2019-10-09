export default class AppError extends Error {
  errorCode: number = 1;
  message: string = '';

  constructor(message: string) {
    super();
    this.message = message;
  }
}
