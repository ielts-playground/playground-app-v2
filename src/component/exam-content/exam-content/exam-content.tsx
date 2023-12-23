import { Dispatch, Fragment, SetStateAction, useState } from 'react';

import { countWords, markdownToHtml } from '../utils';
import { QUESTION_TYPE } from '@/common/constant';

import ListeningChooseAnswer from '../part-item/listening/choose-answer';

type Props = {
  isListening: boolean;
  isReading: boolean;
  listQuestionTypeInPart: string[];
  leftContent: string[];
  listQuestionInPart: any[];
  partActive: number;
  setListQuestion: Dispatch<SetStateAction<ListQuestionType[]>>;
  onChangeValue: (questionId: number, answer: string) => void;
};

const ExamContent = ({
  isListening,
  isReading,
  listQuestionTypeInPart,
  leftContent,
  listQuestionInPart,
  partActive,
  setListQuestion,
  onChangeValue,
}: Props) => {
  const [questionActive, setQuestionActive] = useState<number>(1);

  const renderContent = (type: string, numberOrder: number) => {
    switch (type) {
      case QUESTION_TYPE.LISTENING_CHOOSE_ANSWER:
        return (
          <ListeningChooseAnswer
            numberOrder={numberOrder}
            listQuestion={listQuestionInPart}
            questionActive={questionActive}
            setQuestionActive={setQuestionActive}
            onChangeValue={onChangeValue}
          />
        );

      default:
        return <></>;
    }
  };

  const handleChangeAnswerWriting = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setListQuestion((prev) => {
      const newData = [...prev];
      newData[partActive - 1].value = event.target.value;
      if (event.target.value) {
        newData[partActive - 1].isAnswer = true;
      } else {
        newData[partActive - 1].isAnswer = false;
      }
      return newData;
    });
  };

  return (
    <div
      className={`'exam-content-container' ${
        isListening ? 'listening-container' : 'content-container'
      }`}
      style={isListening ? { overflow: 'auto' } : {}}
    >
      {isListening ? (
        <div className='listening-content'>
          {listQuestionTypeInPart.length ? (
            listQuestionTypeInPart.map((item, index) => (
              <Fragment key={index}>{renderContent(item, index + 1)}</Fragment>
            ))
          ) : (
            <></>
          )}
        </div>
      ) : (
        <>
          <div className='topic-container left-topic'>
            <div className='topic-content'>
              {leftContent.map((item, index) => (
                <span
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(item),
                  }}
                />
              ))}
            </div>
          </div>
          <div className='topic-container right-topic'>
            {isReading ? (
              <div className='topic-content'>
                {listQuestionTypeInPart?.length ? (
                  listQuestionTypeInPart.map((item, index) => (
                    <Fragment key={index}>
                      {index > 0 && <hr />}
                      {renderContent(item, index + 1)}
                    </Fragment>
                  ))
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div className='topic-writing-content'>
                <textarea
                  autoCapitalize='off'
                  spellCheck='false'
                  autoComplete='off'
                  value={listQuestionInPart[0]?.value}
                  onChange={handleChangeAnswerWriting}
                />
                <span>
                  Word count:
                  {listQuestionInPart[0]?.value && countWords(listQuestionInPart[0]?.value)}
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ExamContent;
