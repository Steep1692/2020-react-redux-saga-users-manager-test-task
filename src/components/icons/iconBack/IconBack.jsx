import React from 'react'
import SvgIcon from '../svgIcon/SvgIcon'

/**
 * Icon "Arrow back"
 * @param{boolean} light
 * @return {JSX.Element}
 * @constructor
 */
const IconBack = ({light}) => {
  return (
    <SvgIcon icon="back" light={light}/>
  )
}

export default IconBack