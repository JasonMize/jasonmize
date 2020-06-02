import React from 'react';

export default () => (
  <div style={styles.headerWrap}>
    <img style={styles.image} src="images/jasonmize.png" />
  </div>
)

const styles = {
  headerWrap: {
    backgroundColor: '#fffff9',
    backgroundImage: 'linear-gradient(90deg, aliceblue 40%, #444)',
    borderBottom: '3px solid #444',
    height: 125,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    width: '100vw',
    zIndex: 100
  },
  image: {
    marginLeft: '20px'
  }
};
