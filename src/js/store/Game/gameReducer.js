import gameActionTypes from './gameTypes';

const initialState = {
  // step: 0,
  isPlaying: false,
  remainingQuestions: [],

  currQuestion: {
    id: 0,
    value: '',
    rightAnsId: 0,
    answers: [],
    coins: 0,
    points: 0
  },

  currCategory: {
    id: 0,
    name: "",
    color: "",
    enabled: false,
    img: "",
    price: 0
  },

  results: [],
  showingResults: false
};

const changeCat = (categories, categoryId) => {
  return categories.find(c => c.id === categoryId);
};

const pickQuestion = (questions) => {
  const remainingQuestions = [...questions];

  //Pick Question -> first El.
  const currQuestion = remainingQuestions.shift();

  return [remainingQuestions, currQuestion];
};

const addQuesResult = (qResult, state) => {
  if (!qResult) return state.results;

  const aResults = [...state.results];
  aResults.push(qResult);

  return aResults;
};

const gameReducer = (state = initialState, action) => {

  switch(action.type){
    case gameActionTypes.START_GAME:
    case gameActionTypes.NEXT_QUESTION:
      const [remQuestions, currQuestion] = pickQuestion(action.payload.questions);

      return {
        ...state,
        isPlaying: true,
        currQuestion: currQuestion,
        remainingQuestions: remQuestions,
      };

    case gameActionTypes.ADD_RESULT:
     return {
        ...state,
        results: addQuesResult(action.payload.quesResult, state),
      };

    case gameActionTypes.SHOW_RESULTS:
      return {
        ...state,
        isPlaying: false,
        showingResults: true
      };

    case gameActionTypes.RESET_GAME:
      return {
        ...state,
        ...initialState
      };

    case gameActionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        currCategory: changeCat(action.payload.categories, action.payload.categoryId)
      };

    default:
      return state;
  }

};

export default gameReducer;