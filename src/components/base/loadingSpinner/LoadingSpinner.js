import React from 'react'
import * as styles from './LoadingSpinner.module.scss'

const LoadingSpinner = () => {
  return (
    <div className={styles.overlay}>
      <img className={styles.spinner} src="/assets/images/loading-spinner.svg" alt="Loading spinner" />
    </div>
  )
}

export default LoadingSpinner