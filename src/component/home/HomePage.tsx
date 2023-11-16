import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

import { selectAuthState } from '@/store/authSlice';

import Button from '../common/button/Button';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const router = useRouter();
  const authState = useSelector(selectAuthState);
  console.log(authState);

  const dispatch = useDispatch();

  const handleToRegister = () => {
    router.push('/register', { scroll: true });
  };
  return (
    <div className={styles.home}>
      <div className={styles.buttonContainer}>
        <Button text='Free' onClick={handleToRegister} />
        <Button text='Vip' onClick={handleToRegister} />
      </div>
    </div>
  );
};

export default HomePage;
