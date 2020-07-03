import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { black, green, greenLight, grey } from '../constants/colors';
import ImageGallery from '../components/ImageGallery';
import { CollageImageList } from '../components/CollageImageList'

export default ({}) => (  
  <div style={styles.screenWrap}>        
    <Breadcrumb to='/collage/' text='Home' borderColor={greenLight} />
    
    <div>BLAMMO</div>
  </div>
)
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

// export default CollageImageScreen;
