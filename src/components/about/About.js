import React from "react";
import Navbar from "../Navbar";
import HeroImg4 from "../about/HeroImg4";
import Footer from "../footer/Footer";
import "./about.css";
import AboutPic from "../../images/ab.jpg";
import { BsPeopleFill } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { HiViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg4 />
      <section id="about">
        <section id="about">
          <h5>Get to know</h5>
          <h2>About me</h2>

          <div className="container about_container">
            <div className="about_me">
              <div className="about_me_image">
                <img src={AboutPic} alt="about-img" />
              </div>
            </div>

            <div className="about_content">
              <div className="about_cards">
                <article className="about_card">
                  <BsPeopleFill className="about_icon" />
                  <h5>Clients</h5>
                  <small>2+ Years Working</small>
                </article>

                {/* <article className="about_card">
                <FiUsers className="about_icon" />
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article> */}

                <article className="about_card">
                  <HiViewGrid className="about_icon" />
                  <h5>Projects</h5>
                  <small>10+ completed</small>
                </article>
              </div>
              <p>
                Phoenix Pixel Technologies is a Digital Marketing & Media
                Partnership Company. We analyze conversations which are taken
                from both public sources like social media and news, and private
                sources like emails and chats and analyzed through the tool and
                presented in the form of live interactive dashboards which
                generate actionable insights for various departments within an
                organization like Marketing, Customer Care, Corporate
                Communications, Sales, etc. It eventually helps to create a good
                social media presence and their by promoting the operations.
              </p>
              {/* <a href="#contact" className="btn btn-primary">
                Let's Talk
              </a> */}
              <Link to="/contact" className="btn">
                Let's Talk
              </Link>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default About;
