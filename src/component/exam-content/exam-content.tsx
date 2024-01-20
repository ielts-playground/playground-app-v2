import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useHandleChangeListQuestion from './hooks/use-handle-change-list-question';

import { DataContentType, NumericalOrder, TypeQuestionType } from './exam-content.model';

import PartDescription from './components/part-description/part-description';
import MainExamContent from './components/main-exam-content/main-exam-content';
import NavigatorQuestion from './components/navigator-question/navigator-question';

type Props = {
  isListening?: boolean;
  isReading?: boolean;
  isWriting?: boolean;
  listTypeQuestion?: TypeQuestionType;
  contentLeft?: string[][];
  listQuestion: DataContentType[];
  setListQuestion: Dispatch<SetStateAction<DataContentType[]>>;
};

const ExamContentContainer = ({
  isListening,
  isReading,
  isWriting,
  listTypeQuestion,
  contentLeft,
  listQuestion,
  setListQuestion,
}: Props) => {
  const { getNewListWithChangeValue, getNewListWithChangeReview } = useHandleChangeListQuestion();

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

  useEffect(() => {
    let numericalOrder = { first: 0, last: 0 };
    let questionInActive: DataContentType | undefined;
    questionInActive = listQuestion.find((item) => item.subId === questionActive);
    if (!questionInActive) {
      questionInActive = listQuestion.find((item) => item.subId === questionActive + 1);
    }

    const listQuestionFilterWithPart = listQuestion.filter(
      (item) => item.part === partActive || item.part === questionInActive?.part
    );

    numericalOrder = {
      first: listQuestionFilterWithPart[0]?.id,
      last: listQuestionFilterWithPart[listQuestionFilterWithPart.length - 1]?.id,
    };

    setListQuestionInPart(listQuestionFilterWithPart);
    setNumericalOrderInPart(numericalOrder);
    setPartActive(questionInActive?.part || 1);
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

    const newListQuestion = getNewListWithChangeValue(listQuestion, questionSubId, answer);
    setListQuestion(newListQuestion);
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

  const handleSetQuestionActive = (questionSubId: number, partActiveBar: number) => {
    const question = listQuestion[questionSubId - 1];
    setIsReview(question.isReview);
    setQuestionActive(questionSubId);
    setPartActive(partActiveBar);
  };

  const handleChangeReviewQuestion = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsReview(isChecked);

    const newListQuestion = getNewListWithChangeReview(listQuestion, questionActive, isChecked);
    setListQuestion(newListQuestion);
  };

  const handleSelectPrevOrNextQuestion = (questionId: number) => {
    if (!questionId || questionId > listQuestion[listQuestion.length - 1]?.id) {
      return;
    }
    const question = listQuestion[questionId - 1];
    setIsReview(question.isReview);
    setQuestionActive(questionId);
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
