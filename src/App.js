import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import ReactResizeDetector from 'react-resize-detector'
import ReactGA from 'react-ga';
import { CreateBrowserHistory } from 'history'

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


const trackingId = "UA-86403741-1"; // Google Analytics tracking ID
ReactGA.initialize(trackingId);
// ReactGA.pageview(window.location.pathname + window.location.search);
// ReactGA.set({
  // userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
// })
const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  state = {
    screenHeight: 0, 
    screenWidth: 0,
  }
  
  render () {
    const { screenHeight, screenWidth } = this.state

    return (
      <BrowserRouter history={history}>
        {/* tracks screen size and passes it to context */}
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
