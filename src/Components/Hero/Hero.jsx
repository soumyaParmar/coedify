import React from "react";
import wave from "./wave.png";
import "./hero.css";
// import How from "../How/How";
function Hero() {
  return (
    <>
      <img className="wave" src={wave} alt="wave" />

      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__heading">Expand your team quickly, hire vetted developers.  </h1>
          <span className="hero__desc">
          We are engineers, we know the pain of hiring tech talents that fits the job requirement. Accelerate your hiring process, reduce recruitment and training costs by onboarding pre-screened trained and tested developers specific to your needs.   
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
