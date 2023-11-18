import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

import { loginApi } from '@/services/auth';
import { Login } from '@/models/auth';

import Button from '../common/button/Button';
import './Login.scss';
import useToast from '@/hooks/useToast';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const { notify } = useToast();

  function inputChangeHandler(
    setState: Dispatch<SetStateAction<string>>
  ): ChangeEventHandler<HTMLInputElement> {
    return (e) => {
      setState(e.target.value);
    };
  }

  const handleLogin = async () => {
    const payload: Login = {
      identity: email,
      password: password,
    };
    const res = await loginApi(payload);
    if (res) {
      router.push('/home');
    } else {
      notify('error', 'Email or Password incorrect!');
    }
  };

  return (
    <div className='container' style={{ width: '400px' }}>
      <div className='form-title gap-4'>
        <h2 className='mb-4'>Login</h2>
        <input
          className='form-control shadow-none mb-4'
          autoComplete='off'
          placeholder='Email'
          type='text'
          onChange={inputChangeHandler(setEmail)}
        />
        <input
          className='form-control shadow-none  mb-4'
          autoComplete='off'
          placeholder='Password'
          type='password'
          onChange={inputChangeHandler(setPassword)}
        />
      </div>
      <a href=''>FORGOT PASSWORD</a>
      <div className='mt-4'>
        <Button
          text='Login'
          type='reset'
          style={{ fontSize: '18px', width: '100%' }}
          onClick={handleLogin}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
