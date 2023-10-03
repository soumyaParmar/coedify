import React from "react";
import { useHistory } from "react-router-dom";
// import Testimonial from "../Testimonials/Testimonial";
// import HeroImage from "./hero-image.svg";
// import Testimonial from "../Testimonials/Testimonial";
import "./hero.css";
import Background from "../background/Background";
import Testimonial from "../Testimonials/Testimonial";
import Test from "../Testimonials/Test";

function Hero() {
  let history = useHistory();
  return (
    <div className="hero_back"> 
    <div className="hero_backcontainer"> 
      <div className="hero__cover">
        <div className="hero">
          <div className="hero__left">
            <h1 className="hero__heading">
            Crafting Future Solutions
            </h1>
            <h2>

            </h2>
            <p className="hero__desc">
              Discover cutting-edge software solutions at CoEdify. 
              We specialize in engineering excellence, performance optimization,
               and cost savings.
            </p>
            <div className="buttons">
            <a href="mailto:contact@coedify.com" target="_blank">
              <span className="btn__getDeveloper">
              Contact Us
              </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="comapnies">
        <div className="trustedby">
          <h3 className="trust__heading">Our developers are working here</h3>
        </div>
        <div className="companies__carousel">
          <Test />
        </div>
      </div> */}
      </div> 
    </div>
  );
}

export default Hero;
