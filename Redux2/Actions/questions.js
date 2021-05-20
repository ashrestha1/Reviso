import {
  FETCH_QUESTIONS,
  CREATE_QUESTION,
  DELETE_QUESTION,
  UPDATE_QUESTION,
} from '../Constants/questions';

import axios from 'axios';
//Actions Creators
export const getQuestionsTeacher = (token) => async (dispatch) => {
  try {
    axios.get(`http://18.163.214.230/set/manage?token=${token}`).then((res) => {
      const { data } = res;
      dispatch({ type: FETCH_QUESTIONS, payload: data });
    });
  } catch (error) {
    console.log('teac', error);
  }
};

export const createQuestions = (questionData) => async (dispatch) => {
  try {
    console.log('creating....', questionData);
    axios
      .post(`http://18.163.214.230/set/create`, questionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('here is the response', res);
        dispatch({ type: CREATE_QUESTION, payload: questionData });
        return true;
      });
  } catch (error) {
    console.log('223teac', error);
    return false;
  }
};
