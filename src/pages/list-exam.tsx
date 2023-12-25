import { DATA_MOCK } from '@/component/exam-content/exam-content.constants';
import { convertData } from '@/component/exam-content/exam-content.utils';
import ListExam from '@/component/list-exam/list-exam';
import React from 'react';

const ListExamPage = () => {
  const test = convertData(DATA_MOCK);
  console.log('test', test);

  return (
    <div>
      <ListExam />
    </div>
  );
};

export default ListExamPage;
