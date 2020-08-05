import categoriesActionTypes from './categoriesTypes';

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = initialState, action) => {

  switch(action.type){
    case categoriesActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case categoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
        error: null
      };

    case categoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }

};

export default categoriesReducer;