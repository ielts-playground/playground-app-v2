import { Dispatch, SetStateAction } from 'react';
import { QUESTION_TYPE } from '@/common/constant';
import { markdownToHtml } from '../../../exam-content.utils';
import CheckBoxAnswer from '@/component/common/check-box/check-box';
import { DataContentType } from '../../../exam-content.model';

const testHTML = `
`;

type Props = {
  listQuestion: DataContentType[];
  questionActive: number;
  numberOrder: number;
  setQuestionActive: Dispatch<SetStateAction<number>>;
  onChangeValue: (questionId: number, answer: string) => void;
};

const ListeningChooseAnswer = ({
  listQuestion,
  questionActive,
  numberOrder,
  setQuestionActive,
  onChangeValue,
}: Props) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: testHTML,
        }}
      />

      <div className='select-question-container'>
        {listQuestion
          .filter(
            (item) =>
              item.type === QUESTION_TYPE.LISTENING_CHOOSE_ANSWER &&
              item.numberOrder === numberOrder
          )
          .map((question) => (
            <div className='one-question-container' key={question.id}>
              <div
                id={`question${question.id}`}
                className={`question ${questionActive === question.id ? 'question__active' : ''}`}
                onClick={() => setQuestionActive(question.id)}
              >
                <span className='question-number'>{question.id}</span>
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
                    value={question.value}
                    checked={question.value === answer.value}
                    onChangeValue={() => onChangeValue(question.id, answer.value)}
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListeningChooseAnswer;
