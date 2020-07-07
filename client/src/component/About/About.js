import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import { Snackbar, SnackbarAction } from "@rmwc/snackbar"
import '@rmwc/snackbar/styles'
import AboutTeam from "./AboutTeam";

const About = () => {
  const history = useHistory();

  const [flipped, setFlipped] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  function flipCard() {
    setFlipped(true);
  }

  function toAboutTeam() {
    history.push(`/AboutTeam`);
  }

  return (
    <div className='aboutButtons'>
      <Button
        label='About Project'
        raised
        theme={["secondaryBg", "onSecondary"]}
      //onClick 하면 About Project 페이지가 나오도록
      />
      <Button
        label='About Team'
        raised
        theme={["secondaryBg", "onSecondary"]}
        //onClick 하면 About Team 페이지가 나오도록
        onClick={toAboutTeam}
      />
      <div>
        <Snackbar
          open={open}
          onClose={evt => setOpen(false)}
          message="This is a new message"
          dismissesOnAction
          action={
            <SnackbarAction
              label="Dismiss"
              onClick={() => console.log('Click Me')}
            />
          }
        />

        <Button
          raised
          label="Show snackbar"
          onClick={evt => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default About;
