import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import SignUp from "./component/Signup"
import Summary from "./component/Summary/Summary"
import Login from "./component/Login"

const App = () => {

  const [isLogin, setIsLogin] = React.useState(false);

  const loginState = () => {
    setIsLogin(true)
  }
    return (
      <div>
        <Switch>
          <Route
            path='/signup'
            render = {() => <SignUp />}
          />
          <Route 
            path='/login'
            render = {() => <Login isLogin={isLogin} loginState={loginState} />}
          />
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
