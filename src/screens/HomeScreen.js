import React from 'react'

import {screenWidthContext, screenHeightContext} from '../contexts/ScreenSizeContext'
import DotTFTSU from '../components/DotTFTSU'
import DotCollage from '../components/DotCollage'
import DotAbout from '../components/DotAbout'
import AppLink from '../components/AppLink'

import { 
  black,
  blue,
  blueLight,
  green, 
  greenLight, 
  yellow,
  white
} from '../constants/colors'

class HomeScreen extends React.Component {
  render () {
    const screenWidth = screenWidthContext._currentValue
    const screenHeight = screenHeightContext._currentValue

    return (
      <div id="HomeScreen" style={styles.homeScreenWrap}> 

        <AppLink
          to='/collages'
          children={
            <DotCollage
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
          to='/tftsu'
          children={
            <DotTFTSU 
              borderColor={blueLight}
              borderWidth={2}
              dotColor={black}
              dotLeft={-.1}
              dotSize={.4}
              dotTop={.05}
              screenHeight={screenHeight}
              screenWidth={screenWidth}
              textColor={white}
            />
          }
        />

        <AppLink
          to="/about"
          children={
            <DotAbout 
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
