import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './component/Home/Home'
import SignUp from './component/Signup'
import Summary from './component/Summary/Summary'
import Login from './component/Login'
import Header from './component/Header'
import Footer from './component/Footer'
import Calculator from './component/Calculator/Calculator'

const App = () => {

  const [isLogin, setIsLogin] = React.useState(false);

  const loginState = () => {
    setIsLogin(true)
  }
  return (
    <div className="root">
      <Header />
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
            path='/calculator'
            render={() => <Calculator />}
          />
          <Route
            path='/home'
            render={() => <Home />}
          />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App;
