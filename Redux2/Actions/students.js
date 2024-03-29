import { FETCH_STUDENTS, DELETE_STUDENTS } from '../Constants/students';

import axios from 'axios';
//Actions Creators
export const getStudents = (token) => async (dispatch) => {
  try {
    axios.get(`http://16.162.3.244/users?token=${token}`).then((res) => {
      const { data } = res;
      dispatch({ type: FETCH_STUDENTS, payload: data });
    });
  } catch (error) {
    console.log(error);
  }
};
