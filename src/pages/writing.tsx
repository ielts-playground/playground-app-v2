import { useEffect, useState } from 'react';

import ExamContentContainer from '@/component/exam-content/exam-content';
import { DATA_MOCK_WRITING } from '@/component/exam-content/exam-content.constants';
import { transformDataExam } from '@/component/exam-content/exam-content.utils';
import { DataContentType, TypeQuestionType } from '@/component/exam-content/exam-content.model';

import Loading from '@/component/common/loading/loading';

const WritingPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listQuestion, setListQuestion] = useState<DataContentType[]>([]);
  const [listTypeQuestion, setListTypeQuestion] = useState<TypeQuestionType>({});
  const [contentLeft, setContentLeft] = useState<string[][]>();

  useEffect(() => {
    function makeAPICall() {
      setIsLoading(true);
      setTimeout(() => {
        const dataTransform = transformDataExam(DATA_MOCK_WRITING);
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
