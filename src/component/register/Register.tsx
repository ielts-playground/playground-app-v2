import { Formik, Form } from 'formik';
import Link from 'next/link';
import Image from 'next/image';

import * as Yup from 'yup';
import { TextField } from './TextField';

import { RegisterType } from '@/models/auth';

import Button from '../common/button/Button';
import { PHONE_REG_EXP } from '@/constant/auth';
import rocketImg from '../../../public/assets/rocket.png';

import './Register.scss';

type Props = {
  onRegister: (values: RegisterType) => void;
};

const Register = ({ onRegister }: Props) => {
  const validate = Yup.object({
    fullName: Yup.string()
      .min(3, 'Must be 15 characters or less')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(PHONE_REG_EXP, 'Phone number is not valid')
      .required('Phone is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 charaters')
      .required('Password is required'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'Password must match')
      .required('Confirm password is required'),
  });

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
      onSubmit={(values) => onRegister(values)}
    >
      {() => (
        <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-5 col-sm-12'>
              <div>
                <h1 className='my-4 font-weight-bold sign-up-button'>Sign Up</h1>
                <Form>
                  <TextField label='Full Name' name='fullName' type='text' />
                  <TextField label='Email' name='email' type='email' />
                  <TextField label='Phone' name='phoneNumber' type='text' />
                  <TextField label='Password' name='password' type='password' />
                  <TextField label='Confirm Password' name='passwordConfirm' type='password' />
                  <div className='d-flex gap-4 mt-20'>
                    <Button text='Register' type='submit' style={{ fontSize: '18px' }} />
                    <Button text='Reset' type='reset' style={{ fontSize: '18px' }} />
                  </div>
                </Form>
                <div className='mt-4'>
                  <Link href='/login'>Do you have an account?</Link>
                </div>
              </div>
            </div>
            <div className='col-md-7 col-sm-12 my-auto'>
              <Image className='img-fluid w-100' src={rocketImg} alt='' />
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
