import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ReactResizeDetector from 'react-resize-detector'

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import TFTSUScreen from './screens/TFTSUScreen'
import WritingScreen from './screens/WritingScreen'
import CollageScreen from './screens/CollageScreen'
import AboutScreen from './screens/AboutScreen'
import { black } from './constants/colors'
import {screenWidthContext, screenHeightContext} from './contexts/ScreenSizeContext'

class App extends Component {
  state = {
    screenHeight: 0, 
    screenWidth: 0,
  }

  render () {
    const { screenHeight, screenWidth } = this.state

    return (
      <BrowserRouter>
        <ReactResizeDetector 
          handleWidth 
          handleHeight 
          onResize={(width, height) => 
            this.setState(() => ({ 
              ...this.state, 
              screenWidth: width, 
              screenHeight: height
            }))
          }
        />

        <screenWidthContext.Provider value={screenWidth}>
          <screenHeightContext.Provider value={screenHeight}>
            <div className="App" style={styles.appWrap}>
              <Header />
              <Route path="/" exact component={HomeScreen} />
              <Route path="/about" component={AboutScreen} />
              <Route path="/collages" component={CollageScreen} />
              <Route path="/writings" component={WritingScreen} />
              <Route path="/tftsu" component={TFTSUScreen} />
            </div>
          </screenHeightContext.Provider>
        </screenWidthContext.Provider>
      </BrowserRouter>
    );
  }
}

let styles = {
  appWrap: {
    color: black,
    fontFamily: 'Noto Serif, serif',
    height: 'inherit',
    margin: 0,
    padding: 0,
    position: 'relative',
  }
}

export default hot(module)(App);
