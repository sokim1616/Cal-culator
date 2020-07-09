import React from "react";
import axios from "axios";
import { useHistory, withRouter } from "react-router-dom";
import { Tab, TabBar } from "@rmwc/tabs";
import "@rmwc/tabs/styles";

const Header = ({
  setCurrentPageIndex,
  currentPageIndex,
  openLoginModal,
  isLogin,
  logoutHandle,
}) => {
  const history = useHistory();

  const summaryAuth = () => {
    if (isLogin === false) {
      openLoginModal();
    } else if (isLogin === true) {
      history.push("/summary");
    }
  };

  const calculatorAuth = () => {
    if (isLogin === false) {
      openLoginModal();
    } else if (isLogin === true) {
      history.push("/calculator");
    }
  };

  const dodontAuth = () => {
    if (isLogin === false) {
      openLoginModal();
    } else if (isLogin === true) {
      history.push("/dodont");
    }
  };

  const destroyAuth = () => {
    logoutHandle();
    axios
      .post("http://localhost:4000/user/signout", {}, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        if (response.data === "signed out") {
          console.log(response)
          logoutHandle();
          history.push("/");
        }
      })
      .catch((err) => console.log(err, "error happened"));
  };

  const loginLogout = () => {
    if (isLogin === true) {
      destroyAuth();
    } else if (isLogin === false) {
      openLoginModal();
    }
  };

  return (
    <div>
      <header className='header'>
        <TabBar
          activeTabIndex={currentPageIndex}
          onActivate={(evt) => setCurrentPageIndex(evt.detail.index)}
        >
          <Tab onClick={() => history.push("/")}>Home</Tab>
          <Tab onClick={() => history.push("/about")}>About</Tab>
          <Tab onClick={summaryAuth}>Summary</Tab>
          <Tab onClick={calculatorAuth}>Calculator</Tab>
          <Tab onClick={dodontAuth}>DO & DON`T</Tab>
          <Tab onClick={loginLogout}>{!isLogin ? "LOGIN" : "LOGOUT"}</Tab>
        </TabBar>
      </header>
    </div>
  );
};

export default withRouter(Header);
