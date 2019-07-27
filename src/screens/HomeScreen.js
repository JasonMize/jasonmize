import React from 'react';

import Header from '../components/Header';
import WritingScreen from './WritingScreen';

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
    position: 'absolute',
    height: '80vh',
    left: '30vw',
    overflow: 'hidden',
    top: '20vh',
    width: '40vw'
  },
  heroPic: {
    borderRadius: '20vw',
    height: 'auto',
    maxWidth: '100%',
  }
};

export default HomeScreen;
