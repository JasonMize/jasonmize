import React from 'react';

import { yellow } from '../constants/colors';


export default ({}) => (
  <div style={styles.heroPicWrap} id="polka-dot-jason-photos">
    <img style={styles.heroPic} src="images/jasonProfile_tux.jpg" />
  </div>
);

let styles = {
  heroPicWrap: {
    alignItems: 'center',
    // left: '30%',
    justifyContent: 'center',
    // position: 'absolute',
    // top: '30%'
  },
  heroPic: {
    border: '10% solid' + yellow,
    borderRadius: '50%',
    height: '60%',
    overflow: 'hidden',
    textAlign: 'center',
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

