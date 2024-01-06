import { useEffect, useRef, useState } from 'react';

import { useDispatch } from 'react-redux';
import { donePart, setHeaderExam } from '@/store/exam-slice';

import ExamContentContainer from '@/component/exam-content/exam-content';
import { DATA_MOCK_WRITING } from '@/component/exam-content/exam-content.constants';
import { transformDataExam } from '@/component/exam-content/exam-content.utils';
import { DataContentType, TypeQuestionType } from '@/component/exam-content/exam-content.model';

import Loading from '@/component/common/loading/loading';
import ExamHeader from '@/component/layout/header/exam-header/exam-header';
import { EXAM_TIME } from '@/component/list-exam/list-exam.constant';
import { getDataExam, submitExam } from '@/services/exam';
import { AnswerRequest, ExamRequest } from '@/component/list-exam/list-exam.model';

const WritingPage = () => {
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
      request[`${ele.id}`] = ele.value;
    });

    const payload: ExamRequest = {
      answers: request,
      examTestId: 0,
    };

    submitExam(idSubmitRef.current, payload);
    dispatch(donePart({ currentPart: 'writing' }));
  };

  const examHeader = () => (
    <ExamHeader typePart='writing' examTime={EXAM_TIME.WRITING} onSubmitExam={handleSubmitExam} />
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
      const examId = sessionStorage.getItem('EXAM_ID');
      const response = await getDataExam('writing', Number(examId));
      if (response) {
        const data = transformDataExam(response, true);
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
          isWriting
          listTypeQuestion={listTypeQuestion}
          contentLeft={contentLeft}
          listQuestion={listQuestion}
          setListQuestion={setListQuestion}
        />
      </div>
    </>
  );
};

export default WritingPage;
