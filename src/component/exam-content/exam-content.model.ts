export type InputRef = {
  focus: () => void;
};

export type NumericalOrder = {
  first: number;
  last: number;
};

export type OptionsType = {
  value: string;
  title: string;
};

export type ListQuestionTypeResponse = {
  id: number | null;
  isDownLine?: boolean | null;
  lastText?: string | null;
  numberOrder: number;
  options?: OptionsType[] | null;
  part: number;
  questionTitle?: string | null;
  subId: number | null;
  text: string | null;
  type: string | null;
  value?: string | null;
  isAnswer?: boolean;
};

export type TypeQuestionType = {
  [key: string]: string[];
};

export type DisplayQuestionDataResponse = {
  [key: string]: {
    leftContent: ListQuestionTypeResponse[];
    rightContent: ListQuestionTypeResponse[];
  };
};

export type TestExamResponse = {
  id: number;
  submitId: number;
  displayQuestionDataResponse: DisplayQuestionDataResponse;
  listTypeQuestion: TypeQuestionType;
  resourceId?: number | null;
};

export type DataContentType = {
  id: number;
  subId: number;
  part: number;
  type: string;
  numberOrder: number;
  questionTitle: string | null;
  text: string | null;
  lastText: string | null;
  isDownLine: boolean | null;
  options: OptionsType[] | null;
  value: any;
  isAnswer: boolean;
  isReview: boolean;
};

export type DataQuestion = {
  dataContent: DataContentType[];
  listTypeQuestion: TypeQuestionType;
  contentLeft: string[][];
};
