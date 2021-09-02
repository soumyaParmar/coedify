import React from "react";
import Hirebutton from "../../Components/Buttons/Hirebutton";
import "./whyus.css";
import img1 from "./whyus_1.svg";
import img2 from "./whyus_2.png";
import img3 from "./whyus_3.svg";
import Gradient from "../../Components/Gradient/Gradient";

import HeaderImg from "./whyus-header-image.svg";

function WhyUs() {
  return (
    <>
      <div className="whyus">
        <div className="whyus__left">
          <span className="whyus__span">Why Us</span>
          <h1 className="whyus__heading">
            Hire tech talents that fits the job requirements
          </h1>
          <div className="whyus__button">
            <Hirebutton />
          </div>
        </div>
        <div className="whyus__right">
          <img className="whyus__img" src={HeaderImg} alt="headerImg" />
        </div>
      </div>
      <div className="wave__section">
        <div className="wave__box">
          <h1>Some small content</h1>
        </div>
        <div className="wave__box">
          <h1>Some small content</h1>
        </div>
        <div className="wave__box">
          <h1>Some small content</h1>
        </div>
      </div>
      <div className="whycodeify">
        <h1 className="whycoedify__heading">Why CoEdify</h1>
        <div className="whycoedify1">
          <div className="whycoedify1__left">
            <img className="whycoedify__img" src={img1} alt="img1" />
          </div>
          <div className="whycoedify1__right">
            <h1>Heading 1</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              diam ridiculus nec quisque. Nisl, orci aliquam ultricies integer
              duis dis. Viverra turpis eget neque, vel ornare non nec,
              sollicitudin. Condimentum neque sit odio faucibus nisl natoque
              egestas. Vulputate fermentum nam vulputate vestibulum.
            </p>
          </div>
        </div>
        <div className="whycoedify2">
          <div className="whycoedify2__left">
            <h1>Heading 2</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              diam ridiculus nec quisque. Nisl, orci aliquam ultricies integer
              duis dis. Viverra turpis eget neque, vel ornare non nec,
              sollicitudin. Condimentum neque sit odio faucibus nisl natoque
              egestas. Vulputate fermentum nam vulputate vestibulum.
            </p>
          </div>
          <div className="whycoedify2__right">
            <img className="whycoedify__img" src={img3} alt="img1" />
          </div>
        </div>
        <div className="whycoedify3">
          <div className="whycoedify3__left">
            <img className="whycoedify__img2" src={img2} alt="img1" />
          </div>
          <div className="whycoedify3__right">
            <h1>Heading 3</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
              diam ridiculus nec quisque. Nisl, orci aliquam ultricies integer
              duis dis. Viverra turpis eget neque, vel ornare non nec,
              sollicitudin. Condimentum neque sit odio faucibus nisl natoque
              egestas. Vulputate fermentum nam vulputate vestibulum.
            </p>
          </div>
        </div>
      </div>
      <div className="banner__grad">
        <Gradient />
      </div>
    </>
  );
}

export default WhyUs;
