import {
  AuthResponse,
  LoginType,
  RegisterType,
  VerifyEmailReponse,
  VerifyEmailRequest,
} from '@/models/auth';
import api from '../api';
import { BaseResponse } from '@/models/common';

export const registerApi = async (payload: RegisterType) => {
  try {
    const res = await api.post('api/v2/users/register', { ...payload });
    return res.data;
  } catch (error) {
    console.log(error);
    return false;
  }
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

export const verifyEmailApi = async (payload: VerifyEmailRequest) => {
  try {
    const res: BaseResponse<any> = await api.post('/api/v2/users/verify-email', {
      ...payload,
    });
    return res.data;
  } catch (error) {
    return false;
  }
};
