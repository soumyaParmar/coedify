import React from "react";
import "./ProgramPageHeader.css";
import headerImage from "../../assets/pixeltrue-web-development-1.svg";
import Hirebutton from "../Buttons/Hirebutton";
// import { motion } from "framer-motion";

const ProgramPage = () => {
  return (
    <section className="header-section">
      <div className="headerSection__left">
        <div className="headerLeft__heading">
          <h1>CoEdify Mentorship Program</h1>
        </div>
        <div className="headerLeft__para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            interdum malesuada in mi ultrices volutpat phasellus natoque. Vitae
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            interdum malesuada in mi ultrices volutpat phasellus natoque. Vitae
            viverra etiam viverra cursus urna facilisis mi elit. Turpis iaculis
            vulputate a pellentesque egestas.
          </p>
        </div>
        <div>
          <Hirebutton title="Hire Developer" />
        </div>
      </div>
      <div className="headerSection__right">
        <img className="headerRightImg" src={headerImage} alt="headerImg" />
      </div>
    </section>
  );
};

export default ProgramPage;
