import { useEffect, useState } from 'react';

import ExamContentContainer from '@/component/exam-content/exam-content';
import { DATA_MOCK_LISTENING } from '@/component/exam-content/exam-content.constants';
import { transformDataExam } from '@/component/exam-content/exam-content.utils';
import { DataContentType, TypeQuestionType } from '@/component/exam-content/exam-content.model';

import Loading from '@/component/common/loading/loading';
import useBreakpoint from '@/hooks/use-break-point';
import { getListeningExam } from '@/services/exam';

const ListeningPage = () => {
  const breakpoint = useBreakpoint();
  // console.log(breakpoint);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listQuestion, setListQuestion] = useState<DataContentType[]>([]);
  const [listTypeQuestion, setListTypeQuestion] = useState<TypeQuestionType>({});
  useEffect(() => {
    function makeAPICall() {
      setIsLoading(true);
      setTimeout(() => {
        setListQuestion(transformDataExam(DATA_MOCK_LISTENING).dataContent);
        setListTypeQuestion(transformDataExam(DATA_MOCK_LISTENING).listTypeQuestion);
        setIsLoading(false);
      }, 1000);
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await getListeningExam();
        setListQuestion(transformDataExam(response).dataContent);
        setListTypeQuestion(transformDataExam(response).listTypeQuestion);
        localStorage.setItem('LISTENING', JSON.stringify(response));
        setIsLoading(false);
      } catch (error) {
        console.log('error', error);
        setIsLoading(false);
      }
    };

    getData();
    // makeAPICall();
    window.addEventListener('beforeunload', getData);
    return () => {
      window.removeEventListener('beforeunload', getData);
    };
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
    </>
  );
};

export default ListeningPage;
