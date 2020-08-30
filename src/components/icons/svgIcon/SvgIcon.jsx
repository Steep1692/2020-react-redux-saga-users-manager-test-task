import React from 'react'
import * as styles from './SvgIcon.module.scss'

/**
 * Base SVG icon component
 * @param{string} icon
 * @param{boolean} light
 * @return {JSX.Element}
 * @constructor
 */
const SvgIcon = ({icon, light}) => {
  return (
    <i className={`${styles.icon} ${styles[icon]} ${(light) ? styles.light : ''}`}></i>
  )
}

export default SvgIcon