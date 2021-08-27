import React from "react";
import img from "./hero__img.jpg";
import wave from "./wave.png";
import certificate from "./certificate.png";
import logooo from "./logooo.png"
import fire from "./fireball.png"
import "./hero.css";
import contact from "./contact.png"
function Hero() {
  return (
    <>
    <img className="wave" src = {wave} alt="wave"/>
      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__heading">Get the Top Developers </h1>
          <span className="hero__desc">
            Although precise definitions of each engineering type may be hard to
            come by, we explain each engineering track based on our technical
            screening. As companies
          </span>
          <div className="buttons">
            <span className="btn__getDeveloper">Get Developers</span>
            <span className="btn__apply">Apply for Jobs</span>
          </div>
        </div>
        <div className="hero__right">
          <img src={img} alt="img" />
        </div>
      </div>
      <h1 className="heading">On Demand Amazing Developers</h1>
      <div className="hero2">
        <div className="hero2__left">
          <div className="boxes1">
            <Box url={fire} desc="Hire for proven skills train by us, rated by us" />
            <Box url={certificate} desc="Every candidate you hire is a level above from others" />
          </div>
          <div className="boxes2">
            <Box url={contact} desc="Meet the right fit for your company here" />
            <Box url={logooo} desc="Access the diverse pool of talents here" />
          </div>
        </div>
        <div className="hero2__right"></div>
      </div>
    </>
  
  );
}

export default Hero;

function Box(props) {
  return (
    <div className="box">
      <div className="box__logo">
        <img src={props.url} alt="logo" />
      </div>
      <div className="description">
        <p>{props.desc}</p>
      </div>
    </div>
  );
}
