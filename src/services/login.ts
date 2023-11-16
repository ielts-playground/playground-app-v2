import { Register } from '@/models/register';
import api from '../api';

export const registerApi = (payload: Register) => {
  return api.post('api/v2/users/register', { ...payload });
};
