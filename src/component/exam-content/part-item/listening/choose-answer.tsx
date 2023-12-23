import { Dispatch, SetStateAction } from 'react';
import { QUESTION_TYPE } from '@/common/constant';
import { markdownToHtml } from '../../utils';

const testHTML = `
`;

type Props = {
  listQuestion: any;
  questionActive: any;
  numberOrder: number;
  setQuestionActive: Dispatch<SetStateAction<number>>;
  onChangeValue: (questionId: number, answer: string) => void;
};

const ListeningChooseAnswer: React.FC<Props> = ({
  listQuestion,
  questionActive,
  setQuestionActive,
  onChangeValue,
  numberOrder,
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
            (item: any) =>
              item.type === QUESTION_TYPE.LISTENING_CHOOSE_ANSWER &&
              item.numberOrder === numberOrder
          )
          .map((question: any) => (
            <div className='one-question-container' key={question.id}>
              <div
                id={`question${question.id}`}
                className={`${question} ${questionActive === question.id ? questionActive : ''}`}
                onClick={() => setQuestionActive(question.id)}
              >
                <span className='question-number'>{question.id}</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(question.questionTitle),
                  }}
                />
              </div>
              <div className='answer-container'>
                {question.options.map((answer: any) => (
                  <label
                    className='container-checkbox'
                    key={answer.value}
                    style={{ lineHeight: '18px' }}
                  >
                    {answer.title}
                    <input
                      type='checkbox'
                      value={question.value}
                      checked={question.value === answer.value}
                      onChange={() => onChangeValue(question.id, answer.value)}
                    />
                    <span className='checkmark'></span>
                  </label>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ListeningChooseAnswer;
