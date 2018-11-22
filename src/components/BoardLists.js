import React, { Component } from 'react'
import { connect } from 'react-redux';

import List from './List';
import NewList from './NewList';

import { loadLists } from '../actions/ListActions';

class BoardLists extends Component {

  render() {
    const lists = this.props.board ? this.props.board.lists : false;
    return (
      <div className="row flex">
        {lists && lists.map((list,index) => <List key={index} index={index} list={list}/>)}
        <NewList /> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    board: state.selectedBoard
  }
}

export default connect(mapStateToProps)(BoardLists);
