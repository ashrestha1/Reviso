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
    axios.get(`http://18.166.28.128/set/manage?token=${token}`).then((res) => {
      const { data } = res;
      dispatch({ type: FETCH_QUESTIONS, payload: data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const createQuestions = (questionData) => async (dispatch) => {
  try {
    axios
      .post(`http://18.166.28.128/set/create`, questionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        dispatch(getQuestionsTeacher(questionData.token));
        dispatch({ type: CREATE_QUESTION, payload: questionData });
        return true;
      });
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateQuestion = (newData, token) => async (dispatch) => {
  try {
    axios
      .post(`http://18.166.28.128/set/modify`, newData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        dispatch(getQuestionsTeacher(token));
        dispatch({ type: UPDATE_QUESTION, payload: newData });
        return true;
      });
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteQuestion = (data, token) => async (dispatch) => {
  try {
    axios
      .post(`http://18.166.28.128/set/delete`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        dispatch(getQuestionsTeacher(token));
        dispatch({ type: DELETE_QUESTION, payload: data });
        return true;
      });
  } catch (error) {
    console.log(error);
    return false;
  }
};
