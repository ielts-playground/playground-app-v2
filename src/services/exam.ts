import { ExamRequest } from '@/component/list-exam/list-exam.model';
import api from '../api';
import { BaseResponse } from '@/common/model';
import { TestExamResponse } from '@/component/exam-content/exam-content.model';

export const getDataExam = async (examType: string, id?: number | string) => {
  try {
    const res = await api.get(`api/v1/random/${examType}?id=${id}`);
    const data: BaseResponse<TestExamResponse> = res.data;
    return data.data;
  } catch (error) {
    return undefined;
  }
};

export const submitExam = async (idSubmit: number, payload: ExamRequest) => {
  try {
    const response = await api.put(`api/v1/exam/${idSubmit}/submit`, { ...payload });
    const data: BaseResponse<null> = response.data;
    return data;
  } catch (error) {
    return undefined;
  }
};
