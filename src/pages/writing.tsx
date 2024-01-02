import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { donePart, setHeaderExam } from '@/store/exam-slice';

import ExamContentContainer from '@/component/exam-content/exam-content';
import { DATA_MOCK_WRITING } from '@/component/exam-content/exam-content.constants';
import { transformDataExam } from '@/component/exam-content/exam-content.utils';
import { DataContentType, TypeQuestionType } from '@/component/exam-content/exam-content.model';

import Loading from '@/component/common/loading/loading';
import ExamHeader from '@/component/layout/header/exam-header/exam-header';
import { EXAM_TIME } from '@/component/list-exam/list-exam.constant';

const WritingPage = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listQuestion, setListQuestion] = useState<DataContentType[]>([]);
  const [listTypeQuestion, setListTypeQuestion] = useState<TypeQuestionType>({});
  const [contentLeft, setContentLeft] = useState<string[][]>();

  const handleSubmitExam = () => {
    const request: any = {};
    listQuestion.forEach((ele: any) => {
      request[`${ele.id}`] = ele.value;
    });
    dispatch(donePart({ currentPart: 'writing' }));
    const payload = {
      answers: request,
      examTestId: 0,
    };
    // submitPartExam(token, idSubmit, payload);
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
  }, [dispatch]);

  useEffect(() => {
    function makeAPICall() {
      setIsLoading(true);
      setTimeout(() => {
        const dataTransform = transformDataExam(DATA_MOCK_WRITING, true);
        setListQuestion(dataTransform.dataContent);
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
