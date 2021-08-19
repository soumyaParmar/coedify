import React, { useState } from "react";
import logo from "./CoEdify-logo.png";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
// import Dropdown from "react-dropdown";  
import "react-dropdown/style.css";
import {  NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
    <div className="banner">
      Checkout our Mentorship program
      <button class="register">
           <a href="https://www.coedify.com/" target="_"> <span>Learn More</span></a>
          </button>
    
    </div>
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? <ImCross /> : <GiHamburgerMenu />}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <Link exact to="aboutUs" smooth={true} activeClassName="active">
            About us
          </Link>
        </li>
        <li>
          <Link exact to="service" smooth={true} activeClassName="active">
            Services
          </Link>
        </li>
       
        <li>
          <NavLink exact to="/" activeClassName="active">
            Hire From Us
          </NavLink>
        </li>
        <li>
          <Link exact to="testimonial" smooth={true} activeClassName="active">
            Testimonial
          </Link>
        </li>
        <li>
            <NavLink exact to="technology"activeClass="active">Technology</NavLink>
        </li>
        <li>
          <NavLink exact to="/contactus" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
        
      </ul>
    </nav>
    </>
  );
};

export default Navbar;
