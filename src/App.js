import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ReactResizeDetector from 'react-resize-detector'
import ReactGA from 'react-ga';

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import TFTSUScreen from './screens/TFTSUScreen'
import WritingScreen from './screens/WritingScreen'
import CollageScreen from './screens/CollageScreen'
import CollageImageScreen from './screens/CollageImageScreen'
import AboutScreen from './screens/AboutScreen'
import AboutImageScreen from './screens/AboutImageScreen'
import { black } from './constants/colors'

import {screenWidthContext, screenHeightContext} from './contexts/ScreenSizeContext'
import TFTSUImageScreen from './screens/TFTSUImageScreen'

// GOOGLE ANALYTICS
const trackingId = "UA-86403741-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);

const fontSizer = width => {
  if (width < 350) {
    return `${width * .05}px` 
  } else if (width >= 350 && width < 450) {
    return `${width * .04}px` 
  } else if (width >= 450 && width < 600) {
    return `${width * .03}px` 
  } else if (width >= 600 && width < 768) {
    return `${width * .025}px` 
  } else if (width >= 768 && width < 992) {
    return `${width * .019}px` 
  } else if (width >= 992 && width < 1200) {
    return `${width * .015}px` 
  } else {
    return `${width * .015}px` 
  }
}

function App() {
  let [screenWidth, setScreenWidth] = useState(0);
  let [screenHeight, setScreenHeight] = useState(0);

  return (
    <BrowserRouter>
      {/* tracks screen size and passes it to context */}
      <ReactResizeDetector 
        handleWidth 
        handleHeight 
        onResize={(width, height) => {
          setScreenWidth(screenWidth = width)
          setScreenHeight(screenHeight = height)
        }} 
      />

      <screenWidthContext.Provider value={screenWidth}>
        <screenHeightContext.Provider value={screenHeight}>
    
          <div className="App" style={{ ...styles.appWrap, fontSize: fontSizer(screenWidth) }}>
            <Header />
            <Route path="/" exact component={HomeScreen} />
            <Route path="/about" exact component={AboutScreen} />
            <Route path="/about/:page_slug" component={AboutImageScreen} />
            <Route path="/collages" exact component={CollageScreen} />
            <Route path="/collages/:page_slug" component={CollageImageScreen} />
            <Route path="/writings" component={WritingScreen} />
            <Route path="/tftsu" exact component={TFTSUScreen} />
            <Route path="/tftsu/:page_slug" component={TFTSUImageScreen} />
          </div>
  
        </screenHeightContext.Provider>
      </screenWidthContext.Provider>
    </BrowserRouter>
  )
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
