const SET_USERS = 'UM/USERS/SET-USERS'
const SET_CURRENT_PAGE = 'UM/USERS/SET-CURRENT-PAGE'
const SET_SEED = 'UM/USERS/SET-SEED'
const ADD_USER_SELECTED = 'UM/USERS/ADD-USER-SELECTED'
const REMOVE_USER_SELECTED = 'UM/USERS/REMOVE-USER-SELECTED'
export const SET_FILTER_VALUE = 'UM/USERS/SET_FILTER_VALUE'
export const FETCH_USERS = 'UM/USERS/FETCH-USERS'

/**
 * Initial State
 * @type {{
 * users: [],
 * usersSelectedInfo: {}
 * currentPage: number,
 * itemsPerPage: number,
 * seed: string,
 * filterValue: string,
 * }}
 */
const initialState = {
  users: [],
  usersSelectedInfo: {},
  currentPage: 0,
  itemsPerPage: 20,
  seed: '',
  filterValue: '',
}

export const users = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USERS:
      return {
        ...state,
        users: payload.users,
      }
    case ADD_USER_SELECTED:
      return {
        ...state,
        usersSelectedInfo: {
          ...state.usersSelectedInfo,
          [payload.id]: {
            timeAdded: Date.now(),
          },
        },
      }
    case REMOVE_USER_SELECTED:
      const newState = {
        ...state,
        usersSelectedInfo: {...state.usersSelectedInfo}
      }
      delete newState.usersSelectedInfo[payload.id]
      return newState
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload.page,
      }
    case SET_SEED:
      return {
        ...state,
        seed: payload.seed,
      }
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: payload.newValue,
      }
    default:
      return {
        ...state,
      }
  }
}

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: {
    users,
  },
})

export const fetchUsers = () => ({
  type: FETCH_USERS,
})

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: {
    page,
  },
})

export const setSeed = (seed) => ({
  type: SET_SEED,
  payload: {
    seed,
  },
})

export const addUserSelected = (id) => ({
  type: ADD_USER_SELECTED,
  payload: {
    id,
  },
})

export const removeUserSelected = (id) => ({
  type: REMOVE_USER_SELECTED,
  payload: {
    id,
  },
})

export const setFilterValue = (newValue) => ({
  type: SET_FILTER_VALUE,
  payload: {
    newValue,
  },
})