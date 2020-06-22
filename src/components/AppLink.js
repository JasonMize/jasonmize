import React from 'react'
import { Link } from 'react-router-dom'

import { blueDark } from '../constants/colors'


export default ({to, target, children, text, style}) => (
  <Link 
    to={to}
    style={{ color: blueDark, ...style }}
    target={target}
  >
    {text && (
      <div>{text}</div>
    )}
    {children || null}
  </Link>
)
