import { Formik, Form } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';
import {
  ChevronRight,
  EnvelopeAt,
  PersonFillLock,
  PersonLock,
  PersonVcard,
  Telephone,
  XLg,
} from 'react-bootstrap-icons';

import { RegisterType } from '@/models/auth';
import { EMAIL_REG_EXP, PHONE_REG_EXP } from '@/constant/auth';

import InputField from '../exam-content/components/input/input-field';
import FormButton from '../common/form-button/form-button';

import './register.scss';

type Props = {
  onRegister: (values: RegisterType) => void;
};

const Register = ({ onRegister }: Props) => {
  const validate = Yup.object({
    fullName: Yup.string()
      .min(3, 'Must be 15 characters or less')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    email: Yup.string().matches(EMAIL_REG_EXP, 'Email is invalid').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(PHONE_REG_EXP, 'Phone number is invalid')
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
        <div className='register-container' style={{ width: '100vw' }}>
          <div className='form-container'>
            <div className='form__content register-form'>
              <div className='register'>
                <h1 className='my-4 font-weight-bold sign-up-button'>Sign Up</h1>
                <Form>
                  <div className='form__field'>
                    <PersonVcard />
                    <InputField name='fullName' type='text' placeholder='Full Name' />
                  </div>
                  <div className='form__field'>
                    <EnvelopeAt />
                    <InputField name='email' type='email' placeholder='Email' />
                  </div>
                  <div className='form__field'>
                    <Telephone />
                    <InputField name='phoneNumber' type='text' placeholder='Phone' />
                  </div>
                  <div className='form__field'>
                    <PersonLock />
                    <InputField name='password' type='password' placeholder='Password' />
                  </div>
                  <div className='form__field'>
                    <PersonFillLock />
                    <InputField
                      name='passwordConfirm'
                      type='password'
                      placeholder='Confirm Password'
                    />
                  </div>
                  <div className='d-flex gap-4 button-register'>
                    <FormButton
                      icon={<ChevronRight />}
                      text='Register Now'
                      style={{ width: '180px' }}
                    />
                    <FormButton
                      type='reset'
                      icon={<XLg />}
                      text='Reset'
                      style={{ width: '160px' }}
                    />
                  </div>
                </Form>
                <div className='mt-4'>
                  <Link href='/login'>Do you have an account?</Link>
                </div>
              </div>
            </div>
            <div className='screen__background'>
              <span className='screen__background__shape screen__background__shape4'></span>
              <span className='screen__background__shape screen__background__shape3'></span>
              <span className='screen__background__shape screen__background__shape2'></span>
              <span className='screen__background__shape screen__background__shape1'></span>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register;
