import React from "react";
import "./section2.css";
import Test from "../Testimonials/Test";
import img1 from "../../pages/Vetted/third.svg";
import img2 from "../../pages/Vetted/perf.svg";
import img3 from "../../pages/Vetted/fourth.svg";
import img4 from "../../pages/Vetted/expDev.svg";
import img5 from "../../pages/Vetted/engineer.svg";
import img6 from "../../pages/Vetted/audit.svg";

const Section2 = () => {
  return (
    <div>
      <div className="comapnies">
        <div className="trustedby">
          <h3 className="trust__heading">
            Our <br />
            Trusted
            <br /> Partners
          </h3>
        </div>
        <div className="companies__carousel">
          <Test />
        </div>
      </div>

      <div className="sec2">
        <h1 className="heading">Digital Advancement Offerings</h1>
        <div className="section2">
          <Box title="Cloud Cost optimization" url={img1} />
          <Box title="AI Integration" url={img2} />
          <Box title="Dedicated Experienced Developers" url={img3} />
          <Box title="Complex System Design and Development" url={img4} />
          <Box
            title="Legacy System Redesign and Performance Enhancement"
            url={img5}
          />
          <Box title="Comprehensive System Audit" url={img6} />
        </div>
      </div>
    </div>
  );
};

export default Section2;

function Box({ title, url }) {
  return (
    <>
      <div className="sec2__Box">
        <div className="sec2Box__logo">
          <img className="sec2__img" src={url} alt="logo" />
        </div>
        <div className="black_layer1"></div>
        <div className="sec2Box__content">
          <p className="sec2__para">{title}</p>
        </div>
      </div>
    </>
  );
}
