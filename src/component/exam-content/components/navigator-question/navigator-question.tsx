import { Fragment, useEffect, useState } from 'react';
import useHandleChangeListQuestion from '../../hooks/use-handle-change-list-question';
import { DataContentType } from '../../exam-content.model';

import './navigator-question.scss';

type Props = {
  listQuestion: DataContentType[];
  questionActive: number;
  isReview: boolean;
  onSetQuestionActive: (questionSubId: number, partActiveBar: number) => void;
  onChangeReviewQuestion: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectPrevOrNextQuestion: (questionId: number) => void;
};

const NavigatorQuestion = ({
  listQuestion,
  questionActive,
  isReview,
  onSetQuestionActive,
  onChangeReviewQuestion,
  onSelectPrevOrNextQuestion,
}: Props) => {
  const { getQuestionActive } = useHandleChangeListQuestion();

  const [numberOfPart, setNumberOfPart] = useState<number[]>([]);
  useEffect(() => {
    const partLastNumber = listQuestion[listQuestion?.length - 1]?.part;

    const arrNumberPart = Array.from({ length: partLastNumber }, (_, index) => index + 1);
    setNumberOfPart(arrNumberPart);
  }, [listQuestion]);

  return (
    <div className='navigator-question-container'>
      <div className='review-container'>
        <label className='container review-title'>
          <input
            type='checkbox'
            checked={isReview || undefined}
            onChange={onChangeReviewQuestion}
          />
          <span className='checkmark'></span>
          Review
        </label>
      </div>
      <div className='list-part-container'>
        {numberOfPart.map((ele) => (
          <Fragment key={ele}>
            {listQuestion.filter((item) => item.part === ele).length ? (
              <div className='part-item' key={ele}>
                <h3 className={`part-name ${ele > 1 ? 'part-name-right' : ''}`}>Part {ele}:</h3>
                {listQuestion
                  .filter((item) => item.part === ele)
                  .map((question) => (
                    <button
                      key={question.id}
                      className={`question-item ${
                        questionActive === question.subId ? 'question__active' : ''
                      }  ${question.isAnswer ? 'question__answered' : ''} ${
                        question.isReview ? 'question__review  ' : ''
                      }`}
                      onClick={() => onSetQuestionActive(question.subId, question.part)}
                    >
                      <span>{question.id}</span>
                    </button>
                  ))}
              </div>
            ) : (
              <></>
            )}
          </Fragment>
        ))}
      </div>
      <div className='list-feature-button'>
        <button
          className={`button-feature button-previous ${
            questionActive === 1 ? 'button-prev__disable' : ''
          }`}
          onClick={() =>
            onSelectPrevOrNextQuestion(getQuestionActive(listQuestion, questionActive, false))
          }
        ></button>
        <button
          className={`button-feature button-next ${
            questionActive === listQuestion[listQuestion.length - 1]?.id
              ? 'button-next__disable'
              : ''
          }`}
          onClick={() =>
            onSelectPrevOrNextQuestion(getQuestionActive(listQuestion, questionActive))
          }
        ></button>
      </div>
    </div>
  );
};

export default NavigatorQuestion;
