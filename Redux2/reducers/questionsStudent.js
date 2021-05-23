import { FETCH_QUESTIONSSTUDENT } from '../Constants/questionsStudent';

const initialState = {
  questionsStudentArray: [],
};

export default function questionsStudent(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONSSTUDENT:
      return { ...state, questionsStudentArray: action.payload };
    default:
      return state;
  }
}
