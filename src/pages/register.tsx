import { useState } from 'react';
import { useRouter } from 'next/navigation';
import useToast from '@/hooks/useToast';

import { RegisterType } from '@/models/auth';
import { registerApi } from '@/services/auth';

import Register from '@/component/register/Register';
import Loading from '@/component/common/loadding/Loading';

const RegisterPage = () => {
  const router = useRouter();
  const { notify } = useToast();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleRegister = async (values: RegisterType) => {
    setIsLoading(true);
    const res = await registerApi({ ...values, subscription: 'FREE' });
    if (res.data) {
      router.push('/login');
      notify('success', 'Register successfully, please login!');
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
