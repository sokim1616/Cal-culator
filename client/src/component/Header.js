import React, { useState } from "react";
import {
  Switch,
  Route,
  Router,
  useHistory,
  withRouter,
} from "react-router-dom";
import { Tab, TabBar } from "@rmwc/tabs";
import "@rmwc/tabs/styles";

const Header = ({ openLoginModal }) => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <header>
        <TabBar
          activeTabIndex={activeTab}
          onActivate={(evt) => setActiveTab(evt.detail.index)}
        >
          <Tab onClick={() => history.push("/")}>Home</Tab>
          <Tab onClick={() => history.push("/about")}>About</Tab>
          <Tab onClick={() => history.push("/summary")}>Summary</Tab>
          <Tab onClick={() => history.push("/calculator")}>Calculator</Tab>
          <Tab onClick={() => history.push("/dodont")}>DO & DON`T</Tab>
          <Tab onClick={openLoginModal}>LOGIN</Tab>
        </TabBar>
      </header>
    </div>
  );
};

export default withRouter(Header);
