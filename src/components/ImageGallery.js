import React from 'react'

import {screenWidthContext} from '../contexts/ScreenSizeContext'

export default ({ 
  imageBorderColor, 
  getImageUrls, 
  imageMargin, 
  numberOfColumns,
  pageSpacing,
}) => {
  let screenWidth = screenWidthContext._currentValue

  let imageUrls = getImageUrls();
  
  if (screenWidth < 600) {
    numberOfColumns = 1
  } else if (screenWidth < 1000 && numberOfColumns != 1) {
    numberOfColumns = 2
  }
  const imageMargins = Math.floor(screenWidth * imageMargin * 2)
  const imageSpacing = imageMargins * numberOfColumns
  const availableSpaceForImages = screenWidth - pageSpacing - imageSpacing 
  let maxWidth = 25 // extra wiggle rooom
  
  if (screenWidth < 600 || numberOfColumns == 1) { 
    maxWidth = availableSpaceForImages - maxWidth
  } else {
    maxWidth = Math.floor(availableSpaceForImages / numberOfColumns) - maxWidth
  }

  return (
    <div style={styles.gallery}>
      {imageUrls.map((url, index) =>
        <img 
          key={index} 
          src={url} 
          style={{
            border: `1vw solid ${imageBorderColor}`,
            margin: `${screenWidth * imageMargin}px`,
            width: `${maxWidth}px`,
          }}
        />
      )}
    </div>
  )
}

let styles = {
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}
