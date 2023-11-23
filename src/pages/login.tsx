import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import useToast from '@/hooks/useToast';

import { loginApi } from '@/services/auth';
import { BaseResponse } from '@/models/common';
import { AuthResponse, LoginType } from '@/models/auth';
import Loading from '@/component/common/loadding/loadding';
import { setAuthInformation } from '@/store/auth-slice';
import Login from '@/component/login/login';
import { CODE_SUCCESS } from '@/constant/common';

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { notify } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (payload: LoginType) => {
    setIsLoading(true);
    const res: BaseResponse<AuthResponse> = await loginApi(payload);
    if (res.code === CODE_SUCCESS) {
      dispatch(setAuthInformation(res.data));
      localStorage.setItem('TOKEN', res.data.token);
      router.push('/home');
    } else {
      notify('error', 'Email or Password incorrect!');
    }
    setIsLoading(false);
  };

  return (
    <>
      <Loading loading={isLoading} />
      <Login onClickLogin={handleLogin} />
    </>
  );
};

export default SignInPage;
