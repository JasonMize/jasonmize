import React from 'react';

import { grey } from '../constants/colors';

export default ({ 
  borderColor, 
  borderWidth, 
  dotColor,
  dotLeft, 
  dotSize,
  dotTop, 
  screenHeight,
  screenWidth,
  textColor 
}) => (

    <div 
      style={{
        backgroundColor: dotColor,
        border: `${borderWidth}px solid` + borderColor,
        borderRadius: `${screenWidth * dotSize}px`,
        color: textColor,
        fontSize: screenWidth * .015,
        height: `${screenWidth * dotSize}px`,
        left: `${screenWidth * dotLeft}px`,
        overflow: 'hidden',
        position: 'absolute',
        top: `${screenHeight * dotTop}px`,
        width: `${screenWidth * dotSize}px`,
      }}
    >
      
      <h1>Collages</h1>

      <img 
        style={{width: screenWidth * .09, ...styles.image, ...styles.image1}} 
        src={require("../../public/images/collages/SantaNeedsHisSoup_tn.jpg")}
      />
      <img 
        style={{width: screenWidth * .07, ...styles.image, ...styles.image2}}
        src={require("../../public/images/collages/AngelRoad_tn.jpg")}
      />
      <img 
        style={{width: screenWidth * .075, ...styles.image, ...styles.image3}}
        src={require("../../public/images/collages/HaveABellPepper_tn.jpg")}
      />
      <img 
        style={{width: screenWidth * .08, ...styles.image, ...styles.image5}}
        src={require("../../public/images/collages/CuriousGraduation_tn.jpg")}
      />
      <img 
        style={{width: screenWidth * .07, ...styles.image, ...styles.image4}}
        src={require("../../public/images/collages/PrettyBird_tn.jpg")}
      />
      <img 
        style={{width: screenWidth * .09, ...styles.image, ...styles.image6}}
        src={require("../../public/images/collages/BetterHopeTheyArentHungry_tn.jpg")}
      />
    </div>
  
)

let styles = {
  image: {
    border: `2px solid` + grey,
    height: 'auto',
    margin: '2%'
  },
  image1: { transform: 'rotate(25deg)' },
  image2: { transform: 'rotate(-15deg)' },
  image3: { transform: 'rotate(-5deg)' },
  image4: { transform: 'rotate(10deg)' },
  image5: { transform: 'rotate(-30deg)' },
  image6: { transform: 'rotate(-10deg)' }
};
