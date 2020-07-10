import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import "./About.css";
import "./AboutThisApp.css";
import AboutTeam from "./AboutTeam";

const About = () => {
  const [teamModalOpen, setTeamModalOpen] = useState(false);

  const openTeamModal = () => {
    setTeamModalOpen(true);
  };

  const closeTeamModal = () => {
    setTeamModalOpen(false);
  };

  return (
    <div className='about-this-app'>
      <ul className='about-this-app__timeline'>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Monday 29th June</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Tuesday 30th June</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Wednesday 1st July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Thursday 2nd July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Friday 3rd July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Saturday 4th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Sunday 5th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Monday 6th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Tuesday 7th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Wednesday 8th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Thursday 9th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Friday 10th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Saturday 11th July</p>
            <div className='circle'></div>
          </div>
        </li>
        <li className='timeline__event'>
          <div className='timeline__event__daycheck'>
            <p className='timeline__event__date'>Sunday 12th July</p>
            <div className='circle'></div>
          </div>
        </li>
      </ul>
      <hr className='line'></hr>
      <ul className='about-this-app__timeline'>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>Team Hell-thy first formed</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>
            Idea sessions on how to create Cal-culator
          </h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>
            Kick-off meeting & Beginning of actual project
          </h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>
            Philip & Junseob on server-side / Douhyun & Sohyun on client-side
          </h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>.</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>.</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>.</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>
            Integration of server-side & client-side
          </h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>Function & CSS</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>.</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>Wrap-up</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title1'>D-DAY</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>Fiesta!!!</h5>
        </li>
        <li className='timeline__event'>
          <h5 className='timeline__event__title'>
            Getting ready for the next project...
          </h5>
        </li>
      </ul>
      <div className='about-this-app__img'>
        <AboutTeam
          teamModalOpen={teamModalOpen}
          closeTeamModal={closeTeamModal}
        />
        <Button
          style={{ width: "10rem" }}
          label='Click Me!'
          raised
          theme={["secondaryBg", "onSecondary"]}
          onClick={openTeamModal}
        />
      </div>
    </div>
  );
};

export default withRouter(About);
