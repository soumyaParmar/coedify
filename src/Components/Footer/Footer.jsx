import React from "react";
import logo from "../Navbar/CoEdify-logo.png";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  return (
    <div className="footer__main" id="foot">
      <div className="footer">
        <div className="footer__description">
          <div className="description__logo">
            <img src={logo} alt="" />
          </div>
          <div className="description__text">
            At CoEdify, we take immense pride in being your trusted partner in
            achieving your goals and exceeding your expectations. Our unwavering
            commitment to excellence is reflected in every facet of our
            services. With a track record of successfully resolving complex
            engineering challenges and optimizing software systems.
          </div>
        </div>
        <div className="footer__explore">
          <h3 style={{ color: "wheat" }}>Explore</h3>
          <ul className="ul">
            <li onClick={() => history.push("/")}>
              <span>Home</span>
            </li>
            <li onClick={() => history.push("/about")}>
              <span>About Us</span>
            </li>
            <li onClick={() => history.push("/services")}>
              <span>Services</span>
            </li>
            <li onClick={() => history.push("/#howWeWork")}>
              <span>How We Work</span>
            </li>
          </ul>
        </div>

        <div className="footer__getintouch">
          <h3 style={{ color: "wheat" }}>Get in Touch</h3>
          <ul className="ul">
            <li>
              <i>
                <FaHome />
              </i>
              <span>
                C-89 , Second Floor Sector-2 , Noida , 201301 Uttar Pradesh
              </span>
            </li>
            <li>
              <i>
                <FaBlenderPhone />
              </i>
              <span>+91 7834906274</span>
            </li>
            <li>
              <i>
                <FaInbox />
              </i>
              <span>contact@coedify.com</span>
            </li>
          </ul>
        </div>
        <div className="footer__quicklinks">
          <h3 className="quick__heading" style={{ color: "wheat" }}>
            Quick Links
          </h3>
          <div className="description__links">
            <a
              target="blank"
              href="https://www.instagram.com/coedifytechnology"
            >
              <FaInstagram />
              <span>Follow us on Instagram</span>
            </a>
            <a target="blank" href="https://www.facebook.com/coedifytechnology">
              <FaFacebook />
              <span>Like our Facebook Page</span>
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/company/coedify/mycompany/?viewAsMember=true"
            >
              <FaLinkedinIn />
              <span>Connect on LinkedIn</span>
            </a>
            <a target="blank" href="https://twitter.com/CoEdifyTech">
              <FaTwitter />
              <span>Follow on Twitter</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <span>© Copyright CoEdify Technology. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
