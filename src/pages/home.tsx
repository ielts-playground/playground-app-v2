import { useRouter } from 'next/router';
import Button from '@/component/common/button/button';
import { LIST_ROUTER } from '@/common/constant';

const Home = () => {
  const router = useRouter();

  const handleToExam = () => {
    router.push(LIST_ROUTER.LIST_EXAM);
  };

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Button text='Go to exam' onClick={handleToExam} />
    </div>
  );
};

export default Home;
