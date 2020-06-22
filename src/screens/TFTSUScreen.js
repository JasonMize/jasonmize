import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { black, blueLight, green, greenLight, white, grey } from '../constants/colors';
import ImageGallery from '../components/ImageGallery';

class TFTSUScreen extends React.Component {

  getImageData = () => {
    let imageUrls = []
    let request = require.context(
      '../../public/images/tftsu', 
      false, 
      /\.(png|jpe?g|svg|gif)$/
    )
    request.keys().forEach(function(key){
      imageUrls.push(request(key))
    })
    return imageUrls
  }
  
  render () {
    return (
      <div style={styles.screenWrap}>        
        <Breadcrumb to='/' text='Home' borderColor={blueLight} color={white} />
        
        <h1>Tales From The Strange Universe</h1>
      
        <p>
          TFTSU was a multi-player space strategy game built by Really Big Spiders, a software company that consists of 
          Sherman Adelson and myself.  TFTSU was active from 2007 to 2015.
        </p>

        <p>Here are some images from the game.</p>

        <ImageGallery
          getImageData={() => this.getImageData()}
          imageBorderColor={blueLight}
          imageMargin={.01}
          numberOfColumns={4}
          pageSpacing={90} // border + padding * 2
        />
        
      </div>
    );
  }
}

let styles = {
  screenWrap: {
    backgroundColor: black,
    border: `25px solid ${blueLight}`,
    color: white,
    flex: 1,
    marginTop: '25px',
    padding: '20px',
  }
};

export default TFTSUScreen;
