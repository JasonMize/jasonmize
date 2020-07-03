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
      backgroundColor: dotColor,
      border: `${borderWidth}vw solid` + borderColor,
      borderRadius: `${screenWidth * dotSize}px`,
      height: `${screenWidth * dotSize}px`,
      left: `${screenWidth * dotLeft}px`,
      overflow: 'hidden',
      position: 'absolute',
      textAlign: 'center',
      top: `${screenHeight * dotTop}px`,
      width: `${screenWidth * dotSize}px`,
    }} 
  >
    <img 
      style={{
        width: '100%'
      }} 
      src={require("../../public/images/about/jasonProfile_tux.jpg")} />
  </div>
);
