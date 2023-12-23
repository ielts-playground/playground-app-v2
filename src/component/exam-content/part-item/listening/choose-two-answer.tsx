import { useEffect, useState } from 'react';

import { QUESTION_TYPE } from '@/common/constant';
import { markdownToHtml } from '../../utils';

type Props = {
  listQuestion: any;
  questionActive: number;
  numberOrder: number;
  setQuestionActive: (questionSubId: number) => void;
  handleChangeTwoValue: (questionSubId: number, answer: string) => void;
};

const ListeningChooseTwoAnswer = ({
  listQuestion,
  questionActive,
  numberOrder,
  setQuestionActive,
  handleChangeTwoValue,
}: Props) => {
  const [questionTwoAnswer, setQuestionTwoAnswer] = useState<any>({});

  useEffect(() => {
    const question = listQuestion.find(
      (item: any) =>
        item.type === QUESTION_TYPE.CHOOSE_TWO_ANSWER_LISTENING && item.numberOrder === numberOrder
    );
    setQuestionTwoAnswer(question);
  }, [listQuestion, numberOrder]);

  return (
    <>
      <div className='select-question-container'>
        <div className='one-question-container'>
          <div
            id={`question${questionTwoAnswer.id}`}
            className={`'question' ${
              questionActive === questionTwoAnswer.id ? 'question__active' : ''
            }`}
            onClick={() => setQuestionActive(questionTwoAnswer.id)}
          >
            <span className='question_number'>
              {questionTwoAnswer.id + ' + ' + `${questionTwoAnswer.id + 1}`}
            </span>
            <span
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(questionTwoAnswer.questionTitle),
              }}
            />
          </div>
          <div className='answer-container'>
            {questionTwoAnswer.options?.map((answer: any, index: number) => (
              <label className='container-checkbox' key={index} style={{ lineHeight: '18px' }}>
                {answer.title}
                <input
                  type='checkbox'
                  value={answer.value}
                  checked={questionTwoAnswer.value?.includes(answer.value)}
                  onChange={() => handleChangeTwoValue(questionTwoAnswer.subId, answer.value)}
                />
                <span className='checkmark'></span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListeningChooseTwoAnswer;
