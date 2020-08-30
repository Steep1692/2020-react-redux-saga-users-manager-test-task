import React from 'react'
import * as styles from './Header.module.scss'
import {useSelector} from 'react-redux'
import {getUsersSelectedInfo} from '../../../redux/selectors/users'
import CurrentTimeBlock from '../../base/currentTimeBlock/CurrentTimeBlock'
import {useLocation, useHistory} from 'react-router-dom'
import routes from '../../../constants/routes'
import IconButton from '../../base/iconButton/IconButton'
import IconBack from '../../icons/iconBack/IconBack'

const Header = () => {
  const location = useLocation()
  const history = useHistory()

  const isBackButtonVisible = (location.pathname !== routes.HOME.path)

  const usersSelectedInfo = useSelector(getUsersSelectedInfo)
  const usersSelectedCount = Object.keys(usersSelectedInfo).length

  const handleBackButtonClick = () => {
    history.push(routes.HOME.path)
  }

  return (
    <header className={styles.wrapper}>
      <div className="is-container">
        <div className={styles.inner}>
          <div className={styles.left}>
            {
              (isBackButtonVisible)
                ? (
                  <IconButton className={styles.buttonBack} onClick={handleBackButtonClick}>
                    <IconBack light={true}/>
                  </IconButton>
                ) : null
            }
          </div>

          <div className={styles.center}>{usersSelectedCount}</div>
          <div className={styles.right}>
            <CurrentTimeBlock/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
