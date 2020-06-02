import React from 'react'
import { Link } from 'react-router-dom'

import { blueDark } from '../constants/colors'


export default ({to, children, text, style}) => (
  <Link 
    to={to}
    style={{ color: blueDark, ...style }}
  >
    {text && (
      <div>{text}</div>
    )}
    {children || null}
  </Link>
)
