import React, { useState, useEffect } from "react";
import logo from "./CoEdify-logo.png";
import { ImCross } from "react-icons/im";
import { useWindowScroll } from "react-use";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-dropdown/style.css";
import { NavLink, useHistory } from "react-router-dom";
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

  const history = useHistory();
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
          <NavLink exact to="/" activeclassname="active">
            <img onClick={handleClose} src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <ImCross /> : <GiHamburgerMenu />}
        </div>
        <ul className={clicked ? "menu-list active" : "menu-list close"}>
          <li onClick={handleClose}>
            <NavLink
              className={visible ? "anchorActive" : "anchor"}
              exact
              to="/whyus"
              activeclassname="active"
            >
              Why us?
            </NavLink>
          </li>
          <li onClick={handleClose}>
            <Link
              onClick={handleClose}
              activeclass="active"
              className={visible ? "anchorActive" : "anchor"}
              exact
              to="howWeWork"
            >
              How We Work?
            </Link>
          </li>
          <li onClick={handleClose}>
            <NavLink
              className={visible ? "anchorActive" : "anchor"}
              exact
              to="/vettingprocess"
              activeclassname="active"
            >
              Vetting Process
            </NavLink>
          </li>
          <li onClick={handleClose}>
            <Link
              onClick={handleClose}
              className={visible ? "anchorActive" : "anchor"}
              exact
              to="techStack"
              activeclassname="active"
            >
              Tech Stack
            </Link>
          </li>
          <li onClick={handleClose} className="li_btn btn__hire">
            <Link
              exact
              to="service"
              onClick={() => history.push("./hiredev")}
              activeclassname="active"
            >
              Hire Developers
            </Link>
          </li>
          <li onClick={handleClose} className="li_btn btn__applyDev">
            <Link
              exact
              to="applyasdev"
              onClick={() => history.push("./applyasdev")}
              activeclassname="active"
            >
              Apply as a Developer
            </Link>
          </li>
        </ul>

        <div className="btns">
          <span className="btn__hire" onClick={() => history.push("./hiredev")}>
            Hire Developers
          </span>
          <span
            className="btn__applyDev"
            onClick={() => history.push("./applyasdev")}
          >
            Apply as a Developer
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
