import React, { Component } from 'react'
import { connect } from 'react-redux';

import { toggleNewList } from '../actions/ListActions';
import { selectBoard } from '../actions/selectBoardActions';
import { editBoard } from '../helper';
import { loadBoards } from '../actions/newBoardActions';

class NewList extends Component {
  state = {
    name: '',
    items: [],
  }
  handleInput = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.name != ''){
      const list = {
        id: this.props.board.lists.length + 1,
        ...this.state
      }
      const board = JSON.parse(JSON.stringify(this.props.board));
      board.lists.push(list);
      editBoard(board);
      this.setState({ name: '' });
      this.props.loadBoards();
      this.props.selectBoard(this.props.board.id);
    }
  }
  
  render() {
    const newList = (
      <div className='card board-content' onClick={this.props.toggleNewList}>
        add a new list..
      </div>
    );
    const form = ( 
      <form onSubmit={this.handleSubmit}> 
        <input value={this.state.name} onChange={this.handleInput} type="text"/>
      </form>
    )
    return (
      <div className='col s3'>
        <div className="board">
        { !this.props.activeList ? newList : form }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.selectedBoard,
    activeList: state.newListActive
  }
}

export default connect(mapStateToProps, { toggleNewList, selectBoard, loadBoards })(NewList)