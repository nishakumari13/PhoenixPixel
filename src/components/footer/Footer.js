import React from "react";
import "./footer.css";
import { FaHome } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-contanier">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Sunil Complex, New Cable Town</p>
              <p>Near Shiv Mandir</p>
              <p>Golmuri, Jamshedpur-831003</p>
            </div>
          </div>

          <h4>
            <BsTelephone
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            +91 97712 63727
          </h4>

          <h4>
            <HiOutlineMail
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            phoenixpixeltechnologies@gmail.com
          </h4>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Phoenix Pixel Technologies is a Digital Marketing & Media
            Partnership Company.
          </p>
          <div className="social">
            <BsWhatsapp
              size={25}
              style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
              className="leet-icons"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100089342196032"
                )
              }
            />
            <BsInstagram
              size={25}
              style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
              className="code-icons"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/phoenix.pixel.tech0612/?igshid=YmMyMTA2M2Y%3D"
                )
              }
            />
            <HiOutlineMail
              size={30}
              style={{ color: "#fff", marginRight: "2rem", cursor: "pointer" }}
              className="mail-icons"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=phoenixpixeltechnologies@gmail.com"
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="info">
          Designed & Built by Pheonix Pixel Technologies
        </div>
        <div className="info">
          <AiOutlineCopyrightCircle />
          <p>2023 All Rights Reserved</p>
        </div>
        <div className="stars">
          <AiOutlineStar />
        </div>
      </div>
    </div>
  );
};

export default Footer;
