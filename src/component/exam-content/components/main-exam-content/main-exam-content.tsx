import { Dispatch, Fragment, RefObject, SetStateAction, useState } from 'react';

import { countWords, markdownToHtml } from '../../exam-content.utils';
import { QUESTION_TYPE } from '@/common/constant';

import { DataContentType } from '../../exam-content.model';
import { AnswerInputRef } from '../answer-input/answer-input.model';

import ListeningChooseAnswer from '../part-item/listening/choose-answer';
import ListeningChooseTwoAnswer from '../part-item/listening/choose-two-answer';
import AnswerInput from '../answer-input/answer-input';

import './main-exam-content.scss';
import ChooseOneAnswerReading from '../part-item/reading/choose-answer';
import ChooseTwoAnswerReading from '../part-item/reading/choose-two-answer';

type Props = {
  isListening?: boolean;
  isReading?: boolean;
  listQuestionTypeInPart: string[];
  leftContent: string[];
  listQuestionInPart: DataContentType[];
  questionActive: number;
  setQuestionActive: Dispatch<SetStateAction<number>>;
  onChangeCheckBoxValue: (questionId: number, answer: string) => void;
  onChangeInputValue: (event: React.ChangeEvent<HTMLInputElement>, questionId: number) => void;
  onChangeTwoValue: (questionSubId: number, answer: string) => void;
  onChangeAnswerWriting: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickQuestionInput: (questionId: number) => void;
};

const MainExamContent = ({
  isListening,
  isReading,
  listQuestionTypeInPart,
  leftContent,
  listQuestionInPart,
  questionActive,
  setQuestionActive,
  onChangeCheckBoxValue,
  onChangeInputValue,
  onChangeTwoValue,
  onChangeAnswerWriting,
  onClickQuestionInput,
}: Props) => {
  const renderContent = (type: string, numberOrder: number) => {
    switch (type) {
      case QUESTION_TYPE.LISTENING_CHOOSE_ANSWER:
        return (
          <ListeningChooseAnswer
            numberOrder={numberOrder}
            listQuestion={listQuestionInPart}
            questionActive={questionActive}
            setQuestionActive={setQuestionActive}
            onChangeValue={onChangeCheckBoxValue}
          />
        );

      case QUESTION_TYPE.CHOOSE_TWO_ANSWER_LISTENING:
        return (
          <ListeningChooseTwoAnswer
            numberOrder={numberOrder}
            listQuestion={listQuestionInPart}
            questionActive={questionActive}
            setQuestionActive={setQuestionActive}
            onChangeTwoValue={onChangeTwoValue}
          />
        );

      case QUESTION_TYPE.ANSWER_PARAGRAPH_LISTENING:
        return (
          <AnswerInput
            numberOrder={numberOrder}
            listQuestion={listQuestionInPart}
            questionActive={questionActive}
            onChangeValue={onChangeInputValue}
            onClickQuestionInput={onClickQuestionInput}
          />
        );

      case QUESTION_TYPE.ANSWER_PARAGRAPH:
        return (
          <AnswerInput
            numberOrder={numberOrder}
            questionActive={questionActive}
            listQuestion={listQuestionInPart}
            onChangeValue={onChangeInputValue}
            onClickQuestionInput={onClickQuestionInput}
          />
        );

      case QUESTION_TYPE.CHOOSE_ANSWER:
        return (
          <ChooseOneAnswerReading
            numberOrder={numberOrder}
            listQuestion={listQuestionInPart}
            questionActive={questionActive}
            setQuestionActive={setQuestionActive}
            onChangeValue={onChangeCheckBoxValue}
          />
        );

      case QUESTION_TYPE.CHOOSE_TWO_ANSWER:
        return (
          <ChooseTwoAnswerReading
            numberOrder={numberOrder}
            listQuestion={listQuestionInPart}
            questionActive={questionActive}
            setQuestionActive={setQuestionActive}
            onChangeTwoValue={onChangeTwoValue}
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <div
      className={`exam-content-container ${
        isListening ? 'listening-container' : 'content-container'
      }`}
      style={isListening ? { overflow: 'auto' } : {}}
    >
      {isListening ? (
        <div className='listening-content'>
          {listQuestionTypeInPart?.length ? (
            listQuestionTypeInPart?.map((item, index) => (
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
              {leftContent?.map((item, index) => (
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
                      {renderContent(item, index + 1)}
                      {index > 0 && <hr />}
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
                  onChange={onChangeAnswerWriting}
                />
                <span>
                  Word count:{' '}
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

export default MainExamContent;
