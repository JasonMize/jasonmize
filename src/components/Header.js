import React from 'react';

import { greyDark } from '../constants/colors'

export default () => (
  <div style={styles.headerWrap} id="header">
    <img style={styles.image} src="images/jasonmize.png" />
  </div>
)

const styles = {
  headerWrap: {
    backgroundColor: '#fffff9',
    backgroundImage: 'linear-gradient(90deg, aliceblue 40%, #444)',
    borderBottom: `2px solid ${greyDark}`,
    marginTop: '2%',
    paddingTop: '1%',
    textAlign: 'center',
    zIndex: 1000,
  },
  image: {
    width: '70%'
  }
};
