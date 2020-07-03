import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { black, blueLight } from '../constants/colors'
import AppProgressiveImage from '../components/AppProgressiveImage'
import { ArtworkAndMerch } from '../components/TFTSUImageList'
import AppLink from '../components/AppLink'

class TFTSUImageScreen extends React.Component {  
  state = {
    image: null
  }

  componentDidMount () {
    let pageSlug = 'tftsu/' + this.props.match.params.page_slug
    let image = ArtworkAndMerch.filter(x => x.pageSlug === pageSlug)[0]
    this.setState(state => ({ ...state, image }))
  }

  render () {
    const {
      image
    } = this.state;

    return (
      <div style={styles.screenWrap}>        
        <Breadcrumb to='/tftsu' text='TFTSU' borderColor={blueLight} color={blueLight} />
        
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
}
let styles = {
  screenWrap: {
    backgroundColor: black,
    border: `20px solid ${blueLight}`,
    color: blueLight,
    marginBottom: '100px',
    marginTop: '25px',
    padding: '20px',
    textAlign: 'center'
  }
};

export default TFTSUImageScreen;
