// import React from 'react';

// const MainPage = () => {
//     const [, setIsOpen] = React.useState(false);

//     function openModal() {
//         setIsOpen(true);
//     }

//     return (
//         <div>
//             <button onClick={}>close</button>
//             <div>E-mail:</div>
//             <form>
//                 <input type="email" />
//             </form>
//             <div>Password:</div>
//             <form>
//                 <input type="password" />
//                 <button onClick={loginState}>Get in!</button>
//             </form>
//         </div>
//     )
// }

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <nav className="nav">
                <h2 className="title">Cal-culator</h2>
                <div className="desc">
                    a web application that calculates your daily food intake.
                </div>
                <ul className="subdesc">
                    Some of its features:
                    <li>
                        Creates an archive to visulaize your calorie intake history
                    </li>
                    <li>
                        Recommend a diet plan based on your nutrition status
                    </li>
                </ul>
                <header className="header"></header>
            </nav>
            <main>
                <div>
                </div>
            </main>
        </div>
    );
}

export default MainPage;