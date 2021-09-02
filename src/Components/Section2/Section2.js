import React from "react";
import urban from "./urban-852.png";
import certificate from "./certificate.png";
import logooo from "./logooo.png";
import fire from "./fireball.png";
import contact from "./contact.png";
import "./section2.css";

const Section2 = () => {
  return (
    <div className="sec2">
      <h1 className="heading">On Demand Amazing Developers</h1>
      <div className="hero2">
        <div className="hero2__left">
          <div className="boxes1">
            <Box
              url={fire}
              desc="Hire for proven skills train by us, rated by us"
            />
            <Box
              url={certificate}
              desc="Every candidate you hire is a level above from others"
            />
          </div>
          <div className="boxes2">
            <Box
              url={contact}
              desc="Meet the right fit for your company here"
            />
            <Box url={logooo} desc="Access the diverse pool of talents here" />
          </div>
        </div>
        <div className="hero2__right">
          <img src={urban} alt="urban" />
        </div>
      </div>
    </div>
  );
};

export default Section2;

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
