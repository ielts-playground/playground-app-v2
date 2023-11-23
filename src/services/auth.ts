import {
  AuthResponse,
  LoginType,
  RegisterType,
  VerifyEmailRepose,
  VerifyEmailRequest,
} from '@/models/auth';
import api from '../api';
import { BaseResponse } from '@/models/common';

export const registerApi = (payload: RegisterType) => {
  return api.post('api/v2/users/register', { ...payload });
};

export const loginApi = async (payload: LoginType) => {
  try {
    const res = await api.post('/api/v2/users/authenticate', {
      ...payload,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const verifyEmail = async (payload: VerifyEmailRequest) => {
  try {
    const res: BaseResponse<VerifyEmailRepose> = await api.post(
      '/api/collections/users/verify-email',
      { ...payload }
    );
    return res.data;
  } catch (error) {
    return false;
  }
};
