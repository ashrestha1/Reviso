import { FETCH_STUDENTS, DELETE_STUDENTS } from '../Constants/students';

const initialState = {
  studentsArray: [],
};

export default function students(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      return { ...state, studentsArray: action.payload };
    default:
      return state;
  }
}
