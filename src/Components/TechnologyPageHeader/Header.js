import React from "react";
import "./Header.css";
import Hirebutton from "../Buttons/Hirebutton";

const Header = ({ title, description, image }) => {
  return (
    <div className="header-parent-container">
      <div className="header-left-container">
        <h1 className="header-left-heading">Hiring {title} on CoEdify</h1>
        <p className="header-left-desc">{description}</p>
        <div className="mybtn">
          <Hirebutton title="Hire Developers" />
        </div>
      </div>

      <div className="header-right-container">
        <img className="img" src={image} alt="logo here" />
      </div>
    </div>
  );
};

export default Header;
