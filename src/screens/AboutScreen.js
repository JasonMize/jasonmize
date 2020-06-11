import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { green, greenLight, blueDark, grey, black, yellow, greyDark, blueLight } from '../constants/colors';

class AboutScreen extends React.Component {
  state = {
    imageUrls: []
  }

  getImageUrls = () => {
    let imageUrls = [];
    let req = require.context('../../public/images/about', false, /\.(png|jpe?g|svg)$/);
    req.keys().forEach(function(key){
      imageUrls.push(req(key));
    });
    this.setState({ imageUrls });
  };

  componentDidMount() {
    this.getImageUrls();
  }

  renderImages = () => {
    return this.state.imageUrls.map((url, index) => {
      return (
        <img src={url} style={styles.image} key={index} />
      )
    })
  };
  
  render () {
    return (
      <div style={styles.screenWrap}>
        
        <Breadcrumb to='/' text='Home' />
        
        <h1>About</h1>
      
        <p>
          Stuff goes here.
        </p>
          
        <div style={styles.gallery}>
          {this.renderImages()}
        </div>
        
      </div>
    );
  }
}

let styles = {
  screenWrap: {
    backgroundColor: grey,
    border: '20px solid' + yellow,
    color: black,
    flex: 1,
    marginTop: 25,
    padding: 20,
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    border: '5px solid' + greyDark,
    height: 'auto',
    margin: 20,
    width: 300
  }
};

export default AboutScreen;
