import { editBoard } from '../helper';
import { loadBoards } from './newBoardActions';
import { selectBoard } from './selectBoardActions';


export const toggleNewList = () => {
  return { 
    type: 'toggle_new_list'
   }
 };

 export const createNewList = (props, state) => dispatch => {
  const list = {
    id: props.board.lists.length + 1,
    ...state
  }
  props.board.lists.push(list);
  editBoard(props.board);
  dispatch(loadBoards());
  dispatch(selectBoard(props.board.id));
 }

 export const addListTask = (props, state) => dispatch => {
  props.board.lists[props.index]['items'].push(state);
  editBoard(props.board);
  dispatch(loadBoards());
  dispatch(selectBoard(props.board.id));
 }

 export const toggleDone = (props) => dispatch => {
  const { itemIndex,  listId } = props
  const isDone = !!props.board.lists[listId - 1]['items'][itemIndex]['done'];
  props.board.lists[listId - 1]['items'][itemIndex]['done'] = isDone ? false : true;
  dispatch({
    type: 'toggle_done',
    payload :editBoard(props.board)
  })
  dispatch(loadBoards());
  dispatch(selectBoard(props.board.id));
 }

 export const deleteItem = (props) => dispatch => {
  const { itemIndex,  listId, board } = props
  board.lists[listId - 1]['items'].splice(itemIndex,1);
  editBoard(board);
  dispatch(loadBoards());
  dispatch(selectBoard(props.board.id));
 }