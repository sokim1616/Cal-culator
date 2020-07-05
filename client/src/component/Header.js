import React from "react";
import {
  Switch,
  Route,
  Router,
  useHistory,
  withRouter,
} from "react-router-dom";
import { Tab, TabBar } from "@rmwc/tabs";
import "@rmwc/tabs/styles";

const Header = ({ openModal }) => {
  const history = useHistory();

  return (
    <div>
      <header>
        <TabBar>
          <Tab onClick={() => history.push("/")}>Home</Tab>
          <Tab onClick={() => history.push("/about")}>About</Tab>
          <Tab onClick={() => history.push("/summary")}>Summary</Tab>
          <Tab onClick={() => history.push("/calculator")}>Calculator</Tab>
          <Tab onClick={() => history.push("/dodont")}>DO & DON`T</Tab>
          <Tab onClick={openModal}>LOGIN</Tab>
          {/* <Tab>LOGIN</Tab> */}
        </TabBar>
      </header>
    </div>
  );
};

export default withRouter(Header);
