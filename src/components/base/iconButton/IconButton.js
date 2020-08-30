import React, {forwardRef} from 'react'
import * as styles from './IconButton.module.scss'

const IconButton = forwardRef(({className, ...restProps}, ref) => {
  return (
    <button ref={ref} className={`${styles.button} ${className || ''}`} {...restProps}/>
  )
})

export default IconButton