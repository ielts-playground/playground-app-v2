import { Dispatch, SetStateAction } from 'react';

import { markdownToHtml } from '@/component/exam-content/exam-content.utils';
import { DataContentType } from '@/component/exam-content/exam-content.model';
import CheckBoxAnswer from '@/component/common/check-box/check-box';

const mountedStyle = {
  animation: 'inAnimation 350ms ease-in',
};
const unmountedStyle = {
  animation: 'outAnimation 350ms ease-out',
  animationFillMode: 'forwards',
};

const contentTitleQuestion = `
`;

type Props = {
  listQuestion: DataContentType[];
  questionActive: number;
  numberOrder: number;
  setQuestionActive: Dispatch<SetStateAction<number>>;
  onChangeValue: (questionId: number, answer: string) => void;
};

const ChooseOneAnswerReading = ({
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
          __html: markdownToHtml(contentTitleQuestion),
        }}
      />
      {listQuestion
        .filter((item) => item.numberOrder === numberOrder)
        .map((question) => (
          <div key={question.id}>
            <div
              id={`question${question.id}`}
              className={`question ${questionActive === question.id ? 'question__active' : ''}`}
              onClick={() => setQuestionActive(question.id)}
            >
              <span className='question-number'>{question.id}</span>
              <span>{question.questionTitle}</span>
            </div>
            {questionActive === question.id && (
              <div
                className='answer-container'
                style={questionActive === question.id ? mountedStyle : unmountedStyle}
              >
                {question?.options?.map((answer, index) => (
                  <CheckBoxAnswer
                    key={index}
                    title={answer.title}
                    value={question.value}
                    checked={question.value === answer.value}
                    onChangeValue={() => onChangeValue(question.id, answer.value)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default ChooseOneAnswerReading;
