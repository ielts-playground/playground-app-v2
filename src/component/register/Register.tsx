import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';

import './Register.scss';
import Button from '../common/button/Button';
import Link from 'next/link';
import { Register } from '@/models/register';
import { registerApi } from '@/services/login';

const phoneRegExp =
  /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;

const Register = () => {
  const validate = Yup.object({
    fullName: Yup.string()
      .min(3, 'Must be 15 characters or less')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Phone is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Confirm password is required'),
  });

  const handleSubmit = async (values: Register) => {
    await registerApi({ ...values, subscription: 'FREE' });
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        passwordConfirm: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => handleSubmit(values)}
    >
      {() => (
        <div>
          <h1 className='my-4 font-weight-bold sign-up-button'>Sign Up</h1>
          <Form>
            <TextField label='Full Name' name='fullName' type='text' />
            <TextField label='Email' name='email' type='email' />
            <TextField label='Phone' name='phoneNumber' type='text' />
            <TextField label='Password' name='password' type='password' />
            <TextField label='Confirm Password' name='passwordConfirm' type='password' />
            <div className='d-flex justify-content-center gap-4 mt-20'>
              <Button text='Register' type='submit' />
              <Button text='Reset' type='reset' />
            </div>
          </Form>
          <div className='mt-4'>
            <Link href='/sign-in'>Do you have an account?</Link>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
