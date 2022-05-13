import request from 'axios';
import { ErrorType } from '../types/types';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }
};
