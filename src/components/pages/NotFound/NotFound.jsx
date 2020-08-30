import React from 'react'
import routes from '../../../constants/routes'
import ErrorPageTemplate from '../../main/ErrorPageTemplate/ErrorPageTemplate'

const NotFound = () => {
  return (
    <ErrorPageTemplate title={404} text={<>Go <a href={routes.HOME.path} title="Home">Home</a></>}/>
  )
}

export default NotFound