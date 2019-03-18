import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DropTarget } from 'react-dnd';

import AddListItem from './AddListItem';
import ListItem from './ListItem';
import { addListTask } from '../actions/ListActions';

class List extends Component {
  render() {
    const hasItems = this.props.list.items.length > 0 && this.props.list.items;
    const { connectDropTarget, hovered, item } = this.props;
    return(
      <div className="col s3">
     {connectDropTarget(
       <div className="card board-content">
          <div className="board-name">
            <p>{this.props.list.name}</p>
          </div>
          <AddListItem index={this.props.index}/>
          <ul>
            {
              hasItems && hasItems.map((item, index) => 
                <ListItem
                key={index}
                itemIndex={index} listId={this.props.list.id} 
                item={item}
                /> 
              )
            }
          </ul>
        </div>)
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.selectedBoard
  }
}

const target = {
  canDrop(props, monitor) {
    const item = monitor.getItem();
    return item.listId - 1 != props.index
  },

  drop(props, monitor, component) {

    // Obtain the dragged item
    const item = monitor.getItem().item;

    props.addListTask(props, item);
  }
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

export default compose(
  connect(mapStateToProps,{addListTask}),
  DropTarget('item', target, collect))
(List);