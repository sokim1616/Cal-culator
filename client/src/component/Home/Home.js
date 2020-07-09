import React from "react";
import "./Home.scss";
import "@rmwc/typography/styles";
import github from "./github.png";
import facebook from "./facebook.png";
import insta from "./instagram.png";

const Home = () => {
  // const [trivia, setTrivia] = useState("");
  // useEffect(() => {
  //   axios.get("http://localhost:4000/food/foodtrivia").then((result) => {
  //     setTrivia(result.data);
  //   });
  // }, []);
  return (
    <div className='home'>
      <ul>
        <li>
          <div className='calculator'>
            <p className='cloud-text cloud-title'>
              CAL-
              <br />
              CULATOR!
            </p>
          </div>
        </li>
        <li>
          <div className='perspective-text'>
            <div className='perspective-line'>
              <p></p>
              <p className='nth-a'>A web application</p>
            </div>
            <div className='perspective-line'>
              <p>a web application</p>
              <p>that calculates</p>
            </div>
            <div className='perspective-line'>
              <p>that calculates</p>
              <p>your daily</p>
            </div>
            <div className='perspective-line'>
              <p>your daily</p>
              <p>food intake</p>
            </div>
            <div className='perspective-line'>
              <p className='nth-a'>food intake</p>
              <p></p>
            </div>
          </div>
        </li>
        {/*<li>
          <div className='trivia'>
            <p use='headline1' className='home__text homeTrivia'><span className='home__text triviaTitle'>Did you know...?</span><br /><span className='home__text triviaContent'>{trivia}</span></p>
          </div>
        </li>*/}
        <li className='sns'>
          <div>
            <img className='github' src={github} alt='github' />
          </div>
          <div>
            <img className='facebook' src={facebook} alt='facebook' />
          </div>
          <div>
            <img className='insta' src={insta} alt='insta' />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
