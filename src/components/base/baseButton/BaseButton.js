import React, {forwardRef} from 'react'
import * as styles from './BaseButton.module.scss'

const BaseButton = forwardRef(({className, ...restProps}, ref) => {
  return (
    <button ref={ref} className={`${styles.button} ${className || ''}`} {...restProps}/>
  )
})

export default BaseButton