import React from "react";
import "./How.css";
import First from "./first.svg";
import Second from "./Second__step.svg";
import Third from "./bytheroad.svg";
import Fourth from "./Fourth__step.svg";
import Hirebutton from "../Buttons/Hirebutton";

function How() {
  return (
    <>
      <div id="howWeWork" ></div>
      <div className="how">
        <h1 className="how__mainHeading">How We Work?</h1>
        <div className="how1">
          <div className="how1__left">
            <h1 className="how__heading">
            Collaborative Exploration of Requirements            
            </h1>
            <p className="how__para">
            Understanding Your Vision: We start by engaging in detailed discussions 
            with our clients to comprehend their specific requirements, objectives, 
            and challenges.
            </p>
            <div className="how__hirebutton">
              <Hirebutton title="Contact Us" />
            </div>
          </div>
          <div className="how1__right">
            <img src={First} alt="imag" />
          </div>
        </div>
        <div className="how2">
          <div className="how2__left">
            <img src={Second} alt="img2" />
          </div>
          <div className="how2__right">
            <h1 className="how__heading">
            In-Depth Research and Development
            </h1>
            <ul>
              <li>
                <i className="bi bi-check-all"></i>
                We leverage our technical expertise to conduct rigorous research 
                and development (R&D) to understand the engineering challenges faced 
                by your product.
              </li>
            </ul>
          </div>
        </div>
        <div className="how3">
          <div className="how3__left">
            <h1 className="how__heading">
            Tailored Roadmap
            </h1>
            <ul>
              <li>
              Based on our research and analysis, we provide you with a 
              detailed roadmap outlining step-by-step solutions and strategies 
              to overcome bugs and issues.
              </li>
            </ul>
          </div>
          <div className="how3__right">
            <img src={Third} alt="img3" />
          </div>
        </div>
        <div className="how2">
          <div className="how2__left">
            <img src={Fourth} alt="img4" />
          </div>
          <div className="how2__right">
            <h1 className="how__heading"> Scalability and Future-Proofing </h1>
            <p className="how__para">
            Our solutions are designed with scalability and future enhancements 
            in mind, ensuring your IT systems remain adaptable and efficient.
            </p>
            {/* <button onClick={executeScroll}>sample</button> */}
            <div className="how__hirebutton">
              <Hirebutton title="Contact Us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default How;
