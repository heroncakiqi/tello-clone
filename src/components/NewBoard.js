import React, { Component } from 'react'
import { connect } from 'react-redux';
import shortid from 'shortid';

import { toggleNewBoard,createNewBoard, loadBoards } from '../actions/newBoardActions';
import { addBoard } from '../helper';


class NewBoard extends Component {
  state = {
    id: shortid.generate(),
    boardName: '',
    lists: []
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if(this.state.boardName != ''){
      this.props.createNewBoard(this.state);
      this.setState({boardName: '', id: shortid.generate()});
    }
  }

  handleChange = (e) => {
    this.setState({ boardName: e.target.value });
  }

  render() {
    const newBoard = <h5 onClick={this.props.toggleNewBoard}>New Board</h5>;
    const form = ( 
      <form onSubmit={this.handleSubmit}> 
        <input value={this.state.boardName} onChange={this.handleChange} type="text"/>
        <input className='hide' type="submit"/> 
      </form>
    )
    return (
      <div className="col s4">
        <div className='main-card new-board card'>
          {!this.props.activeBoard ? newBoard : form}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    activeBoard: state.newBoardActive
  }
}

export default connect(mapStateToProps,{ toggleNewBoard, createNewBoard, loadBoards })(NewBoard);