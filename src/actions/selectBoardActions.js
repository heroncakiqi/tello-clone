import store from '../store';

export const selectBoard = (boardId) => async dispatch => {
  const boards = store.getState().boards;
  const boardIndex = boards.findIndex(item => item.id === boardId);
  const boardi = boards[boardIndex]; 
    dispatch({
      type: 'select_board',
      payload: boardi || null
      }
    )
}