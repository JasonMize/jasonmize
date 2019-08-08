import React from 'react';

import Header from '../components/Header';
import WritingScreenSmall from '../components/WritingScreenSmall';
import WritingScreen from './WritingScreen';
import { yellow } from '../config/colors';

class HomeScreen extends React.Component {
  render () {
    return (
      <div>
        <Header />

        <div style={styles.content}>
          
          <WritingScreenSmall />

          <div style={styles.heroPicWrap}>
            <img style={styles.heroPic} src="images/jasonProfile_tux.jpg" />
          </div>

        </div>
      </div>
    );
  }
}

let styles = {
  content: {
  },
  heroPicWrap: {
    alignItems: 'center',
    left: '20vw',
    justifyContent: 'center',
    position: 'absolute',
    top: '30vh'
  },
  heroPic: {
    border: '25px solid' + yellow,
    borderRadius: '50vh',
    height: '80vh',
    overflow: 'hidden',
    textAlign: 'center',
    width: '80vh'
  }
};

export default HomeScreen;
