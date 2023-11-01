import React from "react";
import logo from "../Navbar/CoEdify-logo.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
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
            CoEdify is a platform where technology companies can find and expand
            their team by hiring vetted and highly skilled resources quickly. We
            also help developers to update their skill to meet the trending job
            markets. We aim to strike the balance between expectations set by
            both developers and technology companies.
          </div>
        </div>
        <div className="footer__explore">
          <h3 style={{ color: "wheat" }}>Explore</h3>
          <ul className="ul">
            <li onClick={() => history.push("/")}>
              <span>Home</span>
            </li>
            <li onClick={() => history.push("/whyus")}>
              <span>Why Us</span>
            </li>
            <li onClick={() => history.push("/vettingprocess")}>
              <span>Services</span>
            </li>
            <Link activeclass="active" exact="true" to="techStack">
              <li>
                <span>Tech Stack</span>
              </li>
            </Link>
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
              <span>+91 9258433304</span>
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
