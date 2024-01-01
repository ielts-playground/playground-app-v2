import { useRouter } from 'next/router';

import { LIST_EXAMS } from './constant';
import Button from '../common/button/button';

import './list-exam.scss';

const ListExam = () => {
  const router = useRouter();

  const handleToExam = (nextExam: string) => {
    router.push(nextExam);
  };

  return (
    <div className='list-exam__container'>
      {LIST_EXAMS.map((item, index) => (
        <div key={index} className='part-item'>
          <h2 className='title-part'>{item.title}</h2>
          <div className='time fs-18 my-2'>
            Time: {item.title === 'listening' ? '32 minutes' : '1 hour'}
          </div>
          <Button text={item.title} onClick={() => handleToExam(item.title)} />
        </div>
      ))}
      <Button text='RESET EXAM' onClick={() => {}} />
    </div>
  );
};

export default ListExam;
