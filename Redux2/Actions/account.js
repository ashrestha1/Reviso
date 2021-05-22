import { FETCH_ACCOUNT, CREATE_ACCOUNT } from '../Constants/account';
import axios from 'axios';
//Actions Creators
export const getAccount = (token) => async (dispatch) => {
  try {
    axios.get(`http://18.166.28.128/profile?token=${token}`).then((res) => {
      const { data } = res;
      dispatch({ type: FETCH_ACCOUNT, payload: data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const createAccount = (orderData) => async (dispatch) => {
  try {
    axiosInstance.post(`property/order/create/`, orderData).then((res) => {
      dispatch({ type: CREATE_ACCOUNT, payload: res.data });
      return true;
    });
  } catch (error) {
    console.log('errorrrr');
    return false;
  }
};
