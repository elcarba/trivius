import questionsActionTypes from './questionsTypes';
import { questionsService } from '../../services/questionsService';
import * as alertActions from '../Alert/alertActions';

export const fetchQuestionsStart = () => ({
  type: questionsActionTypes.FETCH_QUESTIONS_START,
});

export const fetchQuestionsSuccess = (questions) => ({
  type: questionsActionTypes.FETCH_QUESTIONS_SUCCESS,
  payload: questions
});

export const fetchQuestionsFailure = error => ({
  type: questionsActionTypes.FETCH_QUESTIONS_FAILURE,
  payload: error
});

export function fetchQuestions() {
  return dispatch => {
    dispatch(fetchQuestionsStart());

    questionsService.getQuestions()
      .then(
        res => {
          dispatch(fetchQuestionsSuccess(res));
        },
        error => {
          dispatch(fetchQuestionsFailure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };
}

