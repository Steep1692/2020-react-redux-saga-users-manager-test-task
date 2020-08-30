import React from 'react'
import * as styles from './SimpleTabs.module.scss'

/**
 * Simple tabs component
 * @param{string|JSX.Element[]} head
 * @param{string|JSX.Element[]} children
 * @param{number} currentActiveTab
 * @param{function(newTabIndex: number)} onTabChange
 * @return {JSX.Element}
 * @constructor
 */
const SimpleTabs = ({head, children, currentActiveTab, onTabChange}) => {
  const headElements = head.map((tab, index) => (
    <button
      key={`simple-tab-head-${index}`}
      className={`${styles.button} ${(index === currentActiveTab) ? styles.active : ''}`}
      onClick={() => {
        onTabChange(index)
      }}
    >{tab}</button>
  ))

  const bodyElements =
    children.map((tabContent, index) => (
      (index === currentActiveTab) ?
        <div key={`simple-tab-content-${index}`}>{tabContent}</div> : null
    ))

  return (
    <div>
      <div className={styles.head}>{headElements}</div>
      <div>{bodyElements}</div>
    </div>
  )
}

export default SimpleTabs