import React from "react";
import logo from "../Navbar/CoEdify-logo.png";
// import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaInbox,
  FaBlenderPhone,
  FaFacebook,
  FaLinkedinIn,
  FaTwitter,
  FaHome,
} from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <div className="footer__main">
      <div className="footer">
        <div className="footer__description">
          <div className="description__logo">
            <img src={logo} alt="" />
          </div>
          <div className="description__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="description__links">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>
        <div className="footer__explore">
          <h3>Explore</h3>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>About</span>
            </li>
            <li>
              <span>Services</span>
            </li>
            <li>
              <span>Portfolio</span>
            </li>
            <li>
              <span>Team</span>
            </li>
          </ul>
        </div>
        <div className="footer__quicklinks">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <span>Contact Us</span>
            </li>
            <li>
              <span>Pricing</span>
            </li>
            <li>
              <span>Faq</span>
            </li>
            <li>
              <span>Privacy Policy</span>
            </li>
            <li>
              <span>Terms & Conditions</span>
            </li>
          </ul>
        </div>
        <div className="footer__getintouch">
          <h3>Get in Touch</h3>
          <ul>
            <li>
              <i>
                <FaHome />
              </i>
              <span>
                C-89 , Third Floor Sector-2 , Noida , 201301 Uttar Pradesh
              </span>
            </li>
            <li>
              <i>
                <FaBlenderPhone />
              </i>
              <span>+91 9258433304</span>
            </li>
            <li>
              <i>
                <FaInbox />
              </i>
              <span>coedify@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <span>© Copyright CoEdify Technology. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
