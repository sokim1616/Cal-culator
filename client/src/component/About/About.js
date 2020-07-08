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
import AboutThisApp from './AboutThisApp';

const About = () => {
  const history = useHistory();

  //const [flipped, setFlipped] = React.useState(false);
  const [teamModalOpen, setTeamModalOpen] = React.useState(false)
  const [appModalOpen, setAppModalOpen] = React.useState(false)


  const openTeamModal = () => {
    setTeamModalOpen(true);
  }

  const closeTeamModal = () => {
    setTeamModalOpen(false);
  }

  const openAppModal = () => {
    setAppModalOpen(true);
  }

  const closeAppModal = () => {
    setAppModalOpen(false);
  }

  return (
    <div className='aboutButtons'>
      {/* <Switch>
        <Route
          path='/about/aboutthisapp'
          render={() => <AboutThisApp
            setCurrentPageIndex={setCurrentPageIndex}

          />}
        />
      </Switch> */}
      <AboutTeam teamModalOpen={teamModalOpen} closeTeamModal={closeTeamModal} />
      {/* <AboutApp appModalOpen={appModalOpen} closeAppModal={closeAppModal} /> */}
      <Button
        label='About this App'
        raised
        theme={["secondaryBg", "onSecondary"]}
        //onClick 하면 About Project 페이지가 나오도록
        onClick={() => history.push('/about/aboutthisapp')}

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
