import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import useToast from '@/hooks/use-toast';

import { setAuthInformation, setRenderHeaderInfo } from '@/store/auth-slice';
import { CODE_SUCCESS } from '@/common/constant';

import { loginApi } from '@/services/auth';
import { BaseResponse } from '@/common/model';
import { AuthResponse, LoginType } from '@/models/auth';

import Loading from '@/component/common/loading/loading';
import Login from '@/component/login/login';

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
      localStorage.setItem('USER', JSON.stringify(res.data.user));
      dispatch(setRenderHeaderInfo(Date.now()));
      router.push('/list-exam');
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
