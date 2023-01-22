import React from "react";
import Navbar from "../Navbar";
import HeroImg3 from "../contact/HeroImg3";
import Footer from "../footer/Footer";
import { HiOutlineMail } from "react-icons/hi";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg3 />
      <section id="contact">
        <div className="contact">
          <h5>Get In Touch</h5>
          <h2>Contact</h2>
        </div>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <HiOutlineMail className="contact_icon" />
              <h4>Whatsapp</h4>
              <h5>+91 97712 63727</h5>
              <a
                href="https://api.whatsapp.com/send?phone=+919771263727"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>

          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Enter your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />
            <input
              type="phone"
              name="phone"
              placeholder="Enter your Contact"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Write your message"
              required
            ></textarea>

            {/* <button type="submit" className="btn btn-primary"> */}
            <a
              href="mailto:nishu13nisi@gmail.com"
              target="_blank"
              className="btn btn-primary"
            >
              Send Message
            </a>
            {/* </button> */}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
