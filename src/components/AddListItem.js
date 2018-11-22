import React, { Component } from 'react'
import { connect } from 'react-redux';

import { editBoard } from '../helper';

import { loadBoards } from '../actions/newBoardActions';
import { selectBoard } from '../actions/selectBoardActions';

class AddListItem extends Component {

  state = {
    text: '',
    done: false
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.text != ''){
      const board = JSON.parse(JSON.stringify(this.props.board));
      board.lists[this.props.index]['items'].push(this.state);
      this.setState({ text: '' });
      editBoard(board);
      this.props.loadBoards();
      this.props.selectBoard(this.props.board.id);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange}/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.selectedBoard
  }
}

export default connect(mapStateToProps,{ selectBoard, loadBoards })(AddListItem);
