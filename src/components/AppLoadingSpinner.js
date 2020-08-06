import React from 'react'

import '../CSS/LoadingSpinner.css'
import { blue, blueLight } from '../constants/colors'


export default ({style}) => (
  <div 
    className="lds-ripple"
    style={{
      ...style
    }}
  >
    <div style={{ borderColor: blueLight }}></div>
    <div style={{ borderColor: blue }}></div>
  </div>
)
