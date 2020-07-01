import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from "./component/Signup"
import Login from "./component/Login"
import Summary from "./component/Summary"
import MainPage from "./component/Main_page"

const App = () => {
  return (
    <div>
      <Switch>
        <Route
          path='/signup'
          render={() => <SignUp />}
        />
        <Route
          path='/login'
          render={() => <Login />}
        />
        <Route
          path='/summary'
          render={() => <Summary />}
        />
        <Route
          path='/'
          render={() => <MainPage />}
        />
      </Switch>
    </div>
  )
}

export default App;
