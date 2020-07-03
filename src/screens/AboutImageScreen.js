import React from 'react';

import Breadcrumb from '../components/Breadcrumb'
import { black, grey, yellow } from '../constants/colors'
import AppProgressiveImage from '../components/AppProgressiveImage'
import { JasonImages } from '../components/AboutImageList'
import AppLink from '../components/AppLink'

class AboutImageScreen extends React.Component {  
  state = {
    image: null
  }

  componentDidMount () {
    let pageSlug = 'about/' + this.props.match.params.page_slug
    let image = JasonImages.filter(x => x.pageSlug === pageSlug)[0]
    this.setState(state => ({ ...state, image }))
  }

  render () {
    const {
      image
    } = this.state;

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

export default AboutImageScreen;
