import React, { Component } from 'react';
import Login from './component/Login'
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route
          path='/login'
          //{setIsLogin()}
          render={() => (
            <Login />
          )}
        />
        <Route
          path='/'
          render={() => (
            <div>메인 페이지</div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
