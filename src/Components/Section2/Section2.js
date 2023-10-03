import React from "react";
import "./section2.css";
import logo2 from "./assets/consulting.jpg"
import logo3 from "./assets/cloud.jpg"
import logo4 from "./assets/application.jpg"
import logo5 from "./assets/skilled.jpg"
import logo6 from './assets/scalability.jpg'
import logo1 from './assets/product.jpg'
import Test from "../Testimonials/Test";

const Section2 = () => {
  return (
    <div>
      <div className="comapnies">
        <div className="trustedby">
          <h3 className="trust__heading">Our <br/>Trusted<br/> Partners</h3>
        </div>
        <div className="companies__carousel">
          <Test />
        </div>
      </div>
    
    <div className="sec2">
      <h1 className="heading">Digital Advancement Offerings</h1>
      <div className="section2">
        <Box
          title="Product Engineering"
          url={logo1}
        />
        <Box
          title="Software Consulting Services"
          url={logo2}
        />
        <Box
          title="Cloud Infrastructure Optimization"
          url={logo3}
        />
        <Box
          title="Application Development"
          url={logo4}
        />
        <Box
          title="On Demand Skilled Developers"
          url={logo5}
        />
        <Box title="System Scalability " url={logo6} />
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
        <div className="sec2Box__content">
          <p className="sec2__para">{title}</p>
        </div>
      </div>
    </>
  );
}
