import React from 'react'
import * as styles from './UserDetails.module.scss'
import Avatar from '../avatar/Avatar'

/**
 * User details component
 * @param{string} avatar
 * @param{string} firstname
 * @param{string} email
 * @param{string} phone
 * @param{string} lastname
 * @param{string} address
 * @param{string} gender
 * @param{string} birthday
 * @return {JSX.Element}
 * @constructor
 */
const UserDetails = ({
                       avatar, firstname, email, phone,
                       lastname, address, gender, birthday,
                     }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperAvatar}>
        <Avatar image={avatar} size="large"/>
      </div>
      <div>
        <div className={styles.infoMain}>{firstname} {lastname}, [{gender}]</div>
        <div>{birthday}</div>
        <div>{address}</div>
        <div>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  )
}

export default UserDetails