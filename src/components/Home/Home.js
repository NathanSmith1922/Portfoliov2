import "./Home.css";

import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>NATHAN SMITH</h1>
        <h2>Full Stack Developer / AI Software Engineer / UNSW Student</h2>

        <div className="navbar">
          <ul>
            <li>
              <Link to="/" className="nav-button">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-button">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-button">
                Contacts
              </Link>
            </li>
            <li className="resume-button">
              <Link to="/" className="nav-button">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
