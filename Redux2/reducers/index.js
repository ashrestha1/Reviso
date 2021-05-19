import { combineReducers } from 'redux';
import account from './account';
import questions from './questions';
export default combineReducers({
  account,
  questions,
});
