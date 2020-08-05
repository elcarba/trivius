import userActionTypes from './userTypes';

//Get User from LocalStorage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  currentUser: user ? user : null,
  loggedIn: user && Object.keys(user).length !== 0,
  isLoading: false,
  error: null,

  //Register
  registering: false,
  registered: false,
  rError: null,

  fetching: false
};

const userReducer = (state = initialState, action) => {

  switch(action.type){
    case userActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case userActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true,
        isLoading: false,
        error: null
      };

    case userActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggedIn: false,
        isLoading: false,
      };

    case userActionTypes.REGISTER_REQUEST:
      return {
        ...state,
        registering: true
      };

    case userActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        registering: false,
        registered: true,
      };

    case userActionTypes.REGISTER_FAILURE:
      return {
        ...state,
        rError: action.payload,
        registering: false,
        registered: false,
      };

    case userActionTypes.REGISTER_RESET:
      return {
        ...state,
        registering: false,
        registered: false,
        rError: null,
      };

    case userActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: {},
        loggedIn: false,
        isLoading: false,
        error: null,
      };

    case userActionTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        fetching: true
      };

    case userActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        fetching: false,
      };

    case userActionTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        rError: action.payload,
        fetching: false,
      };

    case userActionTypes.INCREASE_COINS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          totalCoins: state.currentUser.totalCoins + action.payload
        },
      };

    case userActionTypes.DECREASE_COINS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          totalCoins: state.currentUser.totalCoins - action.payload
        },
      };

    case userActionTypes.INCREASE_POINTS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          totalPoints: state.currentUser.totalPoints + action.payload
        },
      };

    default:
      return state;
  }

};

export default userReducer;