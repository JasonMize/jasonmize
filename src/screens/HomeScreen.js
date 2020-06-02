import React from 'react';

import WritingScreenSmall from '../components/WritingScreenSmall';
import CollageScreenSmall from '../components/CollageScreenSmall';
import { yellow } from '../constants/colors';
import AppLink from '../components/AppLink';

class HomeScreen extends React.Component {
  render () {
    return (
      <div>
        <div style={styles.content}>
          <AppLink 
            to='/writings'
            children={<WritingScreenSmall />}
          />
          
          <AppLink 
            to='/collages'
            children={<CollageScreenSmall />}
          />

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
    flex: 1
  },
  heroPicWrap: {
    alignItems: 'center',
    left: '30%',
    justifyContent: 'center',
    position: 'absolute',
    top: '30%'
  },
  heroPic: {
    border: '25px solid' + yellow,
    borderRadius: '50vh',
    height: '60vh',
    overflow: 'hidden',
    textAlign: 'center',
    width: '60vh',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default HomeScreen;
