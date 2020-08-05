import userActionTypes from './userTypes';
import { userService } from '../../services/userService';
import * as alertActions from '../Alert/alertActions';

export const loginRequest = () => ({
  type: userActionTypes.LOGIN_REQUEST,
});

export const loginSuccess = user => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user
});

export const loginFailure = error => ({
  type: userActionTypes.LOGIN_FAILURE,
  payload: error
});

export const logout = () => {
  userService.logout();

  return { type: userActionTypes.LOGOUT };
};

export const registerRequest = () => ({
  type: userActionTypes.REGISTER_REQUEST,
});

export const registerSuccess = () => ({
  type: userActionTypes.REGISTER_SUCCESS,
});

export const registerFailure = error => ({
  type: userActionTypes.REGISTER_FAILURE,
  payload: error
});

export const registerReset = () => ({
  type: userActionTypes.REGISTER_RESET
});

export const updateUserRequest = () => ({
  type: userActionTypes.UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
  type: userActionTypes.UPDATE_USER_SUCCESS,
  payload: user
});

export const updateUserFailure = error => ({
  type: userActionTypes.UPDATE_USER_FAILURE,
  payload: error
});

export const decreaseCoins = coins => ({
  type: userActionTypes.DECREASE_COINS,
  payload: coins
});

export const increaseCoins = coins => ({
  type: userActionTypes.INCREASE_COINS,
  payload: coins
});

export const increasePoints = points => ({
  type: userActionTypes.INCREASE_POINTS,
  payload: points
});

export function updateUser(user) {
  return dispatch => {
    dispatch(updateUserRequest());

    userService.editUser(user)
      .then(
        user => {
          dispatch(alertActions.success('User updated successful'));
          dispatch(updateUserSuccess(user));

        },
        error => {
          dispatch(updateUserFailure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };
}

export function register(user) {
  return dispatch => {
    dispatch(registerRequest());

    userService.register(user)
      .then(
        res => {
          dispatch(alertActions.success('Registration successful'));
          dispatch(registerSuccess());
        },
        error => {
          dispatch(registerFailure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };
}


export function login(username, password) {
  return dispatch => {
    dispatch(loginRequest());

    userService.login(username, password)
      .then(
        res => {
          dispatch(loginSuccess(res));
        },
        error => {
          dispatch(loginFailure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };
}