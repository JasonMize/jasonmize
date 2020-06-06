import React from 'react'

import WritingScreenSmall from '../components/WritingScreenSmall'
import CollageScreenSmall from '../components/CollageScreenSmall'
import JasonPhotosScreenSmall from '../components/JasonPhotosScreenSmall'
import AppLink from '../components/AppLink'
import '../CSS/ResponsiveLayout.css'

class HomeScreen extends React.Component {
  render () {
    return (
      <div>
        <div style={styles.content}>
          {/* <AppLink 
            to='/writings'
            children={<WritingScreenSmall />}
          />
          
          <AppLink 
            to='/collages'
            children={<CollageScreenSmall />}
          /> */}
{/* 
          <AppLink
            to="/"
            children={<JasonPhotosScreenSmall />}
          /> */}

        </div>
      </div>
    );
  }
}

let styles = {
  content: {
    height: '100%',
    width: '100%'
  },
};

export default HomeScreen;
