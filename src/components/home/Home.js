import React from "react";
import "./home.css";
import Navbar from "../Navbar";
import HeroImg from "../home/HeroImg";
import Footer from "../footer/Footer";
import Testimonials from "../testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HeroImg />
      <div className="home-text">
        <p>
          We Help Enterprise Businesses With Creative Ideas Stand Out And
          Succeed By Helping Them In Their Digital Transition Through Our
          Services. As a digital marketing agency, we strive to understand our
          client’s business goals first. Then all decisions are made with those
          goals in mind.
        </p>
        <p>
          A shiny new website is worthless if it doesn’t help you reach your
          goals. You talk, we listen… then we throw in lots of ideas for
          improvement. We create a modern platform that enables millions to
          build a brand, share their stories, and transact with their customers
          in an impactful and beautiful online presence. Our creative team of
          designers and engineers are result-oriented and work in tandem. You
          can trust our team to deliver the goods.
        </p>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
