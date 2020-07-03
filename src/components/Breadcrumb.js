import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-regular-svg-icons'

import AppLink from './AppLink'
import { blueDark } from '../constants/colors'

export default ({to, text, style, color, borderColor}) => (
  <AppLink
    to={to}
    style={{ margin: '5%', ...style }}
    children={
      <div
        style={{
          border: `10px solid ${borderColor}`,
          borderRadius: '70px',
          color: color,
          height: '70px',
          float: 'left',
          justifyContent: 'center',
          marginRight: '20px',
          textAlign: 'center', 
          width: '70px',
          ...style
        }}
      >
        <div>
          <FontAwesomeIcon 
            style={{ 
              marginTop: '12px', 
              color: color
            }} 
            icon={faHandPointLeft} 
          />
        </div>
        <div>{text}</div>
      </div>
    }
  />
)