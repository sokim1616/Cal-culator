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
  const [isLogin, setIsLogin] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const loginState = () => {
    setIsLogin(true);
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
  }

  return (
    <div>
      <Header
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
        openLoginModal={openLoginModal}
        isLogin={isLogin}
      />
      <Login
        loginState={loginState}
        loginModalOpen={loginModalOpen}
        closeLoginModal={closeLoginModal}
        openSignupModal={openSignupModal}
      />
      <Signup
        signupModalOpen={signupModalOpen}
        openLoginModal={openLoginModal}
        closeSignupModal={closeSignupModal}
      />
      <div>
        <Switch>
          <Route
            path='/about'
            render={() => <About
              setCurrentPageIndex={setCurrentPageIndex}

            />}
          />
          <Route
            path='/summary'
            render={() => (
              <Summary
                isLogin={isLogin}
                setCurrentPageIndex={setCurrentPageIndex}
              />
            )}
          />
          <Route
            path='/calculator'
            render={() => (
              <Calculator
                isLogin={isLogin}
                setCurrentPageIndex={setCurrentPageIndex}
              />
            )}
          />
          <Route
            path='/dodont'
            render={() => (
              <DoDont
                isLogin={isLogin}
                setCurrentPageIndex={setCurrentPageIndex}
              />
            )}
          />
          <Route
            path='/'
            render={() => <Home setCurrentPageIndex={setCurrentPageIndex} />}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
