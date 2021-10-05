import React from "react";
import "./ProgramPageTestimonialSection.css";
import ProgramPageCarousel from "./ProgramPageCarousel";
const ProgramPageTestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-section-header">
        What our developers say about us?
      </div>
      <ProgramPageCarousel />
    </section>
  );
};

export default ProgramPageTestimonialSection;
