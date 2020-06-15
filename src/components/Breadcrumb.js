import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-regular-svg-icons'

import AppLink from './AppLink'

export default ({to, text, style, borderColor}) => (
  <AppLink
    to={to}
    style={{ margin: '5%', ...style }}
    children={
      <div
        style={{
          border: `10px solid ${borderColor}`,
          borderRadius: '70px',
          height: '70px',
          float: 'left',
          justifyContent: 'center',
          marginRight: '20px',
          textAlign: 'center', 
          width: '70px',
        }}
      >
        <div>
          <FontAwesomeIcon 
            style={{ 
              marginTop: '12px', 
            }} 
            icon={faHandPointLeft} 
          />
        </div>
        <div
        >{text}</div>
      </div>
    }
  />
)