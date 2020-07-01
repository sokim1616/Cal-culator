import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from "./component/Signup"
import Summary from "./component/Summary"

const App = () => {
    return (
      <div>
        <Switch>
          <Route
            path='/signup'
            render = {() => <SignUp />}
          />
          {/*<Route 
            path='/login'
            render = {() => <Login />}
          /> */}
          <Route 
            path='/summary'
            render = {() => <Summary />}
          />
          <Route 
            path='/'
            render = {() => <div>메인페이지</div>}
          />
        </Switch>
      </div>
    )
  }

export default App;
