import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";

import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./ProgramPageCarousel.css";
import { List } from "../Testimonials/TestimonialList";
import TestimonialCard from "../Testimonials/TestimonialCard";
// import { List } from "./TestimonialList";
function Test() {
  const list = List.map(({ id, description, url, title, name, rating }) => {
    return (
      <TestimonialCard
        key={id}
        name={name}
        description={description}
        url={url}
        title={title}
        rating={rating}
      />
    );
  });
  const options = {
    margin: 30,
    autoplay: true,
    loop: true,
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="testimonial">
      <OwlCarousel className="item" {...options}>
        {list}
      </OwlCarousel>
    </div>
  );
}

export default Test;
