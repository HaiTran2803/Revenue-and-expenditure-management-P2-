import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from './containers/login/Login'
import NotFound from './containers/notFound/NotFound'
import Main from './containers/main/Main'
import Statistic from './containers/static/Statistic'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route exact path="/statistic" component={Statistic} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
