import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import useToast from '@/hooks/use-toast';

import { CODE_SUCCESS } from '@/common/constant';
import { selectAuthState, setEmailVerify } from '@/store/auth-slice';
import { RegisterType } from '@/models/auth';
import { registerApi } from '@/services/auth';

import Loading from '@/component/common/loading/loading';
import Register from '@/component/register/register';

const RegisterPage = () => {
  const router = useRouter();
  const { notify } = useToast();
  const authState = useSelector(selectAuthState);
  const { typeRegister } = authState;
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (values: RegisterType) => {
    setIsLoading(true);
    const res = await registerApi({ ...values, subscription: typeRegister });
    if (res.code === CODE_SUCCESS) {
      router.push('/verify');
      notify('success', 'Register successfully, please verify!');
      dispatch(setEmailVerify(values.email));
    } else {
      notify('error', 'Something error!');
    }
    setIsLoading(false);
  };

  return (
    <>
      <Loading loading={isLoading} />
      <Register onRegister={handleRegister} />
    </>
  );
};

export default RegisterPage;
