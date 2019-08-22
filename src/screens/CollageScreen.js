import React from 'react';
import { Link } from 'react-router-dom';
import { green, greenLight, blueDark } from '../config/colors';

class CollageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {}
  
  render () {
    return (
      <div style={styles.screenWrap}>

        <Link to='/'>
          <div style={styles.back}>
            Home
          </div>
        </Link>
        
        <h1>Collage</h1>
      
        <p>
          These are some collages that I've made.  They're typically pieces that I've made for friends as
          birthday cards and gifts.
        </p>
          
      </div>
    );
  }
}

let styles = {
  back: {
    paddingTop: 10
  },
  screenWrap: {
    backgroundColor: green,
    borderWidth: 10,
    borderColor: greenLight,
    color: blueDark,
    height: '100%',
    padding: 20,
  },
};

export default CollageScreen;
