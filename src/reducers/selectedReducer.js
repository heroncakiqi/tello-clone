const initialState = null;

export default function(state = initialState, action) {
  switch(action.type){
    case 'select_board':
      return action.payload
    default:
      return state;
  }
}