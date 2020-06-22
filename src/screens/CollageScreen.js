import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { black, green, greenLight, grey } from '../constants/colors';
import ImageGallery from '../components/ImageGallery';

class CollageScreen extends React.Component {

  // getImageData = () => {
  //   let images = []
  //   let image = {}
  //   let request = require.context(
  //     '../../public/images/collages', 
  //     false, 
  //     /\.(png|jpe?g|svg)$/
  //   )
  //   request.keys().forEach(function(key){
  //     image = {
  //       url: request(key),
  //       caption: null
  //     }
  //     images.push(image)
  //   })
  //   return images
  // }
  
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
          getImageData={() => [
            {
              url: require('../../public/images/collages/SantaNeedsHisSoup.jpg'),
              tinyUrl: require('../../public/images/collages/SantaNeedsHisSoup_tn.jpg'),
              mediumUrl: require('../../public/images/collages/SantaNeedsHisSoup_md.jpg'),
              caption: 'Santa Needs His Soup'
            },
            {
              url: require('../../public/images/collages/AngelRoad.jpg'),
              tinyUrl: require('../../public/images/collages/AngelRoad_tn.jpg'),
              mediumUrl: require('../../public/images/collages/AngelRoad_md.jpg'),
              caption: 'Angel Road'
            },
            {
              url: require('../../public/images/collages/HaveABellPepper.jpg'),
              tinyUrl: require('../../public/images/collages/HaveABellPepper_tn.jpg'),
              mediumUrl: require('../../public/images/collages/HaveABellPepper_md.jpg'),
              caption: 'Have A Bell Pepper'
            },
            {
              url: require('../../public/images/collages/CuriousGraduation.jpg'),
              tinyUrl: require('../../public/images/collages/CuriousGraduation_tn.jpg'),
              mediumUrl: require('../../public/images/collages/CuriousGraduation_md.jpg'),
              caption: 'Curious Graduation'
            },
            {
              url: require('../../public/images/collages/PrettyBird.jpg'),
              tinyUrl: require('../../public/images/collages/PrettyBird_tn.jpg'),
              mediumUrl: require('../../public/images/collages/PrettyBird_md.jpg'),
              caption: 'Pretty Bird'
            },
          ]}
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
