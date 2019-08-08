import React, { Component } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import './App.css';
import HomeScreen from './screens/HomeScreen';

class App extends Component {
  render () {
    return (
      <div className="App" style={styles.appWrap}>
        <HomeScreen />
      </div>
    );
  }
}

let styles = {
  appWrap: {
    fontFamily: 'Noto Serif, serif'
  }
}

export default hot(module)(App);
