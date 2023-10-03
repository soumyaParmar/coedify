import React from "react";
import Hirebutton from "../../Components/Buttons/Hirebutton";
import "./whyus.css";
import img1 from "./whyus_1.svg";
import img3 from "./whyus_3.svg";
import img4 from "./whyus_4.svg";
import img5 from "./whyus_5.svg";
import img6 from "./whyus_6.svg";
// import { useLocation } from "react-router-dom";

import Gradient from "../../Components/Gradient/Gradient";

import HeaderImg from "./whyus-header-image.svg";
import Transition from "../../Components/Tranistion/Transition";

function WhyUs() {
  // const path = useLocation();
  // console.log(path);

  return (
    <Transition>
    <div className="why__main">
      <div className="whyus">
        <div className="whyus__left">
          <span className="whyus__span">Why Choose Us?</span>
          <h1 className="whyus__heading">
          Empowering Your Vision through CoEdify
          </h1>
          <p className="whyus__p">
          At CoEdify, we take immense pride in being your trusted partner in achieving 
          your goals and exceeding your expectations. Our unwavering commitment to 
          excellence is reflected in every facet of our services
          </p>
          <div className="whyus__button">
            <Hirebutton title="Contact Us" />
          </div>
        </div>
        <div className="whyus__right">
          <img className="whyus__img" src={HeaderImg} alt="headerImg" />
        </div>
      </div>
      <div className="whycodeify">
        <h1 className="whycoedify__heading">Why CoEdify</h1>
        <div className="whycoedify1">
          <div className="whycoedify1__left">
            <img className="whycoedify__img" src={img1} alt="img1" />
          </div>
          <div className="whycoedify1__right">
            <h1>Transparent and Client-Centric Approach</h1>
            <p>
            We prioritize transparency in all aspects of our work, from billing 
            to project timelines. Our client-centric approach means that your goals 
            and needs are at the forefront of every solution we provide.
            </p>
          </div>
        </div>
        <div className="whycoedify2">
          <div className="whycoedify2__left">
            <h1>Proven Track Record</h1>
            <p>
            With a track record of successfully resolving complex engineering 
            challenges and optimizing software systems, we have a history of 
            delivering measurable results to our clients. 
            </p>
          </div>
          <div className="whycoedify2__right">
            <img className="whycoedify__img" src={img3} alt="img1" />
          </div>
        </div>
        <div className="whycoedify3">
          <div className="whycoedify3__left">
            <img className="whycoedify__img3" src={img4} alt="img1" />
          </div>
          <div className="whycoedify3__right">
            <h1>Expertise in Cloud Optimization</h1>
            <p>
            Our expertise in cloud and infrastructure cost optimization sets 
            us apart. We've helped numerous clients reduce their cloud expenses 
            while maintaining or improving system performance. 
            </p>
          </div>
        </div>
        <div className="whycoedify4">
          <div className="whycoedify4__left">
            <h1>Customized Solutions</h1>
            <p>
            Every client's needs are unique. We provide tailored solutions 
            that address your specific challenges and goals, ensuring you 
            receive the most effective and efficient services. 
            </p>
          </div>
          <div className="whycoedify4__right">
            <img className="whycoedify__img" src={img5} alt="img1" />
          </div>
        </div>
        <div className="whycoedify5">
          <div className="whycoedify5__left">
            <img className="whycoedify__img" src={img6} alt="img1" />
          </div>
          <div className="whycoedify5__right">
            <h1>Complimentary Service Period</h1>
            <p>
            We stand by our abilities, offering a complimentary service period 
            during which we demonstrate our value with tangible improvements to 
            your software and infrastructure. 
            </p>
          </div>
        </div>
      </div>
    </div>
    </Transition>
  );
}

export default WhyUs;
