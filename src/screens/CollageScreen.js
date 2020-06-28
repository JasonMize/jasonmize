import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { black, green, greenLight, grey } from '../constants/colors';
import ImageGallery from '../components/ImageGallery';
import { CollageImageList } from '../components/CollageImageList'

class CollageScreen extends React.Component {  
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
          imageData={CollageImageList}
          imageBorderColor={grey}
          imageBorderSize={'10'}
          imageMargin={.02}
          numberOfColumns={5}
          pageSpacing={90} // border + padding * 2
          backgroundColor={green}
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
