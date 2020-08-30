const users = new Map()

/**
 * Returns passed user id if it exists or generates new one.
 * @param user
 */
export const getUserId = (user) => {
  const userIdValue = user.id.value

  if (userIdValue) {
    return userIdValue
  } else {
    let id = generateId()

    if (users.has(user)) {
      return users.get(user)
    } else {

      while ([].includes.call(users.values(), id)) {
        id = generateId()
      }

      users.set(user, id)

      return id
    }
  }
}

/**
 * Finds user by passed id and returns it.
 * If there isn't a user with passed id then null will be returned.
 * @param users
 * @param id
 * @return {null}
 */
export const getUserById = (users, id) =>  {
  let result = null

  for (let i = 0; i < users.length; i++) {
    const possibleUser = users[i]

    if (getUserId(possibleUser) === id) {
      result = possibleUser
      break
    }
  }

  return result
}

/**
 * Generates random id string.
 * @return {string}
 */
const generateId = () => ('_' + Math.random().toString(36).substr(2, 9))