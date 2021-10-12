import React from "react";
import "./ProgramPageTestimonialSection.css";
import ProgramPageCarousel from "./ProgramPageCarousel";
const ProgramPageTestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-section-header">
        <h1 className="testimonialHeading">
          What our developers say about us?
        </h1>
        <p className="testimonialSubHeading">Testimonials</p>
      </div>
      <ProgramPageCarousel />
    </section>
  );
};

export default ProgramPageTestimonialSection;
