import React from "react";
import "./HeroImgStyles2.css";
import Hero from "../../images/p1.jpg";
import { Link } from "react-router-dom";

const HeroImg2 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Hero} alt="hero" />
      </div>
      <div className="content">
        {/* <p></p> */}
        <h1>What we do!</h1>
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

export default HeroImg2;
