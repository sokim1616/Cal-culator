import React, { useState, useEffect } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import Home from './component/Home/Home'
import SignUp from './component/Signup'
import Summary from './component/Summary/Summary'
import Login from './component/Login'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {

  const [sendRequest, setSendRequest] = useState('home');
  const [isLogin, setIsLogin] = useState(false);
  //const [count, setCount] = useState(0);

  const loginState = () => {
    setIsLogin(true)
  }

  const changeTab = () => {
    setSendRequest(console.log('hiii'))
    // setSendRequest(<Switch><Redirect to='/Home'></Redirect></Switch>)
  }

  function useEffect() {
    setSendRequest();
    // if (sendRequest) {
    //   setSendRequest(true)
    //   console.log("hi")
    // }
  }

  return (
    <div>
      <Header changeTab={changeTab} />
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
