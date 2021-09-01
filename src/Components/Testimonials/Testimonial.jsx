import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import { List } from "./TestimonialList";
function Testimonial() {
  const options = {
    autoplay: true,
    margin: 30,
    loop: true,
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  const list = List.map((val) => {
    return (
      <div className="item">
        <TestimonialCard
          description={val.description}
          url={val.url}
          title={val.title}
          name={val.name}
          rating={val.rating}
        />
      </div>
    );
  });

  return (
    <div className="testimonial">
      <OwlCarousel className="item" {...options}>
        {list}
      </OwlCarousel>
    </div>
  );
}

export default Testimonial;
