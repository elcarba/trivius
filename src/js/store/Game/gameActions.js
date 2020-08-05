import gameActionTypes from './gameTypes';
import { gameService } from '../../services/gameService';

export const changeCategory = (categories, categoryId) => ({
  type: gameActionTypes.CHANGE_CATEGORY,
  payload: { categories, categoryId }
});

export const startGame = (questions) => ({
  type: gameActionTypes.START_GAME,
  payload: { questions }
});

export const nextQuestion = (questions) => ({
  type: gameActionTypes.NEXT_QUESTION,
  payload: { questions }
});

export const addResult = (quesResult) => ({
  type: gameActionTypes.ADD_RESULT,
  payload: { quesResult }
});

export const showResults = () => ({
  type: gameActionTypes.SHOW_RESULTS,
});

export const resetGame = () => ({
  type: gameActionTypes.RESET_GAME,
});