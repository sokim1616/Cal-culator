import React, { useState, useEffect } from "react";
import './Home.scss';
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
    <div className='home'>
      <ul>
        <li>
          <Typography use='headline1' className='home__text homeTitle'><br /><span>Cal-culator</span></Typography>
          <Typography use='headline1' className='home__text homeDesc'>
            A web application that calculates <br /> Your daily food intake!!
          </Typography>
        </li>

        <div>
          <Typography use='headline1' className='home__text homeTrivia'><span>Food Trivia</span><br/> {trivia}</Typography>
        </div>
        <div>
          <Typography use='headline1' className='home__text homeTrivia'><span>Food Trivia</span><br/> {trivia}</Typography>
        </div>
      </ul>
    </div>
  );
};

export default Home;