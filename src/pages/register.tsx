import Image from 'next/image';
import Register from '@/component/register/Register';
import rocketImg from '../../public/assets/rocket.png';

const RegisterPage = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-5 col-sm-12'>
          <Register />
        </div>
        <div className='col-md-7 col-sm-12 my-auto'>
          <Image className='img-fluid w-100' src={rocketImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
