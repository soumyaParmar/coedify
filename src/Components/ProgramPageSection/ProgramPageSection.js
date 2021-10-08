import React from "react";
import "./ProgramPageSection.css";
// import Hirebutton from "../Buttons/Hirebutton";
import book from "../../assets/book-black-bookmark.png";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
const ProgramPageSection = () => {
  const animation = useAnimation();

  // const { ref, inView } = useInView();
  return (
    <section className="experience-section">
      <div className="experience-section-header">
        <div className="experience-header-heading">
          Gain Industry-Level Experience with Industry Experts
        </div>
        <div className="experience-header-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
          interdum malesuada in mi ultrices volutpat phasellus natoque. Vitae
          viverra etiam viverra cursus urna facilisis mi elit. Turpis iaculis
        </div>
      </div>
      <div className="experience-section-content">
        <div className="section-card">
          <img className="section-card-image" src={book} alt="black book" />
          <div className="section-card-content">
            Start with fundamentals of computer science with practical use case.
          </div>
        </div>
        <div className="section-card">
          <img className="section-card-image" src={book} alt="black book" />
          <div className="section-card-content">
            Start with fundamentals of computer science with practical use case.
          </div>
        </div>
        <motion.div
          animate={animation}
          className="section-card"
          style={{ borderRight: "none" }}
        >
          <img className="section-card-image" src={book} alt="black book" />
          <div className="section-card-content">
            Data Structures & Algorithms never been so fun here when you see use
            cases.
          </div>
        </motion.div>
        <div className="section-card">
          <img className="section-card-image" src={book} alt="black book" />
          <div className="section-card-content">
            Learn new technologies of your choice in development.
          </div>
        </div>
        <div className="section-card">
          <img className="section-card-image" src={book} alt="black book" />
          <div className="section-card-content">
            15+ small projects during your learning phase.
          </div>
        </div>
        <div className="section-card" style={{ borderRight: "none" }}>
          <img className="section-card-image" src={book} alt="black book" />
          <div className="section-card-content">
            Work on our live projects and get industry level experience.
          </div>
        </div>
      </div>
      <div className="experience-section-button">
        {/* <Hirebutton title="Hire Developer" /> */}
      </div>
    </section>
  );
};

export default ProgramPageSection;
