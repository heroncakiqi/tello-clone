import React, { Component } from 'react'
import { connect } from 'react-redux';

import { addListTask } from '../actions/ListActions';

class AddListItem extends Component {

  state = {
    text: '',
    done: false
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = e => {
    // change
    e.preventDefault();
    if(this.state.text != ''){
      console.log(this.props);
      this.props.addListTask(this.props, this.state);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input placeholder='add task' type="text" value={this.state.text} onChange={this.handleChange}/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.selectedBoard
  }
}

export default connect(mapStateToProps,{ addListTask })(AddListItem);
