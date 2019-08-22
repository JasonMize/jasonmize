import React from 'react';

import { black, green, greenLight, grey } from '../config/colors';

class CollageScreenSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}
  
  render () {
    return (
      <div style={styles.collageWrap}>
        <div style={styles.collage}>
          
          <h1>Collages</h1>

          <img style={styles.image1} src="images/collages/Jason (2017) Birthday Day Card For Holly.jpeg" />
          <img style={styles.image2} src="images/collages/Jason (2017) Birthday Card For Hannah.jpg" />
          <img style={styles.image3} src="images/collages/Jason (2017) Birthday Card For Carolyn.jpeg" />
          <img style={styles.image5} src="images/collages/Jason (2017) Birthday Card For Mattie.jpg" />
          <img style={styles.image4} src="images/collages/Jason (2017) Birthday Card for Rebecca.jpg" />
          <img style={styles.image6} src="images/collages/Jason (2017) Birthday Card For Zoe.jpg" />
        </div>
      </div>
    );
  }
}

let styles = {
  collageWrap: {
    alignItems: 'center',
    left: '55vw',
    justifyContent: 'center',
    position: 'absolute',
    top: '25vh'
  },
  collage: {
    backgroundColor: green,
    border: '25px solid' + greenLight,
    borderRadius: '30vh',
    color: black,
    height: '40vh',
    overflow: 'hidden',
    textAlign: 'center',
    width: '40vh'
  },
  image1: {
    borderColor: grey,
    borderWidth: 1,
    height: 'auto',
    transform: 'rotate(25deg)',
    width: 90,
  },
  image2: {
    borderColor: grey,
    borderWidth: 1,
    height: 'auto',
    transform: 'rotate(-15deg)',
    width: 70,
  },
  image3: {
    borderColor: grey,
    borderWidth: 1,
    height: 'auto',
    transform: 'rotate(-5deg)',
    width: 75,
  },
  image4: {
    borderColor: grey,
    borderWidth: 1,
    height: 'auto',
    transform: 'rotate(10deg)',
    width: 80,
  },
  image5: {
    borderColor: grey,
    borderWidth: 1,
    height: 'auto',
    transform: 'rotate(-30deg)',
    width: 70
  },
  image6: {
    borderColor: grey,
    borderWidth: 1,
    height: 'auto',
    transform: 'rotate(-10deg)',
    width: 90
  }
};

export default CollageScreenSmall;
