import { useEffect, useState } from 'react';

import ExamContentContainer from '@/component/exam-content/exam-content';
import { DATA_MOCK_TRANSFORM_LISTENING } from '@/component/exam-content/exam-content.constants';
import Loading from '@/component/common/loading/loading';

const Reading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [listQuestion, setListQuestion] = useState<any>([]);
  const [listTypeQuestion, setListTypeQuestion] = useState<any>({});

  useEffect(() => {
    function makeAPICall() {
      setIsLoading(true);
      setTimeout(() => {
        setListQuestion(DATA_MOCK_TRANSFORM_LISTENING.dataContent);
        setListTypeQuestion(DATA_MOCK_TRANSFORM_LISTENING.listTypeQuestion);
        setIsLoading(false);
      }, 1000);
    }

    // const getData = async () => {
    //   try {
    //     setIsLoading(true);
    //     const response = await getDataListeningApi(token);
    //     if (response) {
    //       const dataListening = convertData(response.data);
    //       setListQuestion(dataListening.dataContent);
    //       setListTypeQuestion(dataListening.listTypeQuestion);
    //       setIdSubmit(response.data.submitId);
    //       setIdExam(response.data.id);
    //       setIdAudio(response.data.resourceId);
    //       setIsLoading(false);
    //     }
    //   } catch (error) {
    //     console.log('error', error);
    //     setIsLoading(false);
    //   }
    // };

    makeAPICall();
    // makeAPICall();
  }, []);

  return (
    <>
      <Loading loading={isLoading} />
      <div className='page-container'>
        <ExamContentContainer
          isListening
          listQuestion={listQuestion}
          setListQuestion={setListQuestion}
          listTypeQuestion={listTypeQuestion}
        />
      </div>
    </>
  );
};

export default Reading;
