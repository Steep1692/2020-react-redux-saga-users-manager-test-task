import React, {useEffect, useState} from 'react'

const CurrentTimeBlock = () => {
  const timeout = 250
  let [label, setLabel] = useState('')

  const getCurrentTime = () => {
    const dateObject = new Date()

    const hours = dateObject.getHours()
    const minutes = dateObject.getMinutes()
    const seconds = dateObject.getSeconds()

    return `${hours}:${minutes}:${seconds}`
  }

  const updateTime = () => {
    setLabel(getCurrentTime())
  }

  const start = () => {
    setTimeout(function recursion() {
      updateTime()

      setTimeout(recursion, timeout)
    }, timeout)
  }

  useEffect(() => {
    updateTime()
    start()
  })

  return (
    <div>{label}</div>
  )
}

export default CurrentTimeBlock