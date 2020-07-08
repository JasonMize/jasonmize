import React, { useState, useEffect } from 'react';

import { PageTracking } from '../components/PageTracking'
import Breadcrumb from '../components/Breadcrumb'
import { black, grey, yellow } from '../constants/colors'
import AppProgressiveImage from '../components/AppProgressiveImage'
import { JasonImages } from '../components/AboutImageList'
import AppLink from '../components/AppLink'

export default ({ match }) => {  
  PageTracking()

  let [image, setImage] = useState(null)

  useEffect(() => {
    let pageSlug = 'about/' + match.params.page_slug
    setImage(image = JasonImages.filter(x => x.pageSlug === pageSlug)[0])
  })

  return (
    <div style={styles.screenWrap}>        
      <Breadcrumb to='/about' text='About' borderColor={yellow} />
      
      <h1 style={{ textAlign: 'left' }}>About</h1>
      
      {image ? (
        <div>
          <h2>{image.caption}</h2>
          <AppLink
            target={'_blank'}
            to={image.url}
          >
            <AppProgressiveImage 
              tinyUrl={image.tinyUrl}
              url={image.url}
              tinySize={'100%'}
              style={{
                width: '100%',  
              }}
            />
          </AppLink>
          <div style={{ clear: 'both', marginBottom: '100px' }} />
        </div>
      ) : (
        <div>Image not found.</div>
      )}
    </div>
  )

}

let styles = {
  screenWrap: {
    backgroundColor: grey,
    border: `20px solid ${yellow}`,
    color: black,
    marginBottom: '100px',
    marginTop: '25px',
    padding: '20px',
    textAlign: 'center'
  }
};
