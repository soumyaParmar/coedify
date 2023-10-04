import React from "react";
import "./vetted.css";
import HeaderImg from "./second.svg";
import img1 from "./third.svg";
import img2 from "./soft-skill.png";
import img3 from "./fourth.svg";
import img4 from "./adaptablity.svg";
import img5 from "./problem-solving.svg";
import Button from "../../Components/Buttons/Hirebutton";
import Transition from "../../Components/Tranistion/Transition";
function Vetted() {
  return (
    <Transition>
    <div className="vet__cover">
      <div className="vet__section1">
        <div className="vet1__left">
          <span className="vet1__span">Our Services</span>
          <h1 className="vet1__heading">Comprehensive Service Offerings</h1>
          <p className="vet1__p">
           At CoEdify, we're dedicated to excellence in software development and 
           enhancement. Whether it's system auditing, performance optimization, 
           advanced security, or custom software creation, we ensure your digital 
           assets meet top-quality standards. Explore how our solutions drive success 
           in your software landscape.
          </p>
          <div className="vet1__btn">
            <Button title="Contact Us" />
          </div>
        </div>
        <div className="vet1__right">
          <img className="vet1__img" src={HeaderImg} alt="img" />
        </div>
      </div>
      <div className="vet__section2">
        <div className="vet2">
          <h1 className="vet2__heading">Tailored Services for Software Excellence</h1>
          <div className="vet2__1">
            <div className="vet2__1left">
              <img className="vet2__img" src={img1} alt="img1" />
            </div>
            <div className="vet2__1right">
              <h1 className="vet2__1heading">Designing and developing complex systems </h1>
              <p className="vet2__1para">
              We specialize in crafting intricate systems from the beginning. 
              Using advanced techniques in system design, coding, and integration,
               we build high-performing, scalable solutions that match your precise 
               requirements. Join us to explore innovation as we engineer the complex 
               structures that drive your success. 
              </p>
            </div>
          </div>
          <div className="vet2__2">
            <div className="vet2__2left">
              <h1 className="vet2__2heading">Software System Auditing </h1>
              <p className="vet2__2para">
              In-Depth Auditing: We conduct thorough software system audits 
              to pinpoint vulnerabilities, bottlenecks, and areas for improvement. 
              Our audits provide valuable insights for enhancing system performance, 
              security, and reliability. 
              </p>
            </div>
            <div className="vet2__2right">
              <img className="vet2__img2" src={img3} alt="img1" />
            </div>
          </div>
          <div className="vet2__3">
            <div className="vet2__3left">
              <img className="vet2__img3" src={img4} alt="img1" />
            </div>
            <div className="vet2__3right">
              <h1 className="vet2__3heading">
              Enhancing Scalability, Performance, and Cost Efficiency
              </h1>
              <p className="vet2__3para">
              Our core expertise revolves around elevating your system's 
              scalability and performance while optimizing cloud and infrastructure 
              costs. Leveraging advanced techniques in load balancing, auto-scaling, 
              and resource allocation, we ensure your applications effortlessly handle 
              increasing workloads without compromising speed. Our cloud and infrastructure 
              experts streamline your resources, aligning them precisely with your needs, 
              resulting in significant cost savings. Experience superior system performance 
              and cost efficiency with our tailored solutions
              </p>
            </div>
          </div>
          <div className="vet2__4">
            <div className="vet2__4left">
              <h1 className="vet2__4heading">
              Software Redesign and Restructuring and Refactoring
              </h1>
              <p className="vet2__4para">
              Don't let outdated or inefficient software impede your progress. 
              Our team specializes in the meticulous redesign, strategic 
              restructuring, and code refactoring of your applications. We ensure 
              optimal code quality, enhanced performance, and alignment with evolving 
              technical standards. Experience a seamless transformation, unlocking 
              the full potential of your digital assets. 
              </p>
            </div>
            <div className="vet2__4right">
              <img className="vet2__img4" src={img5} alt="img1" />
            </div>
          </div>
          <div className="vet2__5">
            <div className="vet2__5left">
              <img className="vet2__img5" src={img2} alt="img1" />
            </div>
            <div className="vet2__5right">
              <h1 className="vet2__5heading">Advanced System Security and Robustness</h1>
              <p className="vet2__5para">
              Our expertise lies in fortifying your systems with cutting-edge security 
              protocols, ensuring robustness and reliability. We employ advanced encryption, 
              intrusion detection, and threat mitigation techniques to safeguard your critical 
              data and maintain system uptime. Rest assured, your digital infrastructure 
              will withstand the test of time and remain resilient in the face of evolving 
              threats. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Transition>
  );
}

export default Vetted;
