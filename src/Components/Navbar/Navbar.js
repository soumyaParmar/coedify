import React, { useState, useEffect } from "react";
import logo from "./CoEdify-logo.png";
import { ImCross } from "react-icons/im";
import { useWindowScroll } from "react-use";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-dropdown/style.css";
import { Link as NavLink, useHistory, useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import "./navbar.css";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const history = useHistory();
  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleClose = () => {
    setClicked(false);
  };

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (pageYOffset > 100) setVisible(true);
    else setVisible(false);
  }, [pageYOffset]);
  const [isHome, setHome] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [pathname]);
  return (
    <>
      <nav className={visible ? "navSecondary" : "nav"}>
        <div className="logo">
          <NavLink exact="true" to="/" activeclassname="active">
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
              exact="true"
              to="whyus"
              activeclassname="active"
            >
              Why us?
            </NavLink>
          </li>
          <li>
            {isHome ? (
              <Link
                onClick={handleClose}
                activeclass="active"
                className={visible ? "anchorActive" : "anchor"}
                exact="true"
                to="howWeWork"
              >
                How We Work
              </Link>
            ) : (
              <NavLink
                onClick={handleClose}
                exact="true"
                to="/"
                activeclassname="active"
              >
                How We Work
              </NavLink>
            )}
          </li>
          <li onClick={handleClose}>
            <NavLink
              className={visible ? "anchorActive" : "anchor"}
              exact="true"
              to="/vettingprocess"
              activeclassname="active"
            >
              Vetting Process
            </NavLink>
          </li>
          <li>
            {isHome ? (
              <Link
                onClick={handleClose}
                activeclass="active"
                className={visible ? "anchorActive" : "anchor"}
                exact
                to="techStack"
              >
                Tech Stack
              </Link>
            ) : (
              <NavLink
                onClick={handleClose}
                exact="true"
                to={{ pathname: "/", state: { from: "techStack" } }}
                activeclassname="active"
              >
                Tech Stack
              </NavLink>
            )}
          </li>
          <li onClick={handleClose} className="li_btn btn__hire">
            <Link
              exact="true"
              to="service"
              onClick={() => history.push("./hiredev")}
              activeclassname="active"
            >
              Hire Developers
            </Link>
          </li>
          <li onClick={handleClose} className="li_btn btn__applyDev">
            <Link
              exact="true"
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
