import React, { useState, useEffect } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Home from "./component/Home/Home";
// import SignUp from "./component/Signup";
import Summary from "./component/Summary/Summary";
import Login from "./component/Login";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Calculator from "./component/Calculator/Calculator";
import DoDont from "./component/Dodont/Dodont";
import About from "./component/About/About";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);


  const loginState = () => {
    setIsLogin(true);
  };

  function openLoginModal() {
    setLoginModalOpen(true);
  }

  function closeLoginModal() {
    setLoginModalOpen(false);
  }

  return (
    <div>
      <Header openLoginModal={openLoginModal} />
      <Login
        loginState={loginState}
        loginModalOpen={loginModalOpen}
        closeLoginModal={closeLoginModal} />
      <div>
        <Switch>
          <Route path="/about" render={() => <About />} />
          <Route path="/summary" render={() => <Summary />} />
          <Route path="/calculator" render={() => <Calculator />} />
          <Route path="/dodont" render={() => <DoDont />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
