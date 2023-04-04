import React from 'react'
import {Model} from './Model/Model.tsx'

const ModelPopUp = ({heading, closePopup}) => {
  return (
    <div>
        <Model handleCloseIconClick = {closePopup} heading = {heading}  />
    </div>
  )
}

export default ModelPopUp