import { useRouter } from 'next/router';

import { useDispatch, useSelector } from 'react-redux';
import { INIT_LIST_EXAM, setListExam, selectExamState, ItemExam } from '@/store/exam-slice';

import Button from '../common/button/button';

import './list-exam.scss';

const ListExam = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const examState = useSelector(selectExamState);
  const { listExam } = examState;

  const handleToExam = (nextExam: string) => {
    router.push(nextExam);
  };

  const handleResetExam = () => {
    dispatch(setListExam(INIT_LIST_EXAM));
  };

  return (
    <div className='list-exam__container'>
      {listExam?.map((item) => (
        <div key={item.title} className='part-item'>
          <h2 className='title-part'>{item.title}</h2>
          <h4 className={item.isCompleted && item.isPrevPartDone ? 'completed' : 'not-completed'}>
            {item.isCompleted ? 'Completed' : 'Not Completed'}
          </h4>
          <div className='time fs-18 my-2'>
            Time: {item.title === 'listening' ? '32 minutes' : '1 hour'}
          </div>
          <Button
            text={item.title}
            disabled={item.isCompleted || !item.isPrevPartDone}
            onClick={() => handleToExam(item.title)}
          />
        </div>
      ))}
      <Button text='RESET EXAM' onClick={handleResetExam} />
    </div>
  );
};

export default ListExam;
