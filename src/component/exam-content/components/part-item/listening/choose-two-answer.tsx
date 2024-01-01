import { useEffect, useState } from 'react';

import { QUESTION_TYPE } from '@/common/constant';
import { markdownToHtml } from '../../../exam-content.utils';

import { DataContentType } from '../../../exam-content.model';
import CheckBoxAnswer from '@/component/common/check-box/check-box';
import { DEFAULT_QUESTION } from '../../../exam-content.constants';

type Props = {
  listQuestion: DataContentType[];
  questionActive: number;
  numberOrder: number;
  setQuestionActive: (questionSubId: number) => void;
  onChangeTwoValue: (questionSubId: number, answer: string) => void;
};

const ListeningChooseTwoAnswer = ({
  listQuestion,
  questionActive,
  numberOrder,
  setQuestionActive,
  onChangeTwoValue,
}: Props) => {
  const [question, setQuestion] = useState<DataContentType>(DEFAULT_QUESTION);

  useEffect(() => {
    const question = listQuestion.find(
      (item) =>
        item.type === QUESTION_TYPE.CHOOSE_TWO_ANSWER_LISTENING && item.numberOrder === numberOrder
    );
    setQuestion(question || DEFAULT_QUESTION);
  }, [listQuestion, numberOrder]);

  return (
    <>
      <div className='select-question-container'>
        <div className='one-question-container'>
          <div
            id={`question${question.id}`}
            className={`question ${questionActive === question.id ? 'question__active' : ''}`}
            onClick={() => setQuestionActive(question.id)}
          >
            <span className='question_number'>{question.id + ' + ' + `${question.id + 1}`}</span>
            <span
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(question.questionTitle || ''),
              }}
            />
          </div>
          <div className='answer-container'>
            {question.options?.map((answer, index) => (
              <CheckBoxAnswer
                key={index}
                title={answer.title}
                value={answer.value}
                checked={question.value?.includes(answer.value)}
                onChangeValue={() => onChangeTwoValue(question.subId, answer.value)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListeningChooseTwoAnswer;
