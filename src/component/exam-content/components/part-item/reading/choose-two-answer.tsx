import { useEffect, useState } from 'react';
import { markdownToHtml } from '@/component/exam-content/exam-content.utils';
import { DataContentType } from '@/component/exam-content/exam-content.model';
import CheckBoxAnswer from '@/component/common/check-box/check-box';
import { DEFAULT_QUESTION } from '@/component/exam-content/exam-content.constants';

const mountedStyle = {
  animation: 'inAnimation 350ms ease-in',
};
const unmountedStyle = {
  animation: 'outAnimation 350ms ease-out',
  animationFillMode: 'forwards',
};

type Props = {
  listQuestion: DataContentType[];
  questionActive: number;
  numberOrder: number;
  setQuestionActive: (questionSubId: number) => void;
  onChangeTwoValue: (questionSubId: number, answer: string) => void;
};

const ChooseTwoAnswerReading = ({
  listQuestion,
  questionActive,
  numberOrder,
  setQuestionActive,
  onChangeTwoValue,
}: Props) => {
  const [question, setQuestion] = useState<DataContentType>(DEFAULT_QUESTION);

  useEffect(() => {
    const questionTwoAnswer = listQuestion.find((item) => item.numberOrder === numberOrder);
    setQuestion(questionTwoAnswer ? questionTwoAnswer : DEFAULT_QUESTION);
  }, [listQuestion, numberOrder]);

  return (
    <>
      <div
        id={`question${question.id}`}
        className={`question ${questionActive === question.id ? 'question__active' : ''}`}
        onClick={() => setQuestionActive(question.subId)}
      >
        <span className='question-number'>{question.id + ' + ' + `${question.id + 1}`}</span>
        <span
          dangerouslySetInnerHTML={{
            __html: markdownToHtml(question.questionTitle || ''),
          }}
        />
      </div>
      {questionActive === question.id && (
        <div
          className='answer-container'
          style={questionActive === question.subId ? mountedStyle : unmountedStyle}
        >
          {question?.options?.map((answer, index) => (
            <CheckBoxAnswer
              key={index}
              title={answer.title}
              value={answer.value}
              checked={question.value?.includes(answer.value)}
              onChangeValue={() => onChangeTwoValue(question.subId, answer.value)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ChooseTwoAnswerReading;
