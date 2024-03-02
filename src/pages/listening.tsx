import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setHeaderExam } from '@/store/exam-slice';
import useSubmitExam from '@/hooks/use-submit-exam';

import ExamContentContainer from '@/component/exam-content/exam-content';
import { transformDataExam } from '@/component/exam-content/exam-content.utils';
import { DataContentType, TypeQuestionType } from '@/component/exam-content/exam-content.model';

import { getDataExam } from '@/services/exam';
import { EXAM_TIME } from '@/component/list-exam/list-exam.constant';

import Loading from '@/component/common/loading/loading';
import ExamHeader from '@/component/layout/header/exam-header/exam-header';

const ListeningPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { handleSubmit } = useSubmitExam('listening');

  const audioRef = useRef<any>(null);
  const listQuestionRef = useRef<DataContentType[]>([]);
  const idSubmitRef = useRef<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listQuestion, setListQuestion] = useState<DataContentType[]>([]);
  const [listTypeQuestion, setListTypeQuestion] = useState<TypeQuestionType | undefined>(undefined);

  const [idAudio, setIdAudio] = useState<number | undefined | null>(undefined);
  const [volume, setVolume] = useState<string>('50');

  useEffect(() => {
    if (!!audioRef.current) {
      audioRef.current.volume = Number(volume) / 100;
    }
  }, [audioRef, volume]);

  useEffect(() => {
    listQuestionRef.current = listQuestion;
  }, [listQuestion]);

  const handleSubmitExam = () => {
    handleSubmit(listQuestionRef.current, idSubmitRef.current, 'listening', 'reading');
  };

  const examHeader = () => (
    <ExamHeader
      isListening
      typePart='listening'
      examTime={EXAM_TIME.LISTENING}
      onSubmitExam={handleSubmitExam}
      setVolume={setVolume}
    />
  );

  useEffect(() => {
    dispatch(setHeaderExam(examHeader()));

    return () => {
      dispatch(setHeaderExam(undefined));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await getDataExam('listening', '');
      if (response) {
        const data = transformDataExam(response);
        setListQuestion(data.dataContent);
        setListTypeQuestion(data.listTypeQuestion);
        setIdAudio(response.resourceId);

        sessionStorage.setItem('EXAM_ID', String(response.id));
        idSubmitRef.current = response.submitId;
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const unloadCallback = (event: any) => {
      event.preventDefault();
      event.returnValue = '';
      return '';
    };

    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);

  return (
    <>
      <Loading loading={isLoading} />
      <div className='page-container'>
        <ExamContentContainer
          isListening
          listTypeQuestion={listTypeQuestion}
          listQuestion={listQuestion}
          setListQuestion={setListQuestion}
        />
      </div>
      {idAudio && (
        <audio
          ref={audioRef}
          autoPlay
          muted={false}
          src={`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/api/v1/test/${idAudio}/audio`}
        />
      )}
    </>
  );
};

export default ListeningPage;
