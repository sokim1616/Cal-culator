import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
  withRouter,
} from "react-router-dom";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import "./About.css";
import "./AboutThisApp.css";
import AboutTeam from "./AboutTeam";

const About = () => {
  const [count, setCount] = useState(1);
  const history = useHistory();

  //const [flipped, setFlipped] = React.useState(false);
  const [teamModalOpen, setTeamModalOpen] = React.useState(false);
  const [appModalOpen, setAppModalOpen] = React.useState(false);

  const openTeamModal = () => {
    setTeamModalOpen(true);
  };

  const closeTeamModal = () => {
    setTeamModalOpen(false);
  };

  const openAppModal = () => {
    setAppModalOpen(true);
  };

  const closeAppModal = () => {
    setAppModalOpen(false);
  };

  return (
    <div className="about-this-app">
      {/* 1 */}
      <ul className="about-this-app__timeline">
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th AugustAugust</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 4th August</p>
            <div className="circle"></div>
          </div>
        </li>
      </ul>
      {/* 2 */}
      <hr className="line"></hr>
      {/* 3 */}
      <ul className="about-this-app__timeline">
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status Report</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status Report</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Status AugustReport</h5>
        </li>
      </ul>
      {/* 4 */}
      <div className="about-this-app__img">
        <AboutTeam
          teamModalOpen={teamModalOpen}
          closeTeamModal={closeTeamModal}
        />
        <Button
          style={{ width: "10rem" }}
          label="About Team"
          raised
          theme={["secondaryBg", "onSecondary"]}
          //onClick 하면 About Team 페이지가 나오도록
          onClick={openTeamModal}
        />
      </div>
    </div>
  );
};

export default withRouter(About);
