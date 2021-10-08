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

function WhyUs() {
  // const path = useLocation();
  // console.log(path);

  return (
    <div className="why__main">
      <div className="whyus">
        <div className="whyus__left">
          <span className="whyus__span">Why Us</span>
          <h1 className="whyus__heading">
            Hire tech talents that fits the job requirements
          </h1>
          <p className="whyus__p">
            CoEdify helps companies expand their team quickly. Tech hiring is
            tough, time consuming and expensive. Most of the tech hirings are
            severely flawed and the cost of hiring bad resource is way too high.
            Our innovative way of screening talents minimizes all those risk in
            a cost effective seamless way.
          </p>
          <div className="whyus__button">
            <Hirebutton title="Hire Developers" />
          </div>
        </div>
        <div className="whyus__right">
          <img className="whyus__img" src={HeaderImg} alt="headerImg" />
        </div>
      </div>
      <div className="wave__section">
        <div className="wave__box">
          <h1>Find Right Candidate</h1>
        </div>
        <div className="wave__box">
          <h1>Save Hiring Time</h1>
        </div>
        <div className="wave__box">
          <h1>Hire Niche Skills</h1>
        </div>
      </div>
      <div className="whycodeify">
        <h1 className="whycoedify__heading">Why CoEdify</h1>
        <div className="whycoedify1">
          <div className="whycoedify1__left">
            <img className="whycoedify__img" src={img1} alt="img1" />
          </div>
          <div className="whycoedify1__right">
            <h1>Right Talent</h1>
            <p>
              We find exact match with your job requirements in our pool of
              talents. We give high weightage on problem solving ability rather
              than the laundry list of tech stack mentioned in resume. Our
              filtering process guarantee to eliminate wrong candidates.
            </p>
          </div>
        </div>
        <div className="whycoedify2">
          <div className="whycoedify2__left">
            <h1>Time to Hire</h1>
            <p>
              We make sure our vetted resources joins you within one months of
              your approval and majority will join within 15 days of selection.
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
            <h1>Specific Technical Stack/ Niche Tech Stack</h1>
            <p>
              We don’t deal with all the technologies that exists today, we
              focus only on niche technical stack and finding top talents in
              niche area is extremely challenging, we are helping you to get
              that skill set your project demands.
            </p>
          </div>
        </div>
        <div className="whycoedify4">
          <div className="whycoedify4__left">
            <h1>Attitude/Aptitude/Soft Skill/ Passion</h1>
            <p>
              No matter what is the experience level, we carefully screen
              talents on non-technical aspect as well. We believe attitude and
              soft skill plays major role in executing a successful projects.
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
            <h1>Best-in-Class Service</h1>
            <p>
              We are not general IT manpower and staffing companies. We are here
              to solve the technical hiring in a unique way by finding the right
              person for the right job. Our aim is to carefully strike the
              balance between the expectation set by employers and job seekers.
            </p>
          </div>
        </div>
      </div>
      <div className="banner__grad">
        <Gradient />
      </div>
    </div>
  );
}

export default WhyUs;
