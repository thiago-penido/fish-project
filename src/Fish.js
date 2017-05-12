
import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import ShowFish from './ShowFish';
class Fish extends Component {
  constructor(props){
    super(props);
    this.state = {
      fishName: '',
      fishColor: '',
      fishList: []

    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  onClick(event){
    var fishList=this.state.fishList;
    fishList.push({fishName: this.state.fishName, fishColor: this.state.fishColor});
    this.setState({fishList: fishList});
  }

  render() {
  	console.log(this.state);

    return (
      <div>
        <h1>{'FISH'}</h1>
        <input name='fishName'
          type='text'
          value={this.state.fishName}
          onChange={this.onChange}
        />
        <input name='fishColor'
          type='text'
          value={this.state.fishColor}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>Add</button>
        <div>{this.state.fishList.map((fish, i)=>{
          return (<p key={i}><ShowFish fishName={fish.fishName} fishColor={fish.fishColor}/></p>)
        })}</div>
      </div>
    );
  }
}

export default Fish;
