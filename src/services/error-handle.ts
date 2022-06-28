import request from 'axios';
import { ErrorType } from '../types/types';
import { toast } from 'react-toastify';
import {HTTP_CODE} from '../const';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.messages[0]);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(response.data.messages[0]);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.messages[0]);
        break;
      default:
    }
  }
};
