import React from 'react'

import AppProgressiveImage from '../components/AppProgressiveImage'

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
      border: `${borderWidth}vw solid` + borderColor,
      borderRadius: `${screenWidth * dotSize}px`,
      color: textColor,
      fontSize: screenWidth * .015,
      height: `${screenWidth * dotSize}px`,
      left: `${screenWidth * dotLeft}px`,
      overflow: 'hidden',
      textAlign: 'center',
      top: `${screenHeight * dotTop}px`,
      position: 'absolute',
      width: `${screenWidth * dotSize}px`,
    }}
  > 
    <AppProgressiveImage
      tinyUrl={require("../../public/images/tftsu/artworkAndMerch/earth_shipyard_tn.png")}
      mediumUrl={require("../../public/images/tftsu/artworkAndMerch/earth_shipyard_md.png")} 
      style={{
        width: `100%`,
      }} 
    />
  </div>
);
