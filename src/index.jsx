import React from 'react'
import './index.scss'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from './components/main/App/App'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import {reducer} from './redux/reducer'
import rootSaga from './redux/sagas/sagas'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your Footer to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
