import { Converter } from 'showdown';

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

export const convertData = (dataResponse: any, isWriting = false) => {
  let dataContent: any[] = [];
  let contentLeft: any[] = [];
  const dataDisplayQuestionDataResponse = dataResponse.displayQuestionDataResponse;
  for (let index = 1; index <= Object.keys(dataDisplayQuestionDataResponse).length; index++) {
    dataContent.push(dataDisplayQuestionDataResponse[`${index}`].rightContent);
    contentLeft.push(dataDisplayQuestionDataResponse[`${index}`].leftContent);
  }
  dataContent = dataContent.flat(1);
  if (isWriting) {
    dataContent = DATA_WRITING_CONTENT;
  }
  const listTypeQuestion = dataResponse.listTypeQuestion;
  const dataInPart = { dataContent, listTypeQuestion, contentLeft };
  return dataInPart;
};
