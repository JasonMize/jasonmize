import React from 'react'
import ReactResizeDetector from 'react-resize-detector';

import WritingScreenSmall from '../components/WritingScreenSmall'
import CollageScreenSmall from '../components/CollageScreenSmall'
import AboutScreenSmall from '../components/AboutScreenSmall'
import AppLink from '../components/AppLink'

import { 
  black,
  blue,
  blueLight,
  green, 
  greenLight, 
  yellow 
} from '../constants/colors'

class HomeScreen extends React.Component {
  state = {
    screenHeight: 100, 
    screenWidth: 100,
  }

  render () {
    const { screenHeight, screenWidth } = this.state

    return (
      <div id="HomeScreen" style={styles.homeScreenWrap}> 
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
        
        <AppLink
          to='/collages'
          children={
            <CollageScreenSmall
              borderColor={greenLight}
              borderWidth={4}
              dotColor={green}
              dotLeft={.6}
              dotSize={.3}
              dotTop={0}
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              textColor={black}
            />
          }
          style={{ textDecoration: 'none' }}
        />

        <AppLink 
          to='/writings'
          children={
            <WritingScreenSmall 
              borderColor={blueLight}
              borderWidth={2}
              dotColor={blue}
              dotLeft={-.1}
              dotSize={.4}
              dotTop={.05}
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              textColor={black}
            />
          }
        />

        <AppLink
          to="/about"
          children={
            <AboutScreenSmall 
              borderColor={yellow}
              borderWidth={3}
              dotColor={black}
              dotLeft={.22}
              dotSize={.5}
              dotTop={.1}
              screenHeight={screenHeight}
              screenWidth={screenWidth}
            />
          }
        />
      
      </div>
    );
  }
}

let styles = {
  homeScreenWrap: {
    height: 'inherit',
    position: 'relative',
    textAlign: 'center'
  },
};

export default HomeScreen;
