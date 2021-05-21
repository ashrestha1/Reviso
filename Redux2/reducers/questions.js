import {
  FETCH_QUESTIONS,
  CREATE_QUESTION,
  DELETE_QUESTION,
  UPDATE_QUESTION,
} from '../Constants/questions';

const initialState = {
  questionsArray: [],
};

export default function questions(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      console.log('fetchquestion');
      return { ...state, questionsArray: action.payload };
    case CREATE_QUESTION:
      const newQuestionSet = {
        graded: action.payload.graded,
        deadline: action.payload.deadline,
        timeLimit: action.payload.timeLimit,
        questionSet: action.payload.questionSet,
      };
      return {
        ...state,
        questionsArray: [...state.questionsArray, newQuestionSet],
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        questionsArray: state.questionsArray.map((question) => {
          question.id === action.payload.id
            ? {
                id: question.id,
                title: question.title,
                created: question.created,
                graded: action.payload.changeToUngraded,
                timeLimit: action.payload.newDeadline || question.timeLimit,
              }
            : question;
        }),
      };
    default:
      return state;
  }
}
