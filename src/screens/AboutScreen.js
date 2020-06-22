import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { grey, black, yellow, greyDark } from '../constants/colors';
import ImageGallery from '../components/ImageGallery';

class AboutScreen extends React.Component {

  getImageData = () => {
    let imageUrls = []
    let request = require.context(
      '../../public/images/about', 
      false, 
      /\.(png|jpe?g|svg)$/
    )
    request.keys().forEach(function(key){
      imageUrls.push(request(key))
    })
    return imageUrls
  };

  render () {
    return (
      <div style={styles.screenWrap}>
        
        <Breadcrumb to='/' text='Home'  borderColor={yellow} />
        
        <h1>About</h1>
      
        <p>
          Howdy.  I'm Jason Mize.  This is a collection.  My own personal curio cabinet of odds and ends.  
        </p>

        <p>
          Click around!  If you see anything you enjoy, please let me know.  Or dislike.  Really, I'm a huge fan of 
          feedback of any sort.  I promise to only cry on the inside. 
        </p>
          
        <ImageGallery
          getImageData={() => this.getImageData()}
          imageBorderColor={yellow}
          imageMargin={.02}
          numberOfColumns={3}
          pageSpacing={80} // border + padding * 2
        />
        
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
  }
};

export default AboutScreen;
