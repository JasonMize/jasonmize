import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import WritingScreen from './screens/WritingScreen';
import CollageScreen from './screens/CollageScreen';
import { black } from './constants/colors';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App" style={styles.appWrap}>
          <Header />
          <Route path="/" exact component={HomeScreen} />
          <Route path="/collages" component = {CollageScreen} />
          <Route path="/writings" component = {WritingScreen} />
        </div>
      </BrowserRouter>
    );
  }
}

let styles = {
  appWrap: {
    color: black,
    fontFamily: 'Noto Serif, serif',
    // backgroundColor: 'pink',
    height: 'inherit',
    margin: 0,
    padding: 0,
    position: 'relative',
  }
}

export default hot(module)(App);
