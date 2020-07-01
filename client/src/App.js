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
    // TODO: header랑 body부분 나눠지도록 하기
    <div>
      <header>
        <Header />
      </header>
      <div>.</div>
      <body>
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
            path='/'
            render={() => <MainPage />}
          />
        </Switch>
      </body>
      <Footer />
    </div>
  )
}

export default App;
