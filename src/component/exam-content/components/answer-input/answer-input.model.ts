import { RefObject } from 'react';

export type ConditionRef = {
  [key: string]: RefObject<HTMLInputElement>;
};

export type AnswerInputRef = {
  getAllInputRefs: () => ConditionRef;
};
