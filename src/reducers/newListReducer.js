const initialState = false;

export default function(state = initialState, action) {
  switch(action.type){
    case 'toggle_new_list':
      return !state;
    default:
      return state;
  }
}