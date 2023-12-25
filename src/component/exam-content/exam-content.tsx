import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { DataContentType, NumericalOrder, TypeQuestionType } from './exam-content.model';
import { AnswerInputRef } from './components/answer-input/answer-input.model';

import PartDescription from './components/part-description/part-description';
import MainExamContent from './components/main-exam-content/main-exam-content';
import NavigatorQuestion from './components/navigator-question/navigator-question';

type Props = {
  isListening?: boolean;
  isReading?: boolean;
  isWriting?: boolean;
  listQuestion: DataContentType[];
  listTypeQuestion?: TypeQuestionType;
  contentLeft?: string[][];
  setListQuestion: Dispatch<SetStateAction<DataContentType[]>>;
};

const ExamContentContainer = ({
  isListening,
  isReading,
  isWriting,
  listQuestion,
  listTypeQuestion,
  contentLeft,
  setListQuestion,
}: Props) => {
  const [questionActive, setQuestionActive] = useState<number>(1);
  const [partActive, setPartActive] = useState<number>(1);
  const [numericalOrderInPart, setNumericalOrderInPart] = useState<NumericalOrder>({
    first: 0,
    last: 0,
  });

  const [listQuestionInPart, setListQuestionInPart] = useState<DataContentType[]>([]);
  const [listQuestionTypeInPart, setListQuestionTypeInPart] = useState<string[]>([]);
  const [leftContent, setLeftContent] = useState<string[]>([]);

  const [isReview, setIsReview] = useState<boolean>(false);

  const answerInputRef = useRef<AnswerInputRef>(null);

  useEffect(() => {
    let numericalOrder = { first: 0, last: 0 };
    let questionInActive: any;
    questionInActive = listQuestion.find((item: any) => item.subId === questionActive);
    if (!questionInActive) {
      questionInActive = listQuestion.find((item: any) => item.subId === questionActive + 1);
    }

    const listQuestionFilterWithPart = listQuestion.filter(
      (item: any) => item.part === partActive || item.part === questionInActive?.part
    );

    numericalOrder = {
      first: listQuestionFilterWithPart[0]?.id,
      last: listQuestionFilterWithPart[listQuestionFilterWithPart.length - 1]?.id,
    };

    setListQuestionInPart(listQuestionFilterWithPart);
    setNumericalOrderInPart(numericalOrder);
    setPartActive(questionInActive?.part);
  }, [listQuestion, partActive, questionActive]);

  useEffect(() => {
    if (listTypeQuestion) {
      setListQuestionTypeInPart(listTypeQuestion[`part${partActive}`]);
    }
    if (contentLeft) {
      setLeftContent(contentLeft[partActive - 1]);
    }
  }, [contentLeft, listTypeQuestion, partActive]);

  const handleChangeCheckBoxValue = (questionId: number, answer: string): void => {
    setQuestionActive(questionId);
    setListQuestion((prev) => {
      const newData = [...prev];
      const question = newData[questionId - 1];
      if (answer) {
        if (question.value === answer) {
          question.value = '';
          question.isAnswer = false;
        } else {
          question.value = answer;
          question.isAnswer = true;
        }
      }
      return newData;
    });
  };

  const handleChangeInputValue = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: number
  ) => {
    setListQuestion((prev) => {
      const newData = [...prev];
      const question = newData[questionId - 1];
      if (event.target.value) {
        question.isAnswer = true;
      } else {
        question.isAnswer = false;
      }
      question.value = event.target.value;
      return newData;
    });
  };

  const handleClickQuestionInput = (questionId: number) => {
    setQuestionActive(questionId);
  };

  const handleChangeTwoValue = (questionSubId: number, answer: string) => {
    setQuestionActive(questionSubId);

    setListQuestion((prev) => {
      const newData = [...prev];
      const question = newData[questionSubId - 1];
      const questionDuplicate = newData[questionSubId];
      if (!question?.value) {
        question.value = [];
      }

      if (answer) {
        if (question.value?.includes(answer)) {
          const indexAnswer = question.value.indexOf(answer);
          if (indexAnswer === 1) {
            question.value.pop();
          } else {
            question.value.shift();
          }
          if (!question.value.length) {
            question.value = '';
            question.isAnswer = false;
            questionDuplicate.isAnswer = false;
          }
        } else {
          question.isAnswer = true;
          questionDuplicate.isAnswer = true;
          if (question.value.length === 2) {
            question.value.shift();
          }
          question.value.push(answer);
        }
      }
      questionDuplicate.value = question.value;

      return newData;
    });
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

  const handleSetQuestionActive = (
    questionId: number,
    questionSubId: number,
    partActiveBar: number
  ) => {
    // const allInputRefs = answerInputRef.current?.getAllInputRefs();
    // const inputActive = allInputRefs?.[`${questionId}`];
    // inputActive?.current?.focus();

    const question = listQuestion[questionSubId - 1];
    setIsReview(question.isReview);
    setQuestionActive(questionSubId);
    setPartActive(partActiveBar);
  };

  const handleChangeReviewQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    setIsReview(isChecked);
    setListQuestion((prev) => {
      const newData = [...prev];
      const question = newData[questionActive - 1];
      const listQuestionReview = newData.filter((item: any) => item.subId === questionActive);

      if (listQuestionReview.length === 2) {
        const questionDuplicate = newData[questionActive];
        questionDuplicate.isReview = isChecked;
      }

      question.isReview = isChecked;
      return newData;
    });
  };

  const handleSelectPrevOrNextQuestion = (questionSubId: number) => {
    if (!questionSubId || questionSubId > listQuestion[listQuestion.length - 1]?.id) {
      return;
    }
    const question = listQuestion[questionSubId - 1];
    setIsReview(question.isReview);
    setQuestionActive(questionSubId);
  };

  return (
    <>
      <PartDescription
        isListening
        partActive={partActive}
        numericalOrderInPart={numericalOrderInPart}
      />

      <MainExamContent
        isListening={isListening}
        isReading={isReading}
        listQuestionTypeInPart={listQuestionTypeInPart}
        leftContent={leftContent}
        listQuestionInPart={listQuestionInPart}
        answerInputRef={answerInputRef}
        questionActive={questionActive}
        setQuestionActive={setQuestionActive}
        onChangeCheckBoxValue={handleChangeCheckBoxValue}
        onChangeInputValue={handleChangeInputValue}
        onClickQuestionInput={handleClickQuestionInput}
        onChangeTwoValue={handleChangeTwoValue}
        onChangeAnswerWriting={handleChangeAnswerWriting}
      />

      <NavigatorQuestion
        listQuestion={listQuestion}
        questionActive={questionActive}
        isReview={isReview}
        onSetQuestionActive={handleSetQuestionActive}
        onChangeReviewQuestion={handleChangeReviewQuestion}
        onSelectPrevOrNextQuestion={handleSelectPrevOrNextQuestion}
      />
    </>
  );
};

export default ExamContentContainer;
