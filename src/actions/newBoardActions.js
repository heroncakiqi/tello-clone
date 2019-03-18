import shortid from 'shortid';
import { addBoard } from '../helper';

export const toggleNewBoard = () => {
 return { 
   type: 'toggle_new_board'
  }
};

export const createNewBoard = (board) => dispatch => {
  addBoard(board);
  dispatch(loadBoards());
}

export const loadBoards = () => (dispatch) => {
  const localStorageBoards = JSON.parse(localStorage.getItem('boards'));
  if(localStorageBoards){
    dispatch ({
      type: 'add_boards',
      payload: localStorageBoards
    })
  }
} 