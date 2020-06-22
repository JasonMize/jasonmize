import React from 'react'

import {screenWidthContext} from '../contexts/ScreenSizeContext'
import AppLink from '../components/AppLink'
import AppProgressiveImage from '../components/AppProgressiveImage'

export default ({ 
  imageBorderColor, 
  getImageData, 
  imageMargin, 
  numberOfColumns,
  pageSpacing,
}) => {
  const screenWidth = screenWidthContext._currentValue

  const imageData = getImageData();
  
  // determine column max
  if (screenWidth < 600) { // small phones are always 1 column
    numberOfColumns = 1
  } else if (screenWidth < 1000 && numberOfColumns != 1) { // 1000px and smaller have a 2 column max
    numberOfColumns = 2
  }

  // determine max width of images
  const imageMargins = Math.floor(screenWidth * imageMargin * 2)
  const imageSpacing = imageMargins * numberOfColumns
  const availableSpaceForImages = screenWidth - pageSpacing - imageSpacing 
  let maxWidth = 30 // extra wiggle rooom
  if (screenWidth < 600 || numberOfColumns == 1) { // small phones and single column should be based on screen width
    maxWidth = availableSpaceForImages - maxWidth
  } else { // based on number of columns
    maxWidth = Math.floor(availableSpaceForImages / numberOfColumns) - maxWidth
  }

  return (
    <div style={styles.gallery}>
      {imageData.map((img, index) =>
        <div
          key={index} 
          style={{
            display: 'inline-flex',
            flexDirection: 'column'
          }}
        >
          <AppLink
            target="_blank" 
            to={img.url}
          >
            {img.caption && (
              <div
                style={{
                  marginTop: `${screenWidth * imageMargin}px`,
                  marginLeft: `${screenWidth * imageMargin}px`,
                  marginRight: `${screenWidth * imageMargin}px`,
                  marginBottom: 0,
                  textAlign: 'center'
                }}
              >
                {img.caption}
              </div>
            )}  
            <AppProgressiveImage 
              tinyUrl={img.tinyUrl}
              mediumUrl={img.mediumUrl}
              tinySize={maxWidth}
              tinyBorder={`1vw solid ${imageBorderColor}`}
              style={{
                border: `1vw solid ${imageBorderColor}`,
                marginTop: img.caption ? 0 : `${screenWidth * imageMargin}px`,
                marginLeft: `${screenWidth * imageMargin}px`,
                marginRight: `${screenWidth * imageMargin}px`,
                marginBottom: `${screenWidth * imageMargin}px`,
                maxWidth: `${maxWidth}px`,
              }}
            />        
          </AppLink>
        </div>
      )}
      <div style={{ clear: 'both', marginBottom: '100px' }} />
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
