import React from "react";
import pic1 from "./pic1.jpg";
import "./Header.css";
import Hirebutton from "../Buttons/Hirebutton";

const Header = ({ title, description }) => {
  return (
    <div className="header-parent-container">
      <div className="header-left-container">
        <h1>Hiring {title} Developer on CoEdify</h1>

        <p>{description}</p>
        <p className="mybtn">
          <Hirebutton />
        </p>
      </div>

      <div className="header-right-container">
        <img className="img" src={pic1} alt="logo here" />
      </div>
    </div>
  );
};

export default Header;
