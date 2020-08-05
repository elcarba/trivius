import questionsActionTypes from './questionsTypes';

const initialState = {
  questions: [],
  // remainingQuestions: [],
  isLoading: false,
  error: null,
};

const questionsReducer = (state = initialState, action) => {

  switch(action.type){
    case questionsActionTypes.FETCH_QUESTIONS_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case questionsActionTypes.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        // remainingQuestions: action.payload,
        isLoading: false,
        error: null
      };

    case questionsActionTypes.FETCH_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }

};

export default questionsReducer;