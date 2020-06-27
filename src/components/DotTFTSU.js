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
      alignItems: 'center',
      color: textColor,
      fontSize: screenWidth * .015,
      justifyContent: 'center',
      left: `${screenWidth * dotLeft}px`,
      position: 'absolute',
      top: `${screenHeight * dotTop}px`,
    }} 
  >
    <div
      style={{
        backgroundColor: dotColor,
          border: `${borderWidth}vw solid` + borderColor,
          borderRadius: `${screenWidth * dotSize}px`,
          height: `${screenWidth * dotSize}px`,
          overflow: 'hidden',
          textAlign: 'center',
          width: `${screenWidth * dotSize}px`,
          position: 'relative'
      }}
    > 
      <AppProgressiveImage
        tinyUrl={require("../../public/images/tftsu/artworkAndMerch/earth_shipyard_tn.png")}
        mediumUrl={require("../../public/images/tftsu/artworkAndMerch/earth_shipyard_md.png")} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: `${screenWidth * dotSize}px`,
          width: `${screenWidth * dotSize}px`,
        }} 
      />
    </div>
  </div>
);
