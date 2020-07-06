import React from "react";

import { Button } from "@rmwc/button";
import "@rmwc/button/styles";
import { Dialog } from "@rmwc/dialog";
import "@rmwc/dialog/styles";

const About = ({ openLoginModal }) => {
  //const []

  return (
    <div className='aboutButtons'>
      <Button
        label="About Project"
        raised
        theme={['secondaryBg', 'onSecondary']}
        //onClick 하면 About Project 페이지가 나오도록
        onClick={
          <Dialog open={openLoginModal}></Dialog>
        }
      />
      <Button
        label="About Team"
        raised
        theme={['secondaryBg', 'onSecondary']}
      //onClick 하면 About Team 페이지가 나오도록
      //onClick={}
      />
    </div>
  );
};

export default About;


