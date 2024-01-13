export const CODE_SUCCESS = 'succeeded';

export const QUESTION_TYPE = {
  CHOOSE_ANSWER: 'choose-answer',
  LISTENING_CHOOSE_ANSWER: 'choose-answer-listening',
  CHOOSE_TWO_ANSWER_LISTENING: 'choose-two-answer-listening',
  ANSWER_PARAGRAPH_LISTENING: 'answer-paragraph-listening',
  CHOOSE_CHARACTER_ANSWER: 'choose-character-answer',
  CHOOSE_TWO_ANSWER: 'choose-two-answer',
  ANSWER_PARAGRAPH: 'answer-paragraph',
  ANSWER_CHARACTER: 'answer-character',
  ANSWER_CHARACTER_LISTENING: 'answer-character-listening',
  ANSWER_QUESTION_LISTENING: 'answer-question-listening',
  ANSWER_SENTENCE_LISTENING: 'answer-sentence-listening',
  ANSWER_ONLY_INPUT: 'answer-only-input',
};

export const LIST_ROUTER = {
  LOGIN: 'login',
  LISTENING: 'listening',
  READING: 'reading',
  WRITING: 'writing',
  LIST_EXAM: 'list-exam',
  THANKS: 'thanks',
};

export const LIST_ROUTER_NOT_SUPPORT_MOBILE = ['/listening', '/reading', '/writing', '/list-exam'];
