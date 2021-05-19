import { FETCH_ACCOUNT, CREATE_ACCOUNT } from '../Constants/account';
import axios from 'axios';
//Actions Creators
export const getAccount = (id) => async (dispatch) => {
  try {
    axios.get(`property/${id}`).then((res) => {
      const { data } = res;
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
