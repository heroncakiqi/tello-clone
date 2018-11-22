const initialState = [];

export default function(state = initialState, action) {
  switch(action.type){
    case 'create_new_board':
      return [
        ...state,
        action.payload
      ];
    case 'add_boards':
      return action.payload
    case 'add_list_to_board':
      const board = { 
        ...action.payload.board, 
        lists: [...action.payload.board.lists, action.payload.list ] 
      }
      console.log(board);
      return [
        ...state,
        board
      ]
    default:
      return state;
  }
}