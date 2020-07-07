import React, { useState, useEffect } from "react";
import "./Home.css";
import "@rmwc/typography/styles";
import { Typography } from "@rmwc/typography";
import axios from "axios";

const Home = () => {
  const [trivia, setTrivia] = useState("");
  useEffect(() => {
    axios.get("http://localhost:4000/food/foodtrivia").then((result) => {
      setTrivia(result.data);
    });
  }, []);
  return (
    <div>
      <div>
        <nav className='nav'>
          <div className='title'>Cal-culator</div>
          <Typography use='headline1' className='desc'>
            a web application that calculates your daily food intake.
          </Typography>
          <Typography use='headline2' className='trivia'>
            {trivia}
          </Typography>

          <header className='header'></header>
        </nav>
        <main>
          <div></div>
        </main>
      </div>
    </div>
  );
};

export default Home;
