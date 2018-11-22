import React, { Component } from 'react'
import { connect } from 'react-redux';

import { editBoard } from '../helper';
import { loadBoards } from '../actions/newBoardActions';
import { selectBoard } from '../actions/selectBoardActions';

class ListItem extends Component {

  handleClick = (e) => {
   const { itemIndex,  listId } = this.props
   const board = JSON.parse(JSON.stringify(this.props.board));
   const isDone = !!board.lists[listId - 1]['items'][itemIndex]['done'];
   board.lists[listId - 1]['items'][itemIndex]['done'] = isDone ? false : true;
   editBoard(board);
   this.props.loadBoards();
   this.props.selectBoard(this.props.board.id);
  }

  getStatus = () => {
    const { itemIndex,  listId } = this.props
    const board = this.props.board;
    return board.lists[listId - 1]['items'][itemIndex]['done'];
  }
  
  render() {
    const mark = this.getStatus() ? '✕' : '✓'
    return (
      <li className='list-items' onClick={this.handleClick}>
        <span className={this.getStatus() && `done`}>{this.props.item.text}</span> <span>{mark}</span>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.selectedBoard
  }
}

export default connect(mapStateToProps,{loadBoards, selectBoard})(ListItem);