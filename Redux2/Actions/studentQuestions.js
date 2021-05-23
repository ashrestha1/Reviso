import { FETCH_QUESTIONSSTUDENT } from '../Constants/questionsStudent';

import axios from 'axios';
//Actions Creators
export const getQuestionsStudent = (token) => async (dispatch) => {
  try {
    axios.get(`http://16.162.3.244/set/browse?token=${token}`).then((res) => {
      const { data } = res;
      dispatch({ type: FETCH_QUESTIONSSTUDENT, payload: data });
    });
  } catch (error) {
    console.log(error);
  }
};
