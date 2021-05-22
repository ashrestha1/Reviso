import { FETCH_ACCOUNT, CREATE_ACCOUNT } from '../Constants/account';

const initialState = {};

export default function account(state = initialState, action) {
  switch (action.type) {
    case FETCH_ACCOUNT:
      return (state = action.payload);
    case CREATE_ACCOUNT:
      const newAccount = {
        prettyName: action.payload.prettyName,
        username: action.payload.username,
        password: action.payload.password,
        privileged: true,
      };

      return (state = newAccount);
    default:
      return state;
  }
}
