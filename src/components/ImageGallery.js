import React from 'react'

import {screenWidthContext} from '../contexts/ScreenSizeContext'
import AppLink from '../components/AppLink'
import AppProgressiveImage from '../components/AppProgressiveImage'


const ImagesInColumn = ({
  backgroundColor, 
  imageBorderColor,
  imageBorderSize,
  imageMargin, 
  images, 
  linkColor,
  maxWidth, 
  screenWidth, 
}) => (
  images.map((img, index) =>
    <div
      key={index}
    > 
      <AppLink
        to={img.pageSlug}
        linkColor={linkColor}
      >
        {img.caption && (
          <div
            className='image-gallery-image-caption'
            style={{
              marginTop: `${screenWidth * imageMargin}px`,
              marginLeft: `${screenWidth * imageMargin}px`,
              marginRight: `${screenWidth * imageMargin}px`,
              marginBottom: 0,
              textAlign: 'center',
              overflowWrap: 'normal',
              maxWidth: `${maxWidth}px`,
              border: `${imageBorderSize}px solid ${backgroundColor}`
            }}
          >
            {img.caption}
          </div>
        )}
        <AppProgressiveImage 
          tinyUrl={img.tinyUrl}
          mediumUrl={img.mediumUrl}
          tinySize={maxWidth}
          tinyBorder={`${imageBorderSize}px solid ${imageBorderColor}`}
          style={{
            border: `${imageBorderSize}px solid ${imageBorderColor}`,
            marginTop: img.caption ? 0 : `${screenWidth * imageMargin}px`,
            marginLeft: `${screenWidth * imageMargin}px`,
            marginRight: `${screenWidth * imageMargin}px`,
            marginBottom: `${screenWidth * imageMargin}px`,
            width: `${maxWidth}px`,
          }}
        />
      </AppLink>      
    </div>
  )
)

export default ({ 
  imageBorderColor, 
  imageBorderSize,
  imageData, 
  imageMargin, 
  linkColor,
  numberOfColumns,
  pageSpacing,
  backgroundColor
}) => {
  const screenWidth = screenWidthContext._currentValue
  const imageCount = imageData.length

  // determine column number
  if (screenWidth < 600) { // small phones are always 1 column
    numberOfColumns = 1
  } else if (screenWidth < 1000 && numberOfColumns != 1) { // 1000px and smaller have a 2 column max
    numberOfColumns = 2
  }
  if (imageCount < numberOfColumns) { // default column count to image count if not many images
    numberOfColumns = imageCount 
  }
  
  // determine max width of images
  let singleImageMargin = Math.ceil(screenWidth * imageMargin * 2)
  const allImageMargins = singleImageMargin * numberOfColumns
  const allImageBorders = imageBorderSize * 2 * numberOfColumns
  const availableSpaceForImages = screenWidth - pageSpacing - allImageMargins - allImageBorders
  let maxWidth = Math.floor(availableSpaceForImages / numberOfColumns)
  
  // divide images into columns 
  let imagesPerColumn = 1
  let offset = 0 // offset is intended to make the extra image in an odd number appear in the first column not the last
  if (imageCount > numberOfColumns) {
    imagesPerColumn = imageCount / numberOfColumns 
    offset = imageCount % numberOfColumns; // even division = 0
    if (imageCount % 2) offset = 1 // not an even division = 1
  }

  let imagesInColumn1 = []
  let imagesInColumn2 = []
  let imagesInColumn3 = []
  let imagesInColumn4 = []
  let imagesInColumn5 = []

  let colStart1 = 0
  let colEnd1 = imageCount
  let colStart2 = imagesPerColumn + offset
  let colEnd2 = imageCount
  let colStart3 = (imagesPerColumn * 2) + offset
  let colEnd3 = imageCount
  let colStart4 = (imagesPerColumn * 3) + offset
  let colEnd4 = imageCount
  let colStart5 = (imagesPerColumn * 4) + offset
  let colEnd5 = imageCount

  if (numberOfColumns > 1) colEnd1 = imagesPerColumn + offset
  if (numberOfColumns > 2) colEnd2 = (imagesPerColumn * 2) + offset
  if (numberOfColumns > 3) colEnd3 = (imagesPerColumn * 3) + offset
  if (numberOfColumns > 4) colEnd4 = (imagesPerColumn * 4) + offset

  imagesInColumn1 = imageData.slice(colStart1, colEnd1)
  imagesInColumn2 = imageData.slice(colStart2, colEnd2)
  imagesInColumn3 = imageData.slice(colStart3, colEnd3)
  imagesInColumn4 = imageData.slice(colStart4, colEnd4)
  imagesInColumn5 = imageData.slice(colStart5, colEnd5)

  return (
    <div style={styles.gallery}>
      {imagesInColumn1.length > 0 && (
        <div 
          className='image-gallery-column'
          style={{
            ...styles.column,
              minWidth: maxWidth,
          }}
        >
          <ImagesInColumn
            backgroundColor={backgroundColor} 
            imageBorderColor={imageBorderColor}
            imageBorderSize={imageBorderSize}
            imageMargin={imageMargin} 
            images={imagesInColumn1} 
            linkColor={linkColor}
            maxWidth={maxWidth} 
            screenWidth={screenWidth}
          />
        </div>
      )}
      {imagesInColumn2.length > 0 && (
        <div className='image-gallery-column'
          style={{
            ...styles.column,
              minWidth: maxWidth,
          }}
        >
          <ImagesInColumn
            backgroundColor={backgroundColor} 
            imageBorderColor={imageBorderColor}
            imageBorderSize={imageBorderSize}
            imageMargin={imageMargin} 
            images={imagesInColumn2} 
            linkColor={linkColor}
            maxWidth={maxWidth} 
            screenWidth={screenWidth}
          />
        </div>
      )}
      {imagesInColumn3.length > 0 && (
        <div 
          className='image-gallery-column'
          style={{
            ...styles.column,
              minWidth: maxWidth,
          }}
        >
          <ImagesInColumn
            backgroundColor={backgroundColor} 
            imageBorderColor={imageBorderColor}
            imageBorderSize={imageBorderSize}
            imageMargin={imageMargin} 
            images={imagesInColumn3} 
            linkColor={linkColor}
            maxWidth={maxWidth} 
            screenWidth={screenWidth}
          />
        </div>
      )}
      {imagesInColumn4.length > 0 && (
        <div 
          className='image-gallery-column'
          style={{
            ...styles.column,
              minWidth: maxWidth,
          }}
        >
          <ImagesInColumn
            backgroundColor={backgroundColor} 
            imageBorderColor={imageBorderColor}
            imageBorderSize={imageBorderSize}
            imageMargin={imageMargin} 
            images={imagesInColumn4} 
            linkColor={linkColor}
            maxWidth={maxWidth} 
            screenWidth={screenWidth}
          />
        </div>
      )}
      {imagesInColumn5.length > 0 && (
        <div 
          className='image-gallery-column'
          style={{
            ...styles.column,
              minWidth: maxWidth,
          }}
        >
          <ImagesInColumn
            backgroundColor={backgroundColor} 
            imageBorderColor={imageBorderColor}
            imageBorderSize={imageBorderSize}
            imageMargin={imageMargin} 
            images={imagesInColumn5} 
            linkColor={linkColor}
            maxWidth={maxWidth} 
            screenWidth={screenWidth}
          />
        </div>
      )}

      <div style={{ clear: 'both', marginBottom: '100px' }} />
    </div>
  )
}

let styles = {
  gallery: {
  },
  column: {
    display: 'inline-grid',
  }
}
