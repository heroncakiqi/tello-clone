import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBoard } from '../actions/selectBoardActions';
import { loadBoards } from '../actions/newBoardActions'; 

import BoardLists from './BoardLists';

class BoardContent extends Component {
  componentWillMount() {
    this.props.loadBoards();
  }
  componentDidMount() {
      this.props.selectBoard(this.props.match.params.id);
  }
  componentWillUnmount() {
    this.props.selectBoard(null)
  }
  render() {
    return (
      <div>
        {this.props.board && 
          <div className='card board-title'>
           <h2>{this.props.board.boardName}</h2>
          </div>
        }
        <BoardLists />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boards,
    board: state.selectedBoard
  }
}

export default connect(mapStateToProps, { selectBoard, loadBoards })(BoardContent);