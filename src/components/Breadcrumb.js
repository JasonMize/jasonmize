import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointLeft } from '@fortawesome/free-regular-svg-icons'

import AppLink from './AppLink'

export default ({to, text, style}) => (
  <AppLink
    to={to}
    style={{ margin: '5%', ...style }}
    children={
      <div>
        <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faHandPointLeft} />
        <span>{text}</span>
      </div>
    }
  />
)