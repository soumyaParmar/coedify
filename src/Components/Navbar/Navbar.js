import React, { useState, useEffect } from "react";
import logo from "./CoEdify-logo.png";
import { ImCross } from "react-icons/im";
import { useWindowScroll } from "react-use";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-dropdown/style.css";
import { Link as NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const style = {
    position: "absolute",
    top: "15px",
    right: "35px",
    color: "white",
  };
  const handleClose = () => {
    setClicked(false);
  };

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (pageYOffset > 50) setVisible(true);
    else setVisible(false);
  }, [pageYOffset]);

  return (
    <>
      <nav className={visible ? "navSecondary" : "nav"}>
        <div className="logo">
          <NavLink exact="true" to="/" activeclassname="active">
            <img onClick={handleClose} src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className="menu-icon" onClick={handleClick}>
          {clicked ? (
            <ImCross style={style} />
          ) : (
            <GiHamburgerMenu style={style} />
          )}
        </div>
        <ul className={clicked ? "menu-list active" : "menu-list close"}>
          <li className="l2">
            <NavLink onClick={handleClose} exact="true" to="/#howWeWork">
              How we work
            </NavLink>
          </li>
          <li onClick={handleClose} className="l2">
            <NavLink exact="true" to="/services" activeclassname="active">
              Services
            </NavLink>
          </li>
          {/* <li className="l2">
            <NavLink onClick={handleClose} exact="true" to="/#techStack">
              Our Team
            </NavLink>
          </li> */}
          {/* <li onClick={handleClose} className="l2">
            <NavLink
              className={visible ? "anchorActive" : "anchor"}
              exact="true"
              to="whyus"
              activeclassname="active"
            >
              Why Choose Us
            </NavLink>
          </li> */}
          <li className="l2">
            <NavLink onClick={handleClose} exact="true" to="/about">
              About Us
            </NavLink>
          </li>
          {/* <li className="l2">
            <NavLink onClick={handleClose} exact="true" to="/blogs">
              Case Studies
            </NavLink>
          </li> */}
        </ul>

        <div className="btns">
          <NavLink to="/#foot">
            <span className="btn__hire">Contact Us</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
