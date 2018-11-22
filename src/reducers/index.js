import { combineReducers } from 'redux';

import newBoardReducer from './newBoardReducer';
import boardReducer from './BoardsReducer';
import selectedReducer from './selectedReducer';
import newListReducer from './newListReducer';


export default combineReducers({
  newBoardActive: newBoardReducer,
  boards: boardReducer,
  selectedBoard: selectedReducer,
  newListActive: newListReducer,
});