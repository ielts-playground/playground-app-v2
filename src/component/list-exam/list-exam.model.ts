export type ListExamType = {
  title: string;
  isCompleted?: boolean;
  isPrevPartDone?: boolean;
};

export type AnswerRequest = { [key: string]: string };

export type ExamRequest = { answers: AnswerRequest; examTestId?: number };
