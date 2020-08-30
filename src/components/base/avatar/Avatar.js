import React from 'react'
import * as styles from './Avatar.module.scss'

/**
 * Base avatar component
 * @param{string} image
 * @param{'big'|undefined} size
 * @return {JSX.Element}
 * @constructor
 */
const Avatar = ({image, size}) => {
  return (
    <div className={`${styles.wrapper} ${(size) ? styles[size] : ''}`}>
      <a href={image} target="_blank" title="Avatar image" rel="noopener noreferrer">
        <img className={styles.image} src={image} alt="Avatar"/>
      </a>
    </div>
  )
}

export default Avatar