import React from 'react';

export default ({ 
  borderColor, 
  borderWidth,
  dotColor, 
  dotLeft,
  dotSize,
  dotTop,
  screenHeight,
  screenWidth,
 }) => (
  <div 
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      left: `${screenWidth * dotLeft}px`,
      position: 'absolute',
      top: `${screenHeight * dotTop}px`,
    }} 
  >
    <img 
      style={{
        backgroundColor: dotColor,
        border: `${borderWidth}vw solid` + borderColor,
        borderRadius: `${screenWidth * dotSize}px`,
        height: `${screenWidth * dotSize}px`,
        overflow: 'hidden',
        textAlign: 'center',
        width: `${screenWidth * dotSize}px`,
      }} 
      src="images/tftsu/ad_facebook_earth+shipyard_308x308.jpg"  
    />
  </div>
);
