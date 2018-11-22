
export const addBoard = (board) => {
  const localStorageRef = localStorage.getItem('boards');
  const boards = JSON.parse(localStorageRef);
  console.log(boards)
  if(boards) {
    boards.push(board);
    return localStorage.setItem('boards',JSON.stringify(boards));
  } else {
   return localStorage.setItem('boards', JSON.stringify([board]));
  }
}

export const editBoard = (board) => {
  const localStorageRef = localStorage.getItem('boards');
  const boards = JSON.parse(localStorageRef);
  const boardIndex = boards.findIndex(item => item.id === board.id);
  boards[boardIndex] = board;
  return localStorage.setItem('boards', JSON.stringify(boards));
}