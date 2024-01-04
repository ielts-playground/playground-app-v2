import { useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { donePart, setHeaderExam } from '@/store/exam-slice';

import { AnswerRequest, ExamRequest } from '@/component/list-exam/list-exam.model';
import { getDataExam, submitExam } from '@/services/exam';
import { transformDataExam } from '@/component/exam-content/exam-content.utils';

import { EXAM_TIME } from '@/component/list-exam/list-exam.constant';
import { QUESTION_TYPE } from '@/common/constant';
import { DataContentType, TypeQuestionType } from '@/component/exam-content/exam-content.model';

import Loading from '@/component/common/loading/loading';
import ExamHeader from '@/component/layout/header/exam-header/exam-header';
import ExamContentContainer from '@/component/exam-content/exam-content';

const ReadingPage = () => {
  const dispatch = useDispatch();

  const listQuestionRef = useRef<DataContentType[]>([]);
  const idSubmitRef = useRef<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listQuestion, setListQuestion] = useState<DataContentType[]>([]);
  const [listTypeQuestion, setListTypeQuestion] = useState<TypeQuestionType | undefined>(undefined);
  const [contentLeft, setContentLeft] = useState<string[][]>();

  useEffect(() => {
    listQuestionRef.current = listQuestion;
  }, [listQuestion]);

  const handleSubmitExam = () => {
    const request: AnswerRequest = {};

    listQuestionRef.current?.forEach((ele) => {
      if (ele.type === QUESTION_TYPE.CHOOSE_TWO_ANSWER_LISTENING) {
        request[`${ele.subId}-${ele.subId + 1}`] = JSON.stringify(ele.value);
      } else request[`${ele.id}`] = ele.value;
    });

    const payload: ExamRequest = {
      answers: request,
      examTestId: 0,
    };

    submitExam(idSubmitRef.current, payload);
    dispatch(donePart({ currentPart: 'reading', nextPart: 'writing' }));
  };

  const examHeader = () => (
    <ExamHeader typePart='reading' examTime={EXAM_TIME.LISTENING} onSubmitExam={handleSubmitExam} />
  );

  useEffect(() => {
    dispatch(setHeaderExam(examHeader()));

    return () => {
      dispatch(setHeaderExam(undefined));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const examId = sessionStorage.getItem('EXAM_ID');
      const response = await getDataExam('reading', Number(examId));
      if (response) {
        const data = transformDataExam(response);
        setListQuestion(data.dataContent);
        setListTypeQuestion(data.listTypeQuestion);
        setContentLeft(data.contentLeft);
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
          isReading
          listTypeQuestion={listTypeQuestion}
          contentLeft={contentLeft}
          listQuestion={listQuestion}
          setListQuestion={setListQuestion}
        />
      </div>
    </>
  );
};

export default ReadingPage;
