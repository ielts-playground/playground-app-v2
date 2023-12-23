import { useEffect, useState } from 'react';

type Props = {
  listQuestion: any;
  questionActive: any;
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
  const [numberOfPart, setNumberOfPart] = useState<number[]>([]);
  useEffect(() => {
    const partLastNumber = listQuestion[listQuestion?.length - 1]?.part;

    const arrNumberPart = Array.from({ length: partLastNumber }, (_, index) => index + 1);
    setNumberOfPart(arrNumberPart);
  }, [listQuestion]);

  return (
    <div className='navigator-question-container'>
      <div className='review-container'>
        <input
          id='check-box'
          type='checkbox'
          checked={isReview || undefined}
          onChange={onChangeReviewQuestion}
        />
        <label htmlFor='check-box' className='review-title'>
          Review
        </label>
      </div>
      <div className='list-part-container'>
        {numberOfPart.map((ele) => (
          <div key={ele}>
            {listQuestion.filter((item: any) => item.part === ele).length ? (
              <div className='part-item' key={ele}>
                <h3 className={`'part-name' ${ele > 1 ? 'part-name-right' : ''}`}>Part {ele}:</h3>
                {listQuestion
                  .filter((item: any) => item.part === ele)
                  .map((question: any) => (
                    <button
                      key={question.id}
                      className={`'question-item' ${
                        questionActive === question.subId ? 'question__active' : ''
                      } ${question.id > 9 ? 'question__special' : ''} ${
                        question.isAnswer ? 'question__answered' : ''
                      } ${question.isReview ? 'question__review  ' : ''}`}
                      onClick={() => onSetQuestionActive(question.subId, question.part)}
                    >
                      {question.id}
                    </button>
                  ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
      <div className='list-feautre-button'>
        <button
          className={`'button-feautre' 'button-previous' ${
            questionActive === 1 ? 'button-prev__disable' : ''
          }`}
          onClick={() => onSelectPrevOrNextQuestion(questionActive - 1)}
        ></button>
        <button
          className={`'button-feautre' 'button-next' ${
            questionActive === listQuestion[listQuestion.length - 1]?.id
              ? 'button-next__disable'
              : ''
          }`}
          onClick={() => onSelectPrevOrNextQuestion(questionActive + 1)}
        ></button>
      </div>
    </div>
  );
};

export default NavigatorQuestion;
