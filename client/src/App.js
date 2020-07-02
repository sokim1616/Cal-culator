import React, { Component, useState, useEffect } from 'react'
import { Switch, Route, Router, Redirect, Link } from 'react-router-dom';
import Home from './component/Home/Home'
import SignUp from './component/Signup'
import Summary from './component/Summary/Summary'
import Login from './component/Login'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {

  const [sendRequest, setSendRequest] = useState('summary');
  const [isLogin, setIsLogin] = useState(false);
  const [count, setCount] = useState(0);

  const loginState = () => {
    setIsLogin(true)
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`
    // if (sendRequest) {
    //   setSendRequest(true)
    //   console.log("hi")
    // }
  })

  return (
    <div>
      <Header useEffect={useEffect} />
      <div>
        <Switch>
          <Route
            path='/signup'
            render={() => <SignUp />}
          />
          <Route
            path='/login'
            render={() => <Login isLogin={isLogin} loginState={loginState} />}
          />
          <Route
            path='/summary'
            render={() => <Summary />}
          />
          <Route
            path='/home'
            render={() => <Home />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App;
