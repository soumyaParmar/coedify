import React, { useState, useEffect } from "react";
import logo from "./CoEdify-logo.png";
import { ImCross } from "react-icons/im";
import { useWindowScroll } from "react-use";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-dropdown/style.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.css";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClose = () => {
    setClicked(false);
  };

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (pageYOffset > 400) setVisible(true);
    else setVisible(false);
  }, [pageYOffset]);

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
      <nav className={visible ? "navSecondary" : "nav"}>
        <div className="logo">
          <NavLink exact to="/" activeClassName="active">
            <img onClick={handleClose} src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <ImCross /> : <GiHamburgerMenu />}
        </div>
        <ul className={clicked ? "menu-list active" : "menu-list close"}>
          <li onClick={handleClose}>
            <NavLink exact to="/whyus" activeClassName="active">
              Why us?
            </NavLink>
          </li>
          <li onClick={handleClose}>
            <NavLink activeClass="active" exact to="aboutUs" smooth={true}>
              How We Work?
            </NavLink>
          </li>
          <li onClick={handleClose}>
            <NavLink exact to="/vettingprocess" activeClassName="active">
              Vetting Process
            </NavLink>
          </li>
          <li onClick={handleClose}>
            <NavLink exact to="service" smooth={true} activeClassName="active">
              Tech Stack
            </NavLink>
          </li>
          <li onClick={handleClose} className="li_btn btn__hire">
            <Link exact to="service" smooth={true} activeClassName="active">
              Hire Developers
            </Link>
          </li>
          <li onClick={handleClose} className="li_btn btn__applyDev">
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
