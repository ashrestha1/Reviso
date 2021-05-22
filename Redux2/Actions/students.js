import { FETCH_STUDENTS, DELETE_STUDENTS } from '../Constants/students';

import axios from 'axios';
//Actions Creators
export const getStudents = (token) => async (dispatch) => {
  try {
    console.log('fetching', token);
    axios.get(`http://18.166.28.128/users?token=${token}`).then((res) => {
      const { data } = res;
      dispatch({ type: FETCH_STUDENTS, payload: data });
    });
  } catch (error) {
    console.log('teac', error);
  }
};
