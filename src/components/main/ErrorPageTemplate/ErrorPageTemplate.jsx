import React from 'react'
import * as styles from './ErrorPageTemplate.module.scss'

/**
 * Base error page template
 * @param{string} title
 * @param{string} text
 * @return {JSX.Element}
 * @constructor
 */
const ErrorPageTemplate = ({title, text}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.errorCode}>{title}</div>
      <div className={styles.proposal}>{text}</div>
    </div>
  )
}

export default ErrorPageTemplate