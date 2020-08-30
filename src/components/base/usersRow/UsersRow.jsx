import React from 'react'
import * as styles from './UsersRow.module.scss'
import UserItem from '../userItem/UserItem'
import BaseInput from '../baseInput/BaseInput'
import {getUserId} from '../../../utils/users'

/**
 * Base users row component
 * @param{Object[]} users
 * @param{Object[]} usersSelectedInfo
 * @param{string} currentFilterValue
 * @param{function} onSelectButtonClick
 * @param{function} onFilterInputChange
 * @param{function} onItemClick
 * @return {JSX.Element}
 * @constructor
 */
const UsersRow = ({
                    users, usersSelectedInfo,
                    onSelectButtonClick, onFilterInputChange, currentFilterValue,
                    onItemClick,
                  }) => {
  const usersElements = users.map((user, key) => {
    const {name, picture} = user
    const finalId = getUserId(user)
    const firstname = name.first
    const lastname = name.last
    const filterValueLowerCase = currentFilterValue && currentFilterValue.toLowerCase()
    let selected = usersSelectedInfo[finalId]

    if (
      !currentFilterValue
      || firstname.toLowerCase().startsWith(filterValueLowerCase)
      || lastname.toLowerCase().startsWith(filterValueLowerCase)
    ) {
      return (
        <li key={finalId}>
          <UserItem
            id={finalId}
            avatar={picture.thumbnail}
            firstname={firstname}
            lastname={lastname}
            selected={selected}
            onSelectButtonClick={onSelectButtonClick}
            onItemClick={onItemClick}
          />
        </li>
      )
    } else {
      return null
    }
  })

  return (
    <div>
      <div className={styles.filter}>
        <BaseInput
          placeholder="Filter by first and last names"
          onChange={onFilterInputChange}
        />
      </div>

      <ul className={styles.list}>
        {usersElements}
      </ul>
    </div>
  )
}

export default UsersRow