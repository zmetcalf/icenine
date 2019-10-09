import BaseError from "../errors/BaseError";
import { error } from '../services/LogService';

export const handleAppError = (e: Error, printStack: boolean) => {
  printStack ? error(e) : error(e.message);

  process.exit(e instanceof BaseError ? e.errorCode : 1);
};
