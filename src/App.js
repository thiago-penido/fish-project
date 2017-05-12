import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fish from './Fish';
import ShowFish from './ShowFish';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>{'Welcome to React'}</h2>
          </div>
          <p className="App-intro">
            <button><Link to="/fish">{'Start'}</Link></button>
          </p>
        <Route path="/fish" component={Fish}/>
        <Route path="/showFish" render={(value)=> {
          console.log(value);
          return (<ShowFish/>)
        }}/>
        </div>
      </Router>
    );
  }
}

export default App;
