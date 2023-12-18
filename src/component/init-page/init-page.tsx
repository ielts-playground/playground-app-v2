import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { setTypeRegister } from '@/store/auth-slice';

import Button from '../common/button/button';
import './init-page.scss';

const Init = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleToRegister = (typeRegister: string) => {
    dispatch(setTypeRegister(typeRegister));
    router.push('/register', { scroll: true });
  };
  return (
    <div className='home'>
      <div className='button-container mb-4'>
        <Button className='w-200' text='FREE' onClick={() => handleToRegister('FREE')} />
        <Button className='w-200' text='V.I.P' onClick={() => handleToRegister('PREMIUM')} />
      </div>
      <Link href='/login'>Do you have an account?</Link>
    </div>
  );
};

export default Init;
