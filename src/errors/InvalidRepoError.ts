export default class InvalidRepoError extends Error {
  errorCode: number = 4;
  message: string = '';

  constructor(message: string) {
    super();
    this.message = message;
  }
}
