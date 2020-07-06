import React, { useState, useEffect } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Home from "./component/Home/Home";
import Signup from "./component/Signup";
import Summary from "./component/Summary/Summary";
import Login from "./component/Login";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Calculator from "./component/Calculator/Calculator";
import DoDont from "./component/Dodont/Dodont";
import About from "./component/About/About";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);


  const loginState = () => {
    setIsLogin(true);
  };

  const signupState = () => {
    setIsMember(true);
  };

  function openLoginModal() {
    closeSignupModal();
    setLoginModalOpen(true);
  }

  function closeLoginModal() {
    setLoginModalOpen(false);
  }

  function openSignupModal() {
    closeLoginModal();
    setSignupModalOpen(true);
  }

  function closeSignupModal() {
    setSignupModalOpen(false);
    setLoginModalOpen(true)
  }

  // function closeSUModal() { // 회원가입 모달창을 다시 안떠있는 상태로 바꿔주는 함수
  //   setSUIsOpen(false);
  // }

  return (
    <div>
      <Header openLoginModal={openLoginModal} />
      <Login
        loginState={loginState}
        loginModalOpen={loginModalOpen}
        closeLoginModal={closeLoginModal}
        openSignupModal={openSignupModal} />
      <Signup
        signupState={signupState}
        signupModalOpen={signupModalOpen}
        openLoginModal={openLoginModal}
        closeSignupModal={closeSignupModal} />
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
