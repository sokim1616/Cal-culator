import React, { useState, useEffect } from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import Home from "./component/Home/Home";
import SignUp from "./component/Signup";
import Summary from "./component/Summary/Summary";
import Login from "./component/Login";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Calculator from "./component/Calculator/Calculator";
import DoDont from "./component/Dodont/Dodont";
import About from "./component/About/About";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [SUModalIsOpen, setSUIsOpen] = useState(false);


  const loginState = () => {
    setIsLogin(true);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openSUModal() {
    closeModal();
    setSUIsOpen(true);
  }

  return (
    <div>
      <Header openModal={openModal} />
      <Login
        isLogin={isLogin}
        loginState={loginState}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        openSUModal={openSUModal}
        closeModal={closeModal} />
      <SignUp
        SUModalIsOpen={SUModalIsOpen}
        setSUIsOpen={setSUIsOpen} />
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
