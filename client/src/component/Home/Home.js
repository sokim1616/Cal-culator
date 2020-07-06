import React from "react";
import "./Home.css";
import "@rmwc/typography/styles";
import { Typography } from "@rmwc/typography";

const Home = () => {
  return (
    <div>
      <div>
        <nav className='nav'>
          <div className='title'>Cal-culator</div>
          <div>
            <Typography use='headline1' className='desc'>
              a web application that calculates your daily food intake.
            </Typography>
          </div>

          <ul className='subdesc'>
            Some of its features:
            <li>Creates an archive to visulaize your calorie intake history</li>
            <li>Recommend a diet plan based on your nutrition status</li>
          </ul>
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
