import { combineReducers } from 'redux';
import { QUESTION_ANSWER, NEXT_QUESTION, PREV_QUESTION, SUBMIT, RESTART, IMG, INIT_QUESTION, START} from './actions'

function start(state = false, action = {}) {
  switch (action.type) {
    case START:
      if (action.start === false) {
        state = true;
        return state;
      } else {
        state = false;
        return state;
      }
    default:
      return state;
  }
}
function score(state = 0, action = {}) {
  switch (action.type) {
    case NEXT_QUESTION:
      let countt = 0;
      for (let i = 0; i<action.questions.length; i++) {
        if (action.questions[i].answer === action.questions[i].userAnswer) {
          countt++;
        }
      }
      state = countt;
      return state;
    case SUBMIT:
      let count = 0;
      for (let i = 0; i<action.questions.length; i++) {
        if (action.questions[i].answer === action.questions[i].userAnswer) {
          count++;
        }
        action.questions[i].userAnswer = 0;
      }
      state = count;
      return state;


    case RESTART:
      state = 0;
      return state;
    default:
      return state;
  }
}
function finished(state = false, action = {}) {
  switch (action.type) {
    case SUBMIT:
      state = true;
      return state;
    case RESTART:
      state = false;
      return state;
    default:
      return state;
  }
}

function currentQuestion(state = 0, action = {}) {
  switch (action.type) {
    case NEXT_QUESTION:
      if( state === action.load.length-1 ){
        state = 0;
        return state;
      }
      return state + 1;
    case PREV_QUESTION:
      if( state === 0 ){
        return state;
      }
      return state - 1;
    case RESTART:
      state = 0;
      return state;
    default:
      return state;
  }
}

function questions(state = [], action = {}) {
  switch (action.type) {
    case QUESTION_ANSWER:
      return state.map((question, i) => {
        return {...question, userAnswer: action.load.index === i ? action.load.answer : question.userAnswer}
      })
    case INIT_QUESTION:
    state = action.json;
    return state;
    default:
      return state;
  }
}

function img(state = true, action = {}) {
  switch (action.type) {
    case IMG:
      if (action.img === true) {
        state = true;
        return state;
      } else {
        state = false;
        return state;
      }
    default:
      return state;
  }
}

const GlobalState = (combineReducers({
  start,
  score,
  finished,
  currentQuestion,
  questions,
  img
}));

export default GlobalState;
