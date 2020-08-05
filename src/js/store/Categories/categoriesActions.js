import categoriesActionTypes from './categoriesTypes';
import { categoriesService } from '../../services/categoriesService';
import * as alertActions from '../Alert/alertActions';


export const fetchCategoriesStart = () => ({
  type: categoriesActionTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: categoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories
});

export const fetchCategoriesFailure = error => ({
  type: categoriesActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: error
});

export function fetchCategories() {
  return dispatch => {
    dispatch(fetchCategoriesStart());

    categoriesService.getCategories()
      .then(
        res => {
          dispatch(fetchCategoriesSuccess(res));
        },
        error => {
          dispatch(fetchCategoriesFailure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };
}