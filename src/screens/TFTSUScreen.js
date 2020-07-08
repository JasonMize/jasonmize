import React from 'react'

import { PageTracking } from '../components/PageTracking'
import Breadcrumb from '../components/Breadcrumb'
import { black, blueLight, white } from '../constants/colors'
import ImageGallery from '../components/ImageGallery'
import { ArtworkAndMerch } from '../components/TFTSUImageList'

export default () => {
  PageTracking()

  return (
    <div style={styles.screenWrap}>        
      <Breadcrumb to='/' text='Home' borderColor={blueLight} color={blueLight} />
      
      <div 
        style={{ 
          clear: 'both',
          paddingTop: '2%',
        }}
      >
        <img 
          style={{
            width: '95%'
          }} 
          src="/images/tftsu/logo_vector.svg"  
        />      
      </div>

      <p>
        Tales From The Strange Universe was a multi-player space strategy game.  It was built by Really Big Spiders, a software company that consists of 
        Sherman Adelson and myself.  TFTSU was active from 2007 to 2015.
      </p>

      <p>The Strange Universe was a browser game.  Games would last 3 weeks and typically have 70 - 100 players.</p>

      <h2 style={{ color: white }}>Artwork And Merchandise</h2>

      <ImageGallery
        imageData={ArtworkAndMerch}
        imageBorderColor={blueLight}
        imageBorderSize={'10'}
        imageMargin={.01}
        linkColor={blueLight}
        numberOfColumns={2}
        pageSpacing={90} // border + padding * 2
        backgroundColor={black}
      />        
    </div>
  )
}

let styles = {
  screenWrap: {
    backgroundColor: black,
    border: `25px solid ${blueLight}`,
    color: blueLight,
    flex: 1,
    marginTop: '25px',
    padding: '20px',
  }
};
