import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

import useToast from '@/hooks/useToast';

import Login from '@/component/login/Login';
import { loginApi } from '@/services/auth';
import { LoginType } from '@/models/auth';
import Loading from '@/component/common/loadding/Loading';
import { setAuthInformation } from '@/store/authSlice';

const SignInPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { notify } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (payload: LoginType) => {
    setIsLoading(true);
    const res = await loginApi(payload);
    if (res) {
      dispatch(setAuthInformation(res));
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
