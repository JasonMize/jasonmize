import React from 'react'
import { Link } from 'react-router-dom'

import { blueDark } from '../constants/colors'


export default ({to, target, children, text, linkColor, style}) => (
  <Link 
    to={to}
    style={{ color: linkColor ? linkColor : blueDark, ...style }}
    target={target}
  >
    {text && (
      <div>{text}</div>
    )}
    {children || null}
  </Link>
)
