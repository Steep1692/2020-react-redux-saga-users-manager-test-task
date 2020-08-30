import {createDebounce} from '../utils/helpers'
import {useState} from 'react'

/**
 * Throttle creator hook
 * @param{function} fn
 * @param{number} time
 * @return {function(...[*]=)}
 */
const useThrottle = (fn, time) => {
  return useState(() => {
    return createDebounce(fn, time)
  })[0]
}

export default useThrottle