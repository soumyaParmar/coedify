import React from "react";
// import Hirebutton from "../../Components/Buttons/Hirebutton";
import "./about.css";
import img1 from "./audit.svg";
import img3 from "./cost.svg";
import img4 from "./software.svg";
import img5 from "./security.svg";
import img6 from "./complex.svg";
import ceo from "./ceo-modified.png";


// import { useLocation } from "react-router-dom";

// import Gradient from "../../Components/Gradient/Gradient";

import HeaderImg from "./aboutus.svg";
import Transition from "../Tranistion/Transition";

function AboutUs() {
  // const path = useLocation();
  // console.log(path);

  return (
    <Transition>
    <div className="why__main">
      <div className="whyus">
      {/* <div className="comapnies">
        <div className="trustedby">
          <h3 className="trust__heading">Our <br/>Trusted<br/> Partners</h3>
        </div>
        <div className="companies__carousel">
          <Test />
        </div>
      </div> */}
        <div className="whyus__left">
          <span className="whyus__span">About Us</span>
          <h1 className="whyus__heading">
          Navigating the Digital Transformation Journey with Excellence
          </h1>
          <p className="whyus__p">
          At CoEdify, we are your trusted technology partners, offering a 
          range of specialized services to drive your digital success. With a 
          relentless commitment to excellence, we deliver expertise in the following
           key areas.
          </p>
          {/* <div className="whyus__button">
            <Hirebutton title="Contact Us" />
          </div> */}
        </div>
        <div className="whyus__right">
          <img className="whyus__img" src={HeaderImg} alt="headerImg" />
        </div>
      </div>
      <div className="comapnies">
        <div className="trustedby">
          <div className="ceo_img_container">
            <img className="ceo_image" src={ceo} alt="ceoimage"/>
            <div className="ceo_info">
              
              <span className="ceo_info_name">MD Nadeem</span>
              <h5 className="ceo_info_designation">CEO , CoEdify</h5>
                      
            </div>
          </div>
                   
        </div>
        <div className="companies__carousel">
        <h3 className="trust__heading">Meet Our CEO</h3> 
        <p> "At CoEdify, we bridge the gap between visionary ideas and practical implementation 
            for IT product companies. Our team excels at solving complex engineering challenges 
            by combining innovation with technical expertise.
            We prioritize understanding your unique vision and challenges. Our 
            research-driven approach results in innovative, scalable solutions.
            We analyze your current IT infrastructure and provide a customized roadmap 
            for improvement. Our commitment extends beyond implementation, ensuring seamless 
            integration and continuous support.
            Thank you for considering CoEdify as your partner in overcoming IT engineering challenges. 
            We're eager to collaborate and bring your vision to life"
          </p>
          <p>
           MD Nadeem<br/>
           <p style={{fontSize:"15px"}}>CEO, CoEdify</p>
          </p>
        </div>
      </div>
      {/* <div className="handles">
        <img src={img7}/>
        <img src={img8}/>
        <img src={img9}/>
      </div> */}
      <div className="whycodeify">
        <div className="whycoedify1">
          <div className="whycoedify1__left">
            <img className="whycoedify__img" src={img1} alt="img1" />
          </div>
          <div className="whycoedify1__right">
            <h1>System Auditing Excellence</h1>
            <p>
            Our forte lies in conducting in-depth software system audits to identify 
            vulnerabilities, bottlenecks, and areas for improvement. Our audits provide 
            invaluable insights for enhancing system performance, security, and 
            reliability.
            </p>
          </div>
        </div>
        <div className="whycoedify2">
          <div className="whycoedify2__left">
            <h1>Scalability, Efficiency, and Cost Optimization</h1>
            <p>
            We specialize in elevating your system's scalability and performance 
            while optimizing cloud and infrastructure costs. Through advanced 
            techniques in load balancing, auto-scaling, and resource allocation, we 
            ensure your applications effortlessly handle growing workloads while delivering 
            significant cost savings. 
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
            <h1> Software Transformation and Enhancement</h1>
            <p>
            Don't let outdated software hold you back. Our team specializes in meticulous software redesign, strategic restructuring, and code refactoring to ensure optimal code quality, enhanced performance, and alignment with evolving technical standards.
            </p>
          </div>
        </div>
        <div className="whycoedify4">
          <div className="whycoedify4__left">
            <h1>Advanced Security Solutions</h1>
            <p>
            We excel in fortifying your systems with cutting-edge security protocols, 
            employing advanced encryption, intrusion detection, and threat mitigation 
            techniques to safeguard your critical data and maintain system uptime.
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
            <h1>Crafting Complex Systems</h1>
            <p>
            Our passion lies in crafting intricate systems from the ground up.
            Using advanced techniques in system design, coding, and integration, 
            we engineer high-performing, scalable solutions tailored precisely to 
            your requirements. 
            </p>
          </div>
        </div>
      </div>
    </div>
    </Transition>
  );
}

export default AboutUs;
