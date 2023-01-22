import React, { useEffect } from "react";
import Navbar from "../Navbar";
import HeroImg2 from "../services/HeroImg2";
import Footer from "../footer/Footer";
import { TiTickOutline } from "react-icons/ti";
import "./service.css";

const Service = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 />
      <section id="services">
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className="container services_container">
          <article className="services">
            <div className="services_head">
              <h3>Website Development & Maintenance</h3>
            </div>

            <ul className="services_list">
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Responsive websites</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Browser compatibility</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Interactive user interface</p>
              </li>
            </ul>
          </article>

          <article className="services">
            <div className="services_head">
              <h3>Social Media Marketing</h3>
            </div>

            <ul className="services_list">
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Cinematic video graphy</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Influencer Marketing</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Social Media Management</p>
              </li>
            </ul>
          </article>

          <article className="services">
            <div className="services_head">
              <h3>SEO</h3>
            </div>

            <ul className="services_list">
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Target Marketing</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Leads Generation</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Advertisement run over on Insta & Facebook</p>
              </li>
              {/* <li>
                <TiTickOutline className="services_list_icon" />
                <p>Advertisement run over on Insta & Facebook</p>
              </li> */}
            </ul>
          </article>

          <article className="services">
            <div className="services_head">
              <h3>Logo Design</h3>
            </div>

            <ul className="services_list">
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Customised Logo</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>3D Logo Design</p>
              </li>
              <li>
                <TiTickOutline className="services_list_icon" />
                <p>Basic Logo</p>
              </li>
            </ul>
          </article>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Service;
