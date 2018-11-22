import shortid from 'shortid';

export const toggleNewBoard = () => {
 return { 
   type: 'toggle_new_board'
  }
};

export const createNewBoard = ({ boardName = '', lists = [] }) => {
  return {
    type: 'create_new_board',
    payload: {
      id: shortid.generate(),
      boardName,
      lists
    }
  }
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