import React, { useState } from "react";
import logo from "./CoEdify-logo.png";
import { ImCross } from "react-icons/im";
// import {AiOutlineClose} from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi";
import "react-dropdown/style.css";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.css";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
      <div className="banner__left">
        <span> Checkout our Mentorship program</span>
      </div>
     <div className="banner__right">
      <button className="register">
           <a href="https://www.coedify.com/" target="_"> <span>Learn More</span></a>
          </button>
          </button>
          </div>
  <span className="banner__btn" type="button" data-bs-dismiss="alert" aria-label="Close"><AiOutlineClose/></span>
</div> */}
      {/* <div className="navbar"> */}
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <ImCross /> : <GiHamburgerMenu />}
        </div>
        <ul className={clicked ? "menu-list active" : "menu-list close"}>
          <li>
            <Link exact to="/" activeClassName="active">
              Why us?
            </Link>
          </li>
          <li>
            <Link activeClass="active" exact to="aboutUs" smooth={true}>
              How We Work?
            </Link>
          </li>
          <li>
            <Link exact to="/" activeClassName="active">
              Vetting Process
            </Link>
          </li>
          <li>
            <Link exact to="service" smooth={true} activeClassName="active">
              Tech Stack
            </Link>
          </li>
          <li className="li_btn btn__hire">
            <Link exact to="service" smooth={true} activeClassName="active">
              Hire Developers
            </Link>
          </li>
          <li className="li_btn btn__applyDev">
            <Link exact to="service" smooth={true} activeClassName="active">
              Apply as a Developer
            </Link>
          </li>
        </ul>

        <div className="btns">
          <span className="btn__hire">Hire Developers</span>
          <span className="btn__applyDev">Apply as a Developer</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
