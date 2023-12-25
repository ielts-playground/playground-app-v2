import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { formatTime } from './utils';

import TimeExam from '~/svg/time-exam.svg';
import ListenExam from '~/public/svg/listen-exam.svg';
import Button from '@/component/common/button/button';
import Modal from './modal/modal';

type Props = {
  typePart: string;
  isListening?: boolean;
  examTime: number;
  onSubmitExam: () => void;
  setVolume?: (value: string) => void;
};

const ExamHeader = ({ typePart, isListening, examTime, onSubmitExam, setVolume }: Props) => {
  const router = useRouter();

  const [timer, setTimer] = useState<number>(examTime);
  const [isHoverTime, setIsHoverTime] = useState<boolean>(false);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  useEffect(() => {
    if (!timer) {
      // donePart(typePart);
      onSubmitExam();
      if (typePart === 'writing') {
        router.push('thanks');
        return;
      }
      router.push('list-exam');
      return;
    }
    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer]);

  const handleMouseOver = () => {
    setIsHoverTime(true);
  };

  const handleMouseLeave = () => {
    setIsHoverTime(false);
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const timeWarning = useMemo(() => {
    return timer < 600 ? 'time__warning' : '';
  }, [timer]);

  return (
    <header className='exam-header-container'>
      <div className='info-container'>
        <h4>Logo</h4>
        <span className='info-user'>Tran Van Bac</span>
      </div>
      <div className='info-container'>
        <div className='icon-size'>
          <TimeExam />
        </div>
        {isHoverTime ? (
          <div className={`'time__down' ${timeWarning}`} onMouseLeave={handleMouseLeave}>
            <span className='time'>{formatTime(timer).minutesAndSeconds}</span>
            <span className='left-text'>left</span>
          </div>
        ) : (
          <div
            className={`'time__down' ${timeWarning}`}
            onFocus={() => {}}
            onMouseOver={handleMouseOver}
          >
            <span className='time'>{formatTime(timer).minutes}</span>
            <span className='left-text'>minutes left</span>
          </div>
        )}
      </div>
      <div className={isListening ? 'right-info' : ''}>
        {isListening && (
          <div className='listening-box'>
            <div className='size-icon'>
              <ListenExam />
            </div>
            <input
              type='range'
              className='slide-volume'
              onInput={(e: any) => setVolume && setVolume(e.target.value)}
            />
          </div>
        )}
        <Button text='Submit' onClick={handleOpenModal} />
      </div>

      <Modal
        isOpen={isShowModal}
        typePart={typePart}
        setIsOpen={setIsShowModal}
        onSubmitExam={onSubmitExam}
      />
    </header>
  );
};

export default ExamHeader;
