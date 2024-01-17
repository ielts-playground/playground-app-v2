import { useDispatch } from 'react-redux';
import useToast from './use-toast';

import { donePart } from '@/store/exam-slice';
import { submitExam } from '@/services/exam';

import { CODE_SUCCESS, QUESTION_TYPE } from '@/common/constant';
import { DataContentType } from '@/component/exam-content/exam-content.model';
import { AnswerRequest, ExamRequest } from '@/component/list-exam/list-exam.model';

const useSubmitExam = () => {
  const dispatch = useDispatch();
  const { notify } = useToast();

  const handleSubmit = async (
    listQuestion: DataContentType[],
    idSubmit: number,
    currentPart: string,
    nextPart?: string
  ) => {
    const request: AnswerRequest = {};

    listQuestion?.forEach((ele) => {
      const isMultipleAnswerQuestion =
        ele.type === QUESTION_TYPE.CHOOSE_TWO_ANSWER_LISTENING ||
        ele.type === QUESTION_TYPE.CHOOSE_TWO_ANSWER;

      if (isMultipleAnswerQuestion && ele.id === ele.subId) {
        const lastId = Math.max(
          ...listQuestion.filter((q) => q.subId === ele.subId).map((q) => q.id)
        );
        request[`${ele.subId}-${lastId}`] = JSON.stringify(ele.value);
      } else if (!isMultipleAnswerQuestion) {
        request[`${ele.id}`] = ele.value;
      }
    });

    const payload: ExamRequest = {
      answers: request,
      examTestId: 0,
    };

    const res = await submitExam(idSubmit, payload);
    if (res?.code === CODE_SUCCESS) {
      notify('success', 'Submit successfully!');
    } else {
      notify('error', 'Submit error!');
    }
    dispatch(donePart({ currentPart, nextPart }));
  };
  return { handleSubmit };
};

export default useSubmitExam;
