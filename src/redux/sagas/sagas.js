import { put, takeEvery, all } from 'redux-saga/effects'
import {FETCH_USERS, setSeed, setUsers} from '../reducers/users'
import users from '../../services/users'
import {getCurrentPage, getItemsPerPage, getSeed} from '../selectors/users'
import {select} from '@redux-saga/core/effects'
import {setIsLoadingSpinnerVisible} from '../reducers/application'

/**
 * Puts loading spinner visibility state before and after passed saga.
 * @param saga
 * @return {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: {flag: *}, type: string}>>|*, void, *>}
 */
function* withLoadingSpinner(saga) {
  yield put(setIsLoadingSpinnerVisible(true))
  yield saga()
  yield put(setIsLoadingSpinnerVisible(false))
}

function* fetchUsers() {
  yield withLoadingSpinner(function* () {
    const itemsPerPage = yield select(getItemsPerPage)
    const currentPage = yield select(getCurrentPage)
    const seed = yield select(getSeed)

    const {results, info} = yield users.get(currentPage, itemsPerPage, seed)

    yield put(setUsers(results))
    yield put(setSeed(info.seed))
  })
}

function* watchUsersRequest() {
  yield takeEvery(FETCH_USERS, fetchUsers)
}

export default function* rootSaga() {
  yield all([
    watchUsersRequest(),
  ])
}