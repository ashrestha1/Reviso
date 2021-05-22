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
    console.log('fetching');
    axios.get(`http://18.166.28.128/set/manage?token=${token}`).then((res) => {
      const { data } = res;
      console.log('fetching...', data);
      dispatch({ type: FETCH_QUESTIONS, payload: data });
    });
  } catch (error) {
    console.log('teac', error);
  }
};

export const createQuestions = (questionData) => async (dispatch) => {
  try {
    console.log('creating..');
    axios
      .post(`http://18.166.28.128/set/create`, questionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('creating..respnse =>', res);
        dispatch(getQuestionsTeacher(questionData.token));
        dispatch({ type: CREATE_QUESTION, payload: questionData });
        return true;
      });
  } catch (error) {
    console.log('223teac', error);
    return false;
  }
};

export const updateQuestion = (newData) => async (dispatch) => {
  try {
    console.log('creating....', newData);
    axios
      .post(`http://18.166.28.128/set/create`, newData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        console.log('here is the response', res);
        dispatch({ type: UPDATE_QUESTION, payload: newData });
        return true;
      });
  } catch (error) {
    console.log('223teac', error);
    return false;
  }
};
