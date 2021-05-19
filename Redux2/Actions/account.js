import { FETCH_ACCOUNT, CREATE_ACCOUNT } from '../Constants/account';
import axios from 'axios';
//Actions Creators
export const getAccount = (token) => async (dispatch) => {
  try {
    axios.get(`http://18.167.126.245/profile?token=${token}`).then((res) => {
      const { data } = res;
      console.log(data);
      dispatch({ type: FETCH_ACCOUNT, payload: data });
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAccount = (orderData) => async (dispatch) => {
  try {
    console.log('creating....', orderData);
    axiosInstance.post(`property/order/create/`, orderData).then((res) => {
      console.log('here is the response', res);
      dispatch({ type: CREATE_ACCOUNT, payload: res.data });
      return true;
    });
  } catch (error) {
    return false;
  }
};
