import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewBoard from './NewBoard';
import MainBoard from './MainBoard';
import { selectBoard } from '../actions/selectBoardActions';

class Main extends Component {
  render() {
    
    return (
      <div className="row">
        <NewBoard />
        {this.props.boards && this.props.boards.map((board, index) => 
          <MainBoard key={index}  board={board} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    boards: state.boards
  }
}

export default connect(mapStateToProps,{ selectBoard })(Main);