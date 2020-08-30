/**
 * Creates wrapper for passed function 'fn' that allows to call it
 * only once per passed time 'time'
 * @param{function} fn
 * @param{number} time
 * @return {function(...[*]=)}
 */
export const createDebounce = (fn, time) => {
  let nextFnToCall = null
  let isFnCallAllowed = true
  let savedArguments = []

  return (...args) => {
    if (isFnCallAllowed) {
      fn(...args)

      isFnCallAllowed = false
    } else {
      nextFnToCall = fn
      savedArguments = args
    }

    setTimeout(() => {

      if (nextFnToCall) {
        nextFnToCall(...savedArguments)

        nextFnToCall = null
        savedArguments = []
      }

      isFnCallAllowed = true
    }, time)
  }
}