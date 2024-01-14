import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { useEffect } from 'react';
import { CheckLg, ChevronRight } from 'react-bootstrap-icons';

import { setTypeRegister } from '@/store/auth-slice';
import { setIsInit } from '@/store/common-slice';
import backgroundImage from '~/assets/images/sky.jpg';

import FormButton from '../common/form-button/form-button';
import './init-page.scss';

const Init = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsInit(true));

    return () => {
      dispatch(setIsInit(false));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToRegister = (typeRegister: string) => {
    dispatch(setTypeRegister(typeRegister));
    router.push('/register', { scroll: true });
  };
  return (
    <>
      <div className='container'>
        <Image width={100} height={100} className='background' src={backgroundImage} alt='' />
        <p className='message'>
          All your dreams can come true
          <br />
          if you have the courage to pursue them
        </p>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
        <div className='circle-container'>
          <div className='circle'></div>
        </div>
      </div>
      <div className='init-page'>
        <div>
          <h1>IELTS Playground</h1>
          <p>The best place for all IELTS enthusiasts.</p>
        </div>
        <div>
          <ul>
            <li className='d-flex gap-2'>
              <CheckLg />
              <span className='ml-2'>999+ IELTS tests ready for you to explore</span>
            </li>
            <li className='d-flex gap-2'>
              <CheckLg />
              <span>Always up-to-date with the newest IELTS tests in Vietnam</span>
            </li>
          </ul>
        </div>
        <div className='button-container mb-4'>
          <FormButton
            text='FREE'
            icon={<ChevronRight />}
            style={{ width: '140px' }}
            onClick={() => handleToRegister('FREE')}
          />
          <FormButton
            text='V.I.P'
            icon={<ChevronRight />}
            style={{ width: '140px' }}
            onClick={() => handleToRegister('PREMIUM')}
          />
        </div>
        <Link href='/login'>Do you have an account?</Link>
      </div>
    </>
  );
};

export default Init;
