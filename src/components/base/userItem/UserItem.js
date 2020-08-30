import React, {useRef} from 'react'
import * as styles from './UserItem.module.scss'
import BaseButton from '../baseButton/BaseButton'
import Avatar from '../avatar/Avatar'

/**
 * Base user item component
 * @param{string} id
 * @param{string} avatar
 * @param{string} firstname
 * @param{string} lastname
 * @param{boolean} selected
 * @param{function (id: string)} onSelectButtonClick
 * @param{function (id: string)} onItemClick
 * @return {JSX.Element}
 * @constructor
 */
const UserItem = ({
                    id, avatar, firstname,
                    lastname, selected, onSelectButtonClick,
                    onItemClick,
                  }) => {
  const buttonSelectRef = useRef()

  const buttonLabel = (selected) ? 'Unselect' : 'Select'

  const onSelectButtonClickHandler = () => {
    onSelectButtonClick(id)
  }

  const onClickHandler = ({nativeEvent}) => {
    if (
      !nativeEvent.path.includes(buttonSelectRef.current)
    ) {
      onItemClick(id)
    }
  }

  return (
    <div className={styles.wrapper} onClick={onClickHandler}>
      <div>{id}</div>
      <div>
        <Avatar image={avatar}/>
      </div>
      <div>{firstname}</div>
      <div>{lastname}</div>
      <div>
        <BaseButton
          ref={buttonSelectRef}
          onClick={onSelectButtonClickHandler}
        >{buttonLabel}</BaseButton>
      </div>
    </div>
  )
}

export default UserItem