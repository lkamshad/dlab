import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  SERVER_URL,
  fetchJSON,
} from './fetchAPI';


class App extends Component {

  // this constructor runs when the page loads
  constructor(props) {
    super(props);

    // request the '/' route
    // see the server's handler for this route in server/index.js
    fetch(SERVER_URL + '/');

    // TODO: Perhaps put more requests here
    //       Use fetchJSON instead of fetch if the server's response uses res.json({someKey: 'some value'})
    //       See an example of using fetchJSON in the file it's defined in: src/fetchAPI.js

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
