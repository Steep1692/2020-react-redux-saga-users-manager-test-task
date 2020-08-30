import React from 'react'
import {useSelector} from 'react-redux'
import { useParams } from "react-router-dom";
import {getUsers} from '../../../redux/selectors/users'
import UserDetails from '../../base/userDetails/UserDetails'
import {getUserById} from '../../../utils/users'
import date from '../../../utils/date'
import ErrorPageTemplate from '../../main/ErrorPageTemplate/ErrorPageTemplate'
import routes from '../../../constants/routes'

const User = () => {
  const {id} = useParams()
  const users = useSelector(getUsers)
  const user = getUserById(users, id)

  if (!user) {
    return (
      <ErrorPageTemplate title="User id isn't correct!" text={<>Go <a href={routes.HOME.path} title="Home">Home</a></>}/>
    )
  }

  //gender,email,dob,phone
  const {
    picture,
    name,
    phone,
    email,
    location,
    gender,
    dob,
  } = user
  const address = `${location.city}, ${location.state}, ${location.street.number} ` +
    `${location.street.name}`
  const birthday = date.formatBirthday(dob.date)

  return (
    <div className="is-container">
      <UserDetails
        avatar={picture.large}
        firstname={name.first}
        lastname={name.last}
        email={email}
        address={address}
        phone={phone}
        gender={gender}
        birthday={birthday}
      />
    </div>
  )
}

export default User