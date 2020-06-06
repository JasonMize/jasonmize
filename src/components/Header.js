import React from 'react';

import { greyDark } from '../constants/colors'

export default () => (
  <div style={styles.headerWrap} id="header">
    {/* <div>Jason Mize</div> */}
    <img style={styles.image} src="images/jasonmize.png" />
  </div>
)

const styles = {
  headerWrap: {
    backgroundColor: '#fffff9',
    backgroundImage: 'linear-gradient(90deg, aliceblue 40%, #444)',
    borderBottom: `2px solid ${greyDark}`,
    height: '3em',
    textAlign: 'center',
    zIndex: 100,
  },
  image: {
    marginLeft: '10%',
    marginRight: '10%',
    // marginTop: '2%',
    width: '80%',
    // position: 'absolute',
    // top: 0,
    // bottom: 0
  }
};
