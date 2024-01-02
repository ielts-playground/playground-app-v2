import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { donePart, setHeaderExam } from '@/store/exam-slice';

import { DATA_MOCK_READING } from '@/component/exam-content/exam-content.constants';
import { transformDataExam } from '@/component/exam-content/exam-content.utils';
import { EXAM_TIME } from '@/component/list-exam/list-exam.constant';
import { QUESTION_TYPE } from '@/common/constant';
import { DataContentType, TypeQuestionType } from '@/component/exam-content/exam-content.model';

import Loading from '@/component/common/loading/loading';
import ExamHeader from '@/component/layout/header/exam-header/exam-header';
import ExamContentContainer from '@/component/exam-content/exam-content';

const ReadingPage = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listQuestion, setListQuestion] = useState<DataContentType[]>([]);
  const [listTypeQuestion, setListTypeQuestion] = useState<TypeQuestionType>({});
  const [contentLeft, setContentLeft] = useState<string[][]>();

  const handleSubmitExam = () => {
    const request: any = {};
    listQuestion.forEach((ele) => {
      if (ele.type === QUESTION_TYPE.CHOOSE_TWO_ANSWER) {
        request[`${ele.subId}-${ele.subId + 1}`] = JSON.stringify(ele.value);
      } else request[`${ele.id}`] = ele.value;
    });
    dispatch(donePart({ currentPart: 'reading', nextPart: 'writing' }));
    const payload = {
      answers: request,
      examTestId: 0,
    };
    // submitPartExam(token, idSubmit, payload);
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
    function makeAPICall() {
      setIsLoading(true);
      setTimeout(() => {
        const dataTransform = transformDataExam(DATA_MOCK_READING);
        setListQuestion(dataTransform.dataContent);
        setListTypeQuestion(dataTransform.listTypeQuestion);
        setContentLeft(dataTransform.contentLeft);
        setIsLoading(false);
      }, 1000);
    }

    makeAPICall();
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
