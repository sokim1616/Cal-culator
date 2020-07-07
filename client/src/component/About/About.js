import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
  withRouter
} from "react-router-dom";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import "./About.css";
import AboutTeam from "./AboutTeam";
import AboutProject from './AboutProject';

const About = () => {
  const history = useHistory();

  //const [flipped, setFlipped] = React.useState(false);
  const [teamModalOpen, setTeamModalOpen] = React.useState(false)

  // const flipCard = () => {
  //   setFlipped(true);
  // }
  const openTeamModal = () => {
    setTeamModalOpen(true);
  }

  const closeTeamModal = () => {
    setTeamModalOpen(false);
  }

  const toAboutProject = () => {
    history.push('./AboutProject')
  }

  return (
    <div className='aboutButtons'>
      <AboutTeam teamModalOpen={teamModalOpen} closeTeamModal={closeTeamModal} />
      <Button
        label='About this App'
        raised
        theme={["secondaryBg", "onSecondary"]}
        //onClick 하면 About Project 페이지가 나오도록
        onClick={toAboutProject}
      />
      <div className="divider" />
      <Button
        style={{ width: '10rem' }}
        label='About Team'
        raised
        theme={["secondaryBg", "onSecondary"]}
        //onClick 하면 About Team 페이지가 나오도록
        onClick={openTeamModal}
      />
    </div>
  );
};

export default withRouter(About);
