import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import useToast from '@/hooks/useToast';
import { selectAuthState } from '@/store/auth-slice';

import { CODE_SUCCESS } from '@/constant/common';

import { verifyEmailApi } from '@/services/auth';
import { VerifyEmailRequest } from '@/models/auth';

import Verify from '@/component/verify/verify';

const VerifyPage = () => {
  const router = useRouter();
  const { notify } = useToast();
  const authState = useSelector(selectAuthState);
  const { emailVerify } = authState;

  const handleSubmitVerify = async (code: string) => {
    const payload: VerifyEmailRequest = {
      code,
      email: emailVerify,
    };
    const res = await verifyEmailApi(payload);
    if (res.code === CODE_SUCCESS) {
      router.push('/verify');
      notify('success', 'Verify successfully!');
    } else {
      notify('error', 'Wrong code!');
    }
    console.log('🚀 ~ file: verify.tsx:17 ~ handleSubmitVerify ~ res:', res);
  };
  return <Verify onSubmitVerify={handleSubmitVerify} emailVerify={emailVerify} />;
};

export default VerifyPage;
