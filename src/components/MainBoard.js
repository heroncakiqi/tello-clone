import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectBoard } from '../actions/selectBoardActions';


class MainBoard extends Component {
  handleClick = () => {
    this.props.history.push(`/board/${this.props.board.id}`)
  }
  render() {
    return (
      <div className="col s4">
        <div onClick={this.handleClick} className='main-card card'>
            <h5>{this.props.board.boardName}</h5>
        </div>
      </div>
    )
  }
}

export default withRouter(MainBoard);

