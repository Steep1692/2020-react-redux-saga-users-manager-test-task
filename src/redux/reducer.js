import {application} from './reducers/application'
import {users} from './reducers/users'
import {combineReducers} from 'redux'

export const reducer = combineReducers({
  application,
  users,
})