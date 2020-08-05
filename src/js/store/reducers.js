import { combineReducers } from 'redux';

import userReducer from './User/userReducer';
import alertReducer from './Alert/alertReducer';
import gameReducer from './Game/gameReducer';
import categoriesReducer from './Categories/categoriesReducer';
import questionsReducer from './Questions/questionsReducer';

const rootReducer = combineReducers({
  alertReducer,
  userReducer,
  categoriesReducer,
  questionsReducer,
  gameReducer,
});

export default rootReducer;