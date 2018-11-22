import React, { Component } from 'react'
import { connect } from 'react-redux';

import AddListItem from './AddListItem';
import ListItem from './ListItem';

class List extends Component {
  render() {
    const hasItems = this.props.list.items.length > 0 && this.props.list.items;
    return (
      <div className="col s3">
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.selectedBoard
  }
}

export default connect( mapStateToProps )(List);