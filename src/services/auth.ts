import { AuthResponse, LoginType, RegisterType } from '@/models/auth';
import api from '../api';
import { BaseResponse } from '@/models/common';

export const registerApi = (payload: RegisterType) => {
  return api.post('api/v2/users/register', { ...payload });
};

export const loginApi = async (payload: LoginType) => {
  try {
    const res: BaseResponse<AuthResponse> = await api.post(
      '/api/collections/users/auth-with-password',
      { ...payload }
    );
    return res.data;
  } catch (error) {
    return false;
  }
};
