import React from "react";
import "./HeroImgStyles3.css";
import Hero from "../../images/a2.jpg";
import { Link } from "react-router-dom";

const HeroImg3 = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Hero} alt="hero" />
      </div>
      <div className="content">
        <p>
          Contact us today for a free consultation. Tell us about your situation
          and we'll provide you with candid recommendations for online marketing
          services.
        </p>
        {/* <h1>React developer</h1> */}
        {/* <div>
          <Link to="/projects" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default HeroImg3;
