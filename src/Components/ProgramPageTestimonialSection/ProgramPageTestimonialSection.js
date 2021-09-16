import React from 'react'
import "./ProgramPageTestimonialSection.css"

const ProgramPageTestimonialSection = () => {
    return (
        <section className="testimonial-section">
            <div className="testimonial-section-header">
                What our developers say about us?
            </div>
            <div className="slider">
            <div className="testimonial-cards">
                <div id="slide-1">
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                </div>
                <div id="slide-2">
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                </div>
                <div id="slide-3">
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                </div>
                <div id="slide-4">
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                    <div className="testimonial-box">
                        Testimonial
                    </div>
                </div>
            </div>
            </div>

            <div className="scrollers">
            <a href="#slide-1"><i className="bi bi-circle"></i></a>
            <a href="#slide-2"><i className="bi bi-circle"></i></a>
            <a href="#slide-3"><i className="bi bi-circle"></i></a>
            <a href="#slide-4"><i className="bi bi-circle"></i></a>
            </div>
        </section>
    )
}

export default ProgramPageTestimonialSection
