import React from "react";
import './Home.scss';
import "@rmwc/typography/styles";
import { Typography } from "@rmwc/typography";

const Home = () => {
  return (
    <div className='home'>
      <ul>
        <li>
          <Typography use='headline1' className='home__text homeTitle'><br /><span>Cal-culator</span></Typography>
          <Typography use='headline1' className='home__text homeDesc'>
            A web application that calculates <br /> Your daily food intake!!
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default Home;


// <ul className='subdesc'>
//             Some of its features:
//             <li>Creates an archive to visulaize your calorie intake history</li>
//             <li>Recommend a diet plan based on your nutrition status</li>
//           </ul>

// <div className='home'>
//       <ul>
//         <Typography use='headline1' className='home__title'><br />Cal-culator</Typography>
//         <li>
//           <Typography use='headline1' className='home__desc'>
//             A web application that calculates <br /> Your daily food intake!!
//           </Typography>
//         </li>
//       </ul>
//     </div>