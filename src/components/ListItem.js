import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DragSource } from 'react-dnd';

import { toggleDone, deleteItem } from '../actions/ListActions';


class ListItem extends Component {

  handleClick = (e) => {
   //
   this.props.toggleDone(this.props);
  }

  getStatus = () => {
    const { itemIndex,  listId } = this.props
    const board = this.props.board;
    return board.lists[listId - 1]['items'][itemIndex]['done'];
  }
  
  render() {
    const mark = this.getStatus() ? '' : '✓'
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <li style={{opacity}} className={`list-items ${this.getStatus() ? 'done' : ''}`} onClick={this.handleClick}>
        <span>{this.props.item.text}</span> <span>{mark}</span>
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.selectedBoard
  }
}

const itemSource = {
  beginDrag(props) {
    return props
  },
  endDrag(props, monitor, component) {
    if(!monitor.didDrop()) {
      // end if not dropped successfully
      return;
    }
    props.deleteItem(props);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

export default compose(
  connect(mapStateToProps,{toggleDone, deleteItem}),
  DragSource('item', itemSource, collect)
)(ListItem);