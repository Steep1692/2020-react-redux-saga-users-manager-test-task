import React from 'react'
import * as styles from './BaseInput.module.scss'

const BaseInput = ({className, ...restProps}) => {
  return (
    <div className={`${styles.wrapper}`}>
      <input className={`${styles.input} ${className || ''}`} {...restProps} />
    </div>
  )
}

export default BaseInput