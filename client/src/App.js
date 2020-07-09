import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import Home from "./component/Home/Home";
import Signup from "./component/Signup";
import Summary from "./component/Summary/Summary";
import Login from "./component/Login";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Calculator from "./component/Calculator/Calculator";
import DoDont from "./component/Dodont/Dodont";
import About from "./component/About/About";

Modal.setAppElement("#root");

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [trivia, setTrivia] = useState("");


  useEffect(() => {
    axios.get("http://localhost:4000/food/foodtrivia").then((result) => {
      setTrivia(result.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user/sessionExists", {
        withCredentials: true,
      })
      .then((result) => {
        if (result.data === "session exists") {
          setIsLogin(true);
        }
      });
  }, []);

  const loginState = () => {
    setIsLogin(true);
  };

  const logoutHandle = () => {
    setIsLogin(false);
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
        logoutHandle={logoutHandle}
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
            render={() => <About setCurrentPageIndex={setCurrentPageIndex} />}
          />
          <Route
            path='/summary'
            render={() => (
              <Summary
                id='summary'
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
                trivia={trivia}
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
            render={() => {
              setCurrentPageIndex(0);
              return <Home setCurrentPageIndex={setCurrentPageIndex} />;
            }}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default withRouter(App);
