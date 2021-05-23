import { combineReducers } from 'redux';
import account from './account';
import questions from './questions';
import students from './students';
import questionsStudent from './questionsStudent';
export default combineReducers({
  account,
  questions,
  students,
  questionsStudent,
});
