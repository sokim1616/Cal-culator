<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> ca56a52c8742a75ff21ac920f9e00782ccf776d4
import {
  BrowserRouter as Router,
  useHistory,
  withRouter,
} from "react-router-dom";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import "./About.css";
import "./AboutThisApp.css";
import AboutTeam from "./AboutTeam";
<<<<<<< HEAD
import AboutApp from "./AboutApp";
=======
>>>>>>> ca56a52c8742a75ff21ac920f9e00782ccf776d4

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
            <p className="timeline__event__date">Monday 29th June</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Tuesday 30th June</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Wednesday 1st July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 2nd July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Friday 3rd July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Saturday 4th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Sunday 5th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Monday 6th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Tuesday 7th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Wednesday 8th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Thursday 9th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Friday 10th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Saturday 11th July</p>
            <div className="circle"></div>
          </div>
        </li>
        <li className="timeline__event">
          <div className="timeline__event__daycheck">
            <p className="timeline__event__date">Sunday 12th July</p>
            <div className="circle"></div>
          </div>
        </li>
      </ul>
      {/* 2 */}
      <hr className="line"></hr>
      {/* 3 */}
      <ul className="about-this-app__timeline">
        <li className="timeline__event">
          <h5 className="timeline__event__title">Team Hell-thy first formed</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Idea sessions on how to create Cal-culator</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Kick-off meeting & Beginning of actual project</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Philip & Junseob on server-side / Douhyun & Sohyun on client-side</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">.</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">.</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">.</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Integration of server-side & client-side</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Function & CSS</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">.</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Wrap-up</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title1">D-DAY</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Fiesta!!!</h5>
        </li>
        <li className="timeline__event">
          <h5 className="timeline__event__title">Getting ready for the next project...</h5>
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
          label="Click Me!"
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
