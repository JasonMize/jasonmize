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
      alignItems: 'center',
      fontSize: screenWidth * .015,
      justifyContent: 'center',
      left: `${screenWidth * dotLeft}px`,
      position: 'absolute',
      top: `${screenHeight * dotTop}px`,
      // zIndex: '-10',
    }} 
  >
    <div 
      style={{
        backgroundColor: dotColor,
        border: `${borderWidth}vw solid` + borderColor,
        borderRadius: `${screenWidth * dotSize}px`,
        color: textColor,
        height: `${screenWidth * dotSize}px`,
        overflow: 'hidden',
        textAlign: 'center',
        width: `${screenWidth * dotSize}px`,
      }}
    >
      
      <h1>Collages</h1>

      <img 
        style={{width: screenWidth * .09, ...styles.image, ...styles.image1}} 
        src="images/collages/Jason (2017) Birthday Day Card For Holly.jpeg" 
      />
      <img 
        style={{width: screenWidth * .07, ...styles.image, ...styles.image2}}
        src="images/collages/Jason (2017) Birthday Card For Hannah.jpg" 
      />
      <img 
        style={{width: screenWidth * .075, ...styles.image, ...styles.image3}}
        src="images/collages/Jason (2017) Birthday Card For Carolyn.jpeg" 
      />
      <img 
        style={{width: screenWidth * .08, ...styles.image, ...styles.image5}}
        src="images/collages/Jason (2017) Birthday Card For Mattie.jpg" 
      />
      <img 
        style={{width: screenWidth * .07, ...styles.image, ...styles.image4}}
        src="images/collages/Jason (2017) Birthday Card for Rebecca.jpg" 
      />
      <img 
        style={{width: screenWidth * .09, ...styles.image, ...styles.image6}}
        src="images/collages/Jason (2017) Birthday Card For Zoe.jpg" 
      />
    </div>
  </div>
)

let styles = {
  image: {
    border: `2px solid` + grey,
    height: 'auto'
  },
  image1: { transform: 'rotate(25deg)' },
  image2: { transform: 'rotate(-15deg)' },
  image3: { transform: 'rotate(-5deg)' },
  image4: { transform: 'rotate(10deg)' },
  image5: { transform: 'rotate(-30deg)' },
  image6: { transform: 'rotate(-10deg)' }
};
