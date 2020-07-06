<<<<<<< HEAD
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";
=======
import React, { useEffect } from "react";

>>>>>>> finished tabs
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import AboutTeam from './AboutTeam'

const About = () => {
  const history = useHistory();

  const [flipped, setFlipped] = React.useState(false);

  function flipCard() {
    setFlipped(true);
  }

  function toAboutTeam() {
    history.push(`/AboutTeam`);
  };

<<<<<<< HEAD
=======
const About = ({ openLoginModal, setCurrentPageIndex }) => {
  useEffect(() => {
    setCurrentPageIndex(1);
  }, []);
>>>>>>> finished tabs

  return (
    <div className='aboutButtons'>
      <Button
        label='About Project'
        raised
        theme={["secondaryBg", "onSecondary"]}
        //onClick 하면 About Project 페이지가 나오도록
<<<<<<< HEAD
        onClick={() => {

        }}
=======
        onClick={<Dialog open={openLoginModal}></Dialog>}
>>>>>>> finished tabs
      />
      <Button
        label='About Team'
        raised
<<<<<<< HEAD
        theme={['secondaryBg', 'onSecondary']}
        //onClick 하면 About Team 페이지가 나오도록
        onClick={toAboutTeam}
=======
        theme={["secondaryBg", "onSecondary"]}
        //onClick 하면 About Team 페이지가 나오도록
        //onClick={}
>>>>>>> finished tabs
      />
    </div>
  );
};

export default About;
