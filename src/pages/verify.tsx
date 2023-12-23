import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import useToast from '@/hooks/useToast';
import { selectAuthState } from '@/store/auth-slice';

import { CODE_SUCCESS } from '@/common/constant';
import { verifyEmailApi } from '@/services/auth';
import { VerifyEmailRequest } from '@/models/auth';

import Verify from '@/component/verify/verify';
import Loading from '@/component/common/loadding/loadding';

const VerifyPage = () => {
  const router = useRouter();
  const { notify } = useToast();
  const authState = useSelector(selectAuthState);
  const { emailVerify } = authState;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isVerifyError, setIsVerifyError] = useState<boolean>(false);

  const handleSubmitVerify = async (code: string) => {
    setIsLoading(true);
    const payload: VerifyEmailRequest = {
      code,
      email: emailVerify,
    };
    const res = await verifyEmailApi(payload);
    if (res.code === CODE_SUCCESS) {
      setIsVerifyError(false);
      router.push('/home');
      notify('success', 'Verify successfully!');
      localStorage.setItem('TOKEN', res.data.token);
    } else {
      setIsVerifyError(true);
      notify('error', 'Wrong code!');
    }
    setIsLoading(false);
  };
  return (
    <>
      <Loading loading={isLoading} />
      <Verify
        emailVerify={emailVerify}
        isVerifyError={isVerifyError}
        onSubmitVerify={handleSubmitVerify}
      />
    </>
  );
};

export default VerifyPage;
