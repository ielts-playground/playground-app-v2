import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { ChevronRight, EnvelopeCheck, PersonLock } from 'react-bootstrap-icons';

import { LoginType } from '@/models/auth';
import { EMAIL_REG_EXP } from '@/constant/auth';

import './login.scss';
import InputField from '../exam-content/components/input/input-field';
import FormButton from '../common/form-button/form-button';

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
        <div className='d-flex justify-content-center' style={{ width: '100vw' }}>
          <div className='form-container login-form'>
            <div className='form__content'>
              <Form>
                <div className='login'>
                  <div className='form__field'>
                    <EnvelopeCheck />
                    <InputField name='email' type='text' placeholder='Email' />
                  </div>
                  <div className='form__field'>
                    <PersonLock />
                    <InputField name='password' type='password' placeholder='Password' />
                  </div>
                  <FormButton
                    icon={<ChevronRight />}
                    text='Log In Now'
                    style={{ width: '100%', marginTop: '60px' }}
                  />
                </div>
              </Form>
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

export default Login;
