import React from 'react';

import Header from '../components/Header';
import WritingScreen from './WritingScreen';
import { orange } from '../config/colors';

class HomeScreen extends React.Component {
  render () {
    return (
      <div>
        <Header />

        <div style={styles.content}>

          <div style={styles.heroPicWrap}>
            <img style={styles.heroPic} src="images/jasonProfile_tux.jpg" />
          </div>

          <WritingScreen />

        </div>
      </div>
    );
  }
}

let styles = {
  content: {
    paddingTop: '125px'
  },
  heroPicWrap: {
    height: '80vh',
    left: '20vw',
    overflow: 'hidden',
    position: 'absolute',
    top: '30vh',
    width: '40vw',
    zIndex: '100'
  },
  heroPic: {
    borderRadius: '20vw',
    border: '15px solid' + orange,
    height: 'auto',
    maxWidth: '100%',
  }
};

export default HomeScreen;
