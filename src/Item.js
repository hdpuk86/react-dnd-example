import React, { Component } from 'react';

class Preview extends Component {
  render() {
    return (
      <div className="item">
        {this.props.item.name}
      </div>
    );
  }
}

export default Preview;
