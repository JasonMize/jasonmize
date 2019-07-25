import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import './App.css';
import HomeScreen from './screens/HomeScreen';

class App extends Component {
  render () {
    return (
      <div className="App">
        <HomeScreen />
      </div>
    );
  }
}

export default hot(module)(App);
