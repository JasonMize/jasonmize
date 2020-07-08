import React from 'react'

import { PageTracking } from '../components/PageTracking'
import Breadcrumb from '../components/Breadcrumb'
import { grey, black, yellow, greyDark } from '../constants/colors'
import ImageGallery from '../components/ImageGallery'
import { JasonImages } from '../components/AboutImageList'

export default ({}) => {
  PageTracking()
  return (
    <div style={styles.screenWrap}>
      
      <Breadcrumb to='/' text='Home'  borderColor={yellow} />
      
      <h1>About</h1>
    
      <p>
        Howdy.  I'm Jason Mize.  This is a collection.  My own personal curio cabinet of odds and ends.  
      </p>

      <p>
        Click around!  If you see anything you enjoy, please let me know.  Or dislike.  Really, I'm a huge fan of 
        feedback of any sort.  I promise to only cry on the inside.  (#TODO - add method for sending feedback)
      </p>
        
      <ImageGallery
        imageData={JasonImages}
        imageBorderColor={yellow}
        imageBorderSize={'10'}
        imageMargin={.02}
        numberOfColumns={5}
        pageSpacing={80} // border + padding * 2
      />
      
    </div>
  )
}

let styles = {
  screenWrap: {
    backgroundColor: grey,
    border: '20px solid' + yellow,
    color: black,
    marginTop: '25px',
    padding: '20px',
  }
};

