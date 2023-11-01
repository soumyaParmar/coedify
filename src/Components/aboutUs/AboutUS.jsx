import React from "react";
// import Hirebutton from "../../Components/Buttons/Hirebutton";
import "./about.css";
import img1 from "./commit.svg";
import img3 from "./why.svg";
import ceo from "./ceo-modified.png";
import HeaderImg from "./about.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function AboutUs() {
  // const path = useLocation();
  // console.log(path);

  return (
    <div className="why__main">
      <div className="whyus">
        <div className="whyus__left">
          <span className="whyus__span">About Us</span>
          <h1 className="whyus__heading">
            Navigating the Digital Transformation Journey with Excellence
          </h1>
          <p className="whyus__p">
            At CoEdify, we're driven by a passion for engineering excellence.
            With a team of seasoned experts, we specialize in tackling
            real-world programming challenges. Whether it's designing complex
            systems, optimizing cloud infrastructure, integrating AI, or
            breathing new life into legacy software, we're your dedicated
            partners in innovation.
          </p>
        </div>
        <div className="whyus__right">
          <img className="whyus__img" src={HeaderImg} alt="headerImg" />
        </div>
      </div>
      <a href="mailto:contact@coedify.com" target="_blank" rel="noreferrer">
        <span className="hero_contact1" style={{ paddingTop: "10px" }}>
          <p>Try No Cost Consultation</p>
          <FaArrowRightLong />
        </span>
      </a>
      <div className="whycodeify">
        <div className="whycoedify1">
          <div className="whycoedify1__left">
            <img className="whycoedify__img" src={img1} alt="img1" />
          </div>
          <div className="whycoedify1__right">
            <h1>Our Commitment</h1>
            <p>
              We're committed to delivering value and results right from the
              start. Our approach is rooted in understanding your unique
              requirements and crafting customized, cost-effective solutions. We
              embrace collaboration and provide full insight into every project,
              ensuring your software operates at its best, no matter the service
              - redesign, development, or any other.
            </p>
          </div>
        </div>
        <div className="whycoedify2">
          <div className="whycoedify2__left">
            <h1>Why Choose CoEdify?</h1>
            <p>
              Choose CoEdify for unmatched technical expertise, transparent
              collaboration, and a commitment to making your software shine.
              We're not just engineers; we're problem solvers, and we're here to
              engineer the future together.
            </p>
          </div>
          <div className="whycoedify2__right">
            <img className="whycoedify__img" src={img3} alt="img1" />
          </div>
        </div>
      </div>
      <div className="comapnies">
        <div className="trustedby">
          <div className="ceo_img_container">
            <img className="ceo_image" src={ceo} alt="img" />
            <div className="ceo_info">
              <span className="ceo_info_name">MD Nadeem</span>
              <h5 className="ceo_info_designation">CEO , CoEdify</h5>
            </div>
          </div>
        </div>
        <div className="companies__carousel">
          <h3 className="trust__heading">Meet Our CEO</h3>
          <p>
            {" "}
            <i>
              Hello, <br />
              At CoEdify, we're driven by a relentless pursuit of excellence in
              the world of software engineering. Our team of experts is
              committed to tackling the most complex challenges and delivering
              innovative solutions that transform businesses. <br />I invite you
              to explore the world of CoEdify and experience the difference we
              can make for your software projects. We look forward to working
              with you and helping you achieve your software goals.
              <br /> Thank you for choosing CoEdify.
              <br />
              Sincerely,
            </i>
          </p>
          <p>
            <b>
              <i>MD Nadeem</i>
            </b>
            <br />
            <p style={{ fontSize: "15px" }}>Founder & CEO, CoEdify</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
