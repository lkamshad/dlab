import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <AddSchedules />
        <CheckSchedules />
      </div>
    );
  }
}

class AddSchedules extends Component {
  render() {
    return(
      <h4> Hello </h4>
    );
  }
}


class CheckSchedules extends Component {
  render(){
    return(
      <p> Hi </p>
      );
  }
}
export default App;
