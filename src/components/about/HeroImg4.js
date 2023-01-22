import React from "react";
import "./HeroImgStyles4.css";
import Hero from "../../images/h3.jpg";
import { Link } from "react-router-dom";

const HeroImg4 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Hero} alt="hero" />
      </div>
      <div className="content">
        {/* <p>Hi, I'm a freelancer</p> */}
        <h1>Who are we?</h1>
        <div>
          {/* <Link to="/projects" className="btn">
            Projects
          </Link> */}
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg4;
