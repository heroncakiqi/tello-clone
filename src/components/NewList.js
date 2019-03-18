import React, { Component } from 'react'
import { connect } from 'react-redux';

import { toggleNewList, createNewList } from '../actions/ListActions';

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
      this.props.createNewList(this.props, this.state);
      this.setState({ name: '' });
    }
  }
  
  render() {
    const newList = (
      <div style={{padding: '20px'}} className='card board-content' onClick={this.props.toggleNewList}>
        add a new list..
      </div>
    );
    const form = ( 
      <div className='card board-content'>
        <form onSubmit={this.handleSubmit}> 
          <input value={this.state.name} onChange={this.handleInput} type="text"/>
        </form>
      </div>
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

export default connect(mapStateToProps, { toggleNewList, createNewList })(NewList)