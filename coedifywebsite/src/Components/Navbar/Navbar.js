import React, { useState } from "react";
import logo from "./CoEdify-logo.png";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
 

  const handleClick = () => {
    setClicked(!clicked);
  };
  const options = [
    'ReactJs', 'Angular', 'Flutter'
  ];
  

  return (
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
          <NavLink exact to="/" activeClassName="active">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            About us
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Testimonial
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
         
          <Dropdown options={options} value="Technology" placeholder="Select an option"/>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
          Lets Begin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
