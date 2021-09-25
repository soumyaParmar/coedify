import React from "react";
import { useHistory } from "react-router-dom";
// import Testimonial from "../Testimonials/Testimonial";
// import HeroImage from "./hero-image.svg";
// import Testimonial from "../Testimonials/Testimonial";
import "./hero.css";

import Testimonial from "../Testimonials/Testimonial";
import Test from "../Testimonials/Test";

function Hero() {
  let history = useHistory();
  return (
    <>
      <div className="hero__cover">
        <div className="hero">
          <div className="hero__left">
            <h1 className="hero__heading">
              Expand your team quickly, hire vetted developers.
            </h1>
            <span className="hero__desc">
              We are engineers, we know the pain of hiring tech talents that
              fits the job requirement. Accelerate your hiring process, reduce
              recruitment and training costs by onboarding pre-screened trained
              and tested developers specific to your needs.
            </span>
            <div className="buttons">
              <span
                className="btn__getDeveloper"
                onClick={() => history.push("./hiredev")}
              >
                Hire Developers
              </span>
              <span
                className="btn__apply"
                onClick={() => history.push("./applyasdev")}
              >
                Apply as a Developer
              </span>
            </div>
          </div>
          <div className="hero__right">
            <Testimonial />
          </div>
        </div>
      </div>
      <div className="comapnies">
        <div className="trustedby">
          <h3 className="trust__heading">Our developers are working here</h3>
        </div>
        <div className="companies__carousel">
          <Test />
        </div>
      </div>
    </>
  );
}

export default Hero;
