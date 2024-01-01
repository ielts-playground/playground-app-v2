import { Converter } from 'showdown';
import { DataContentType, TestExamResponse } from './exam-content.model';
import { DATA_WRITING_CONTENT } from './exam-content.constants';

const converter = new Converter();
converter.setOption('simpleLineBreaks', false);

export function markdownToHtml(markdown: string = '') {
  const hasNewLineBefore = markdown.startsWith('\n');
  const hasNewLineAfter = markdown.endsWith('\n');
  let html = converter
    .makeHtml(markdown.trim())
    .replaceAll(/<\/p>\s*<p>/g, '</span><br><span>')
    .replace(/^\s*<p>/, '<span>')
    .replace(/<\/p>\s*$/, '</span>');
  if (hasNewLineBefore) {
    html = '<br>' + html;
  }
  if (hasNewLineAfter) {
    html = html + '<br>';
  }
  return html;
}

export const countWords = (str: string) => {
  const arr = str.split(' ');
  return arr.filter((word) => word !== '').length;
};

export const transformDataExam = (dataResponse: TestExamResponse, isWriting = false) => {
  let dataContent: DataContentType[] = [];
  let contentLeft: string[][] = [];
  const dataDisplayQuestionDataResponse = dataResponse.displayQuestionDataResponse;

  const dataContentTransform: DataContentType[][] = [];

  for (let index = 1; index <= Object.keys(dataDisplayQuestionDataResponse).length; index++) {
    const dataContentItem = dataDisplayQuestionDataResponse[`${index}`].rightContent.map(
      (item) => ({
        id: item.id || 1,
        subId: item.subId || 1,
        part: item.part || 1,
        type: item.type || '',
        numberOrder: item.numberOrder,
        questionTitle: item.questionTitle || '',
        text: item.text,
        lastText: item.lastText || '',
        isDownLine: item.isDownLine || false,
        options: item.options || null,
        value: '',
        isAnswer: false,
        isReview: false,
      })
    );
    dataContentTransform.push(dataContentItem);

    const contentLeftTransform = dataDisplayQuestionDataResponse[`${index}`].leftContent.map(
      (item) => item.text || ''
    );

    contentLeft.push(contentLeftTransform);
  }

  dataContent = dataContentTransform.flat(1);
  if (isWriting) {
    dataContent = DATA_WRITING_CONTENT;
  }

  const listTypeQuestion = dataResponse.listTypeQuestion;
  const dataInPart = { dataContent, listTypeQuestion, contentLeft };
  return dataInPart;
};
