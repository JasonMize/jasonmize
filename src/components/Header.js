import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div style={styles.headerWrap}>
        <img style={styles.image} src="images/jasonmize.png" />
      </div>
    );
  }
}

let styles = {
  headerWrap: {
    backgroundColor: '#fffff9',
    backgroundImage: 'linear-gradient(90deg, aliceblue 40%, #444)',
    borderBottom: '3px solid #444',
    height: '125px',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw'
  },
  image: {
    marginLeft: '20px'
  }
};


export default Header;
