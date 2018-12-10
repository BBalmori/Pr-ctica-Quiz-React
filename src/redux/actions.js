export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const PREV_QUESTION = 'PREV_QUESTION';
export const SUBMIT = 'SUBMIT';
export const RESTART = 'RESTART';
export const IMG = 'IMG';
export const INIT_QUESTION = 'INIT_QUESTION';
export const START = 'START';

export function questionAnswer(index, answer) {
  return {type: 'QUESTION_ANSWER', load: {index, answer}};
}
export function nextQuestion(index, length, questions) {
  return {type: 'NEXT_QUESTION', load: {index, length}, questions: questions};
}
export function prevQuestion(index, length) {
  return {type: 'PREV_QUESTION', load: {index, length}};
}
export function submit(questions) {
  return {type: 'SUBMIT', questions: questions};
}
export function restart() {
  return {type: 'RESTART'};
}
export function initQuestions(json) {
  return {type: 'INIT_QUESTION',json: json};
}
export function setImg(img) {
  return {type: 'IMG', img};
}
export function setStart(start) {
  return {type: 'START', start};
}
