import React from "react";
import wave from "./wave.png";
import "./hero.css";

function Hero() {
  return (
    <>
      <img className="wave" src={wave} alt="wave" />

      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__heading">Get the Top Developers </h1>
          <span className="hero__desc">
            Although precise definitions of each engineering type may be hard to
            come by, we explain each engineering track based on our technical
            screening. As companies.Although precise definitions of each
            engineering type may be hard to come by, we explain each engineering
            track based on our technical screening. As companies
          </span>
          <div className="buttons">
            <span className="btn__getDeveloper">Hire Developers</span>
            <span className="btn__apply">Apply as a Developer</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
