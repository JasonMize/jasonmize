import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import WritingScreen from './screens/WritingScreen';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App" style={styles.appWrap}>
          <Header />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/writings" component = {WritingScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

let styles = {
  appWrap: {
    bottom: 0,
    fontFamily: 'Noto Serif, serif',
    left: 0,
    margin: 0,
    padding: 0,
    paddingTop: 100, // for the header
    position: 'absolute',
    right: 0,
    top: 0
  }
}

export default hot(module)(App);
