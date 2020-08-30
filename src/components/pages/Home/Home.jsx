import React, {useEffect, useState} from 'react'
import * as styles from './Home.module.scss'
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import {getFilterValue, getUsers, getUsersSelectedInfo} from '../../../redux/selectors/users'
import UsersRow from '../../base/usersRow/UsersRow'
import {addUserSelected, fetchUsers, removeUserSelected, setFilterValue} from '../../../redux/reducers/users'
import SimpleTabs from '../../base/simpleTabs/SimpleTabs'
import routes from '../../../constants/routes'
import {getUserId} from '../../../utils/users'

const Home = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [currentActiveTab, onTabChange] = useState(0)

  const users = useSelector(getUsers)
  const usersSelectedInfo = useSelector(getUsersSelectedInfo)
  const usersFilterValue = useSelector(getFilterValue)

  useEffect(() => {
    dispatch(fetchUsers(1))
  }, [dispatch])

  const onSelectButtonClick = (id) => {
    if (usersSelectedInfo[id]) {
      dispatch(removeUserSelected(id))
    } else {
      dispatch(addUserSelected(id))
    }
  }

  const onFilterInputChange = ({nativeEvent}) => {
    dispatch(setFilterValue(nativeEvent.target.value))
  }

  const onUsersItemClick = (id) => {
    history.push(routes.USER.create(id))
  }

  const usersSelected = users.filter((user) => usersSelectedInfo[getUserId(user)])

  return (
    <div className="is-container">
      <div className={`${styles.wrapper}`}>

        <SimpleTabs head={['All', 'Selected']}
                    currentActiveTab={currentActiveTab}
                    onTabChange={onTabChange}
        >
          <UsersRow
            users={users}
            usersSelectedInfo={usersSelectedInfo}
            onSelectButtonClick={onSelectButtonClick}
            onFilterInputChange={onFilterInputChange}
            currentFilterValue={usersFilterValue}
            onItemClick={onUsersItemClick}
          />

          <UsersRow
            users={usersSelected}
            usersSelectedInfo={usersSelectedInfo}
            onSelectButtonClick={onSelectButtonClick}
            onFilterInputChange={onFilterInputChange}
            currentFilterValue={usersFilterValue}
            onItemClick={onUsersItemClick}
          />
        </SimpleTabs>

      </div>
    </div>
  )
}

export default Home