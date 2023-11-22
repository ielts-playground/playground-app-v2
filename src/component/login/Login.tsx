import { ChangeEventHandler, Dispatch, SetStateAction, useState } from 'react';
import { LoginType } from '@/models/auth';

import Button from '../common/button/Button';
import './Login.scss';

type Props = {
  onClickLogin: (payload: LoginType) => void;
};

const Login = ({ onClickLogin }: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function inputChangeHandler(
    setState: Dispatch<SetStateAction<string>>
  ): ChangeEventHandler<HTMLInputElement> {
    return (e) => {
      setState(e.target.value);
    };
  }

  const handleLogin = () => {
    const payload: LoginType = {
      identity: email,
      password: password,
    };
    onClickLogin(payload);
  };

  return (
    <div className='container' style={{ width: '400px' }}>
      <div className='form-title gap-4'>
        <h2 className='mb-4 color-text-secondary'>Login</h2>
        <input
          className='form-control shadow-none mb-4'
          autoComplete='off'
          placeholder='Email'
          type='text'
          onChange={inputChangeHandler(setEmail)}
        />
        <input
          className='form-control shadow-none mb-4'
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
    </div>
  );
};

export default Login;
