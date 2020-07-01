import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import MainPage from './component/Main_page'
import SignUp from './component/Signup'
import Summary from './component/Summary/Summary'
import Login from './component/Login'
import Header from './component/Header'
import Footer from './component/Footer'

const App = () => {

  const [isLogin, setIsLogin] = React.useState(false);

  const loginState = () => {
    setIsLogin(true)
  }
  return (
    <div>
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
            path='/mainpage'
            render={() => <MainPage />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App;
