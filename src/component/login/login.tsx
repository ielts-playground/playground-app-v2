import Link from 'next/link';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { LoginType } from '@/models/auth';
import { EMAIL_REG_EXP } from '@/constant/auth';

import './login.scss';
import InputField from '../exam-content/components/input/input-field';
import Button from '../common/button/button';

type Props = {
  onClickLogin: (payload: LoginType) => void;
};

const Login = ({ onClickLogin }: Props) => {
  const validate = Yup.object({
    email: Yup.string().matches(EMAIL_REG_EXP, 'Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => onClickLogin(values)}
    >
      {() => (
        <div className='container-login'>
          <div className='form-title'>
            <h2 className='color-text-secondary'>Login</h2>
            <Form>
              <InputField name='email' type='text' placeholder='Email' />
              <InputField name='password' type='password' placeholder='Password' />
              <div className='my-4'>
                <Button
                  className='mt-4'
                  text='Login'
                  type='submit'
                  style={{ fontSize: '18px', width: '100%' }}
                />
              </div>
            </Form>
            <div>
              <Link href='/register'>Do not have an account?</Link>
            </div>
            <Link href='/register'>Forgot password</Link>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
