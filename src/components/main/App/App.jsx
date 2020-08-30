import React from 'react'
import * as styles from './App.module.scss'
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/NotFound/NotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import {useSelector} from 'react-redux'
import {getIsLoadingSpinnerVisible} from '../../../redux/selectors/application'
import User from '../../pages/User/User'
import routes from '../../../constants/routes'
import LoadingSpinner from '../../base/loadingSpinner/LoadingSpinner'

const App = () => {
  const isAppLoading = useSelector(getIsLoadingSpinnerVisible)

  return (
    <div className={styles.wrapper}>
      <Router>

        <div className={styles.header}>
          <Header/>
        </div>

        <div className={styles.content}>
          {
            (isAppLoading) ? <LoadingSpinner/> : null
          }

          <Switch>
            <Route path={routes.USER.path} render={() => <User/>}/>
            <Route exact path={routes.HOME.path} render={() => <Home/>}/>
            <Route path="/404" render={() => <NotFound/>}/>
            <Redirect to="/404"/>
          </Switch>
        </div>

        <div className={styles.footer}>
          <Footer/>
        </div>

      </Router>
    </div>
  )
}

export default App
