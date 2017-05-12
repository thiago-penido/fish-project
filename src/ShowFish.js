import React, { Component } from 'react';

class ShowFish extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <p>{`${this.props.fishName}: ${this.props.fishColor}`}</p>
      </div>
    );
  }
}

export default ShowFish;
