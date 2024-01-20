import { DataContentType } from '../exam-content.model';

const useHandleChangeListQuestion = () => {
  const getQuestionRangeLength = (newListQuestion: DataContentType[], questionSubId: number) => {
    const lastQuestionId =
      Math.max(...newListQuestion.filter((q) => q.subId === questionSubId).map((q) => q.id)) ||
      questionSubId;

    const questionRangeLength = lastQuestionId - questionSubId + 1;
    return questionRangeLength;
  };

  const getNewListWithChangeValue = (
    listQuestion: DataContentType[],
    questionSubId: number,
    answer: string
  ) => {
    const newListQuestion = [...listQuestion];
    const question = newListQuestion[questionSubId - 1];

    const questionRangeLength = getQuestionRangeLength(newListQuestion, questionSubId);

    if (!question?.value) {
      question.value = [];
    }

    if (answer) {
      if (question.value?.includes(answer)) {
        const indexAnswer = question.value.indexOf(answer);
        if (indexAnswer > -1) {
          question.value.splice(indexAnswer, 1);
        }
        if (!question.value.length) {
          question.value = '';
          for (let i = 0; i < questionRangeLength; i++) {
            newListQuestion[questionSubId + i - 1].isAnswer = false;
          }
        }
      } else {
        for (let i = 0; i < questionRangeLength; i++) {
          newListQuestion[questionSubId + i - 1].isAnswer = true;
        }
        if (question.value.length === questionRangeLength) {
          question.value.shift();
        }
        question.value.push(answer);
      }
    }

    for (let i = 0; i < questionRangeLength - 1; i++) {
      newListQuestion[questionSubId + i].value = question.value;
    }

    return newListQuestion;
  };

  const getNewListWithChangeReview = (
    listQuestion: DataContentType[],
    questionActive: number,
    isChecked: boolean
  ) => {
    const newListQuestion = [...listQuestion];
    const question = newListQuestion[questionActive - 1];
    const listQuestionReview = newListQuestion.filter((item: any) => item.subId === questionActive);

    if (listQuestionReview.length > 1) {
      const questionRangeLength = getQuestionRangeLength(newListQuestion, questionActive);
      for (let i = 0; i < questionRangeLength - 1; i++) {
        newListQuestion[questionActive + i].isReview = isChecked;
      }
    }

    question.isReview = isChecked;
    return newListQuestion;
  };

  const getQuestionActive = (
    listQuestion: DataContentType[],
    questionActive: number,
    isNext = true
  ) => {
    if (isNext) {
      const questionRangeLength = getQuestionRangeLength(listQuestion, questionActive);
      if (questionRangeLength > 1) {
        return questionActive + questionRangeLength;
      } else {
        return questionActive + 1;
      }
    } else {
      const prevQuestionSubId = listQuestion.find((item) => item.id === questionActive - 1)?.subId;
      const questionRangeLength = getQuestionRangeLength(listQuestion, prevQuestionSubId || 1);

      if (questionRangeLength > 1) {
        return questionActive - questionRangeLength;
      } else {
        return questionActive - 1;
      }
    }
  };

  return { getNewListWithChangeValue, getNewListWithChangeReview, getQuestionActive };
};

export default useHandleChangeListQuestion;
