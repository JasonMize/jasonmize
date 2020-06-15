import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { black, green, greenLight, grey } from '../constants/colors';
import ImageGallery from '../components/ImageGallery';

class CollageScreen extends React.Component {

  getImageUrls = () => {
    let imageUrls = []
    let request = require.context(
      '../../public/images/collages', 
      false, 
      /\.(png|jpe?g|svg)$/
    )
    request.keys().forEach(function(key){
      imageUrls.push(request(key))
    })
    return imageUrls
  }
  
  render () {
    return (
      <div style={styles.screenWrap}>        
        <Breadcrumb to='/' text='Home' borderColor={greenLight} />
        
        <h1>Collage</h1>
      
        <p>
          These are some collages that I've made.  They're typically pieces that I've made for friends as
          birthday cards and gifts.
        </p>

        <ImageGallery
          getImageUrls={() => this.getImageUrls()}
          imageBorderColor={grey}
          imageMargin={.02}
          numberOfColumns={3}
          pageSpacing={90} // border + padding * 2
        />
        
      </div>
    );
  }
}

let styles = {
  screenWrap: {
    backgroundColor: green,
    border: `25px solid ${greenLight}`,
    color: black,
    flex: 1,
    marginTop: '25px',
    padding: '20px',
  }
};

export default CollageScreen;
