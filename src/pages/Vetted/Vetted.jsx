import React from "react";
import "./vetted.css";
import HeaderImg from "./second.svg";
import img1 from "./third.svg";
import img2 from "./perf.svg";
import img3 from "./fourth.svg";
import img4 from "./expDev.svg";
import img5 from "./engineer.svg";
import img6 from "./audit.svg";
import { FaArrowRightLong } from "react-icons/fa6";
function Vetted() {
  return (
    <div className="vet__cover">
      <div className="vet__section1">
        <div className="vet1__left">
          <h1 className="vet1__heading">Explore Our Services</h1>
          <p className="vet1__p">
            At CoEdify, we provide a comprehensive suite of services aimed to
            enhance your software endeavours. From optimizing cloud costs to
            integrating cutting-edge AI, onboarding experienced developers,
            designing complex systems, refactoring legacy software, and auditing
            existing system, we're your trusted partner for software excellence.
            Explore our services and experience the CoEdify difference.
          </p>
        </div>
        <div className="vet1__right">
          <img className="vet1__img" src={HeaderImg} alt="img" />
        </div>
      </div>
      <a href="mailto:contact@coedify.com" target="_blank" rel="noreferrer">
        <span className="hero_contact1" onMouseOver={console.log("hellonik")}>
          <p>Try No Cost Consultation</p>
          <FaArrowRightLong />
        </span>
      </a>
      <div className="vet__section2">
        <div className="vet2">
          <div className="vet2__1">
            <div className="vet2__1left">
              <img className="vet2__img" src={img1} alt="img1" />
            </div>
            <div className="vet2__1right">
              <h1 className="vet2__1heading">Cloud Cost optimization </h1>
              <p className="vet2__1para">
                We guarantee cost savings, efficient resource utilization, and
                enhanced performance. Let's have a conversation; we only charge
                when we deliver on our promises. Our team of cloud experts
                possesses an in-depth understanding of cloud technologies and
                excels in optimization. We've successfully achieved it.
              </p>
            </div>
          </div>
          <div className="vet2__2">
            <div className="vet2__2left">
              <h1 className="vet2__2heading">AI Integration</h1>
              <p className="vet2__2para">
                Empower your products with intelligence through our AI
                integration services. We seamlessly blend artificial
                intelligence into your software, making it smarter and more
                efficient. Our experts are well-versed in AI technologies,
                ensuring a seamless transition to intelligent solutions.
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
                Dedicated Experienced Developers
              </h1>
              <p className="vet2__3para">
                Experience the advantage of a dedicated developer who becomes an
                integral part of your team. Our seasoned developers bring their
                expertise to your projects, ensuring seamless collaboration and
                top-notch results. Get the support you need to achieve your
                software goals.
              </p>
            </div>
          </div>
          <div className="vet2__4">
            <div className="vet2__4left">
              <h1 className="vet2__4heading">
                Complex System Design and Development
              </h1>
              <p className="vet2__4para">
                Turn your complex ideas into reality with our comprehensive
                system design and development services. Our team specializes in
                architecting and building intricate systems tailored to your
                unique requirements. Trust us to bring your vision to life
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
              <h1 className="vet2__5heading">
                Legacy System Redesign and Performance Enhancement
              </h1>
              <p className="vet2__5para">
                Revitalize your legacy software with our redesign and
                performance enhancement expertise. We understand the challenges
                of maintaining older systems and excel in code refactoring.
                Experience improved performance and modernization without the
                hassle.
              </p>
            </div>
          </div>
          <div className="vet2__6">
            <div className="vet2__6left">
              <h1 className="vet2__6heading">Comprehensive System Audit</h1>
              <p className="vet2__6para">
                Ensure the security and reliability of your software with our
                comprehensive system audit. Our experts conduct thorough
                assessments to identify vulnerabilities and areas for
                improvement. We provide effective mitigation and solutions,
                safeguarding your software's integrity.
              </p>
            </div>
            <div className="vet2__4right">
              <img className="vet2__img4" src={img6} alt="img1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vetted;
