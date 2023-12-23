type NumericalOrder = {
  first: number;
  last: number;
};

type ListQuestionType = {
  id: number;
  isDownLine?: boolean;
  lastText?: string;
  numberOrder: number;
  options?: string | null;
  part: number;
  questionTitle?: string | null;
  subId: number;
  text: string;
  type: string;
  value?: string;
  isAnswer?: boolean;
};
