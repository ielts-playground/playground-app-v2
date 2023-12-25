import { Fragment, useEffect, useMemo } from 'react';
import useGetInputRef from './hooks/use-get-input-ref';

import { DataContentType } from '../../exam-content.model';

import { markdownToHtml } from '../../exam-content.utils';
import { QUESTION_TYPE } from '@/common/constant';

import './answer-input.scss';

type Props = {
  listQuestion: DataContentType[];
  numberOrder: number;
  questionActive: number;
  onChangeValue: (event: React.ChangeEvent<HTMLInputElement>, questionId: number) => void;
  onClickQuestionInput: (questionId: number) => void;
};

const AnswerInput = ({
  listQuestion,
  numberOrder,
  questionActive,
  onChangeValue,
  onClickQuestionInput,
}: Props) => {
  const { getInputRef, getAllInputRefs } = useGetInputRef();

  useEffect(() => {
    const allInputRefs = getAllInputRefs();
    const inputActive = allInputRefs?.[`${questionActive}`];
    inputActive?.current?.focus();
  }, [questionActive]);

  const listQuestionTransform = useMemo(
    () =>
      listQuestion.filter(
        (item: any) =>
          item.type === QUESTION_TYPE.ANSWER_PARAGRAPH_LISTENING && item.numberOrder === numberOrder
      ),
    [listQuestion, numberOrder]
  );

  return (
    <>
      {listQuestionTransform.map((question, index) => {
        const inputRef = getInputRef(question.id);
        return (
          <Fragment key={question.id}>
            <span
              dangerouslySetInnerHTML={{
                __html: markdownToHtml(question.text || ''),
              }}
            ></span>
            <input
              ref={inputRef}
              style={{ margin: '4px 8px' }}
              autoComplete='off'
              autoCapitalize='off'
              spellCheck='false'
              id={`question${question.id}`}
              className='input-answer'
              type='text'
              placeholder={String(question.id)}
              value={question.value}
              onClick={() => onClickQuestionInput(question.id)}
              onChange={(event) => onChangeValue(event, question.id)}
            />
            {question.isDownLine ? <br /> : <></>}
            {index === listQuestionTransform.length - 1 && (
              <span>{listQuestionTransform[0].lastText}</span>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

export default AnswerInput;
