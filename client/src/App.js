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
  const [modalIsOpen, setIsOpen] = useState(false); // 로그인 모달창이 떠있는지에 대한 유무를 판단하는 state (디폴트는 안 떠있는 상태)
  const [isLogin, setIsLogin] = useState(false); // 로그인이 되어 있는지에 대한 유무를 판단하는 state (디폴트는 안 되있는 상태)
  const [SUModalIsOpen, setSUIsOpen] = useState(false); // 회원가입 모달창이 떠있는지에 대한 유무를 판단하는 state (디폴트는 안 떠있는 상태)

  function openModal() { // 모달창이 안떠있는 상태에서 떠있는 상태로 바꿔주는 함수
    setIsOpen(true);
  }

  function closeModal() { // 모달창을 다시 안떠있는 상태로 바꿔주는 함수
    setIsOpen(false);
  }

  const loginState = () => { // 로그인이 안되어 있는 상태에서 된 상태로 바꿔주는 함수
    setIsLogin(true);
  };

  function openSUModal() { // 회원가입 모달창이 뜨기 위해서 로그인 모달창이 닫히고 현재 떠있지 않은 회원가입 모달창이 뜨도록 하는 함수
    closeModal();
    setSUIsOpen(true);
  }

  function closeSUModal() { // 회원가입 모달창을 다시 안떠있는 상태로 바꿔주는 함수
    setSUIsOpen(false);
  }

  return (
    <div>
      <Header openModal={openModal} />
      <Login
        modalIsOpen={modalIsOpen}
        isLogin={isLogin}
        loginState={loginState}
        openSUModal={openSUModal}
        closeModal={closeModal} />
      <SignUp
        SUModalIsOpen={SUModalIsOpen}
        setSUIsOpen={setSUIsOpen}
        closeSUModal={closeSUModal} />
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
