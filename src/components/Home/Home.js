import "./Home.css";

import logoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={logoTitle} alt="developer" />
          athan
          <br />a full stack developer
        </h1>
        <h2>Full Stack Developer / UNSW Student</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};
