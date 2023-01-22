import React from "react";
import "./HeroImgStyles.css";
import Hero from "../../images/c1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  const handleRedirect = () => {
    window.scrollY = 0;
  };
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Hero} alt="hero" />
      </div>
      <div className="content">
        <p>We are a Social Media Marketing Agency</p>
        <h1>We Help Organisations in Building Brands!</h1>
        <div>
          {/* <Link to="/projects" className="btn">
            Projects
          </Link> */}
          <Link to="/contact" className="btn" onClick={handleRedirect}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
