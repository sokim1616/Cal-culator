import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from "./component/Signup"

const App = () => {
    return (
      <div>
      <Switch>
      <Route
        path='/signup'
        render = {() => <SignUp />}
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
