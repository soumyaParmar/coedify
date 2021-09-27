import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import Client1 from "./client-1.png";
import Client2 from "./client-2.png";
import Client3 from "./client-3.png";
import Client4 from "./client-4.png";
import Client5 from "./client-5.png";
import Client6 from "./client-6.png";
import Client7 from "./client-7.png";
import Client8 from "./client-8.svg";
import Client9 from "./client-9.png";
import Client10 from "./client-10.png";
import Client11 from "./client-11.png";
import Client12 from "./client-12.png";
import Client13 from "./client-13.png";
import Client14 from "./client-14.png";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import "./Testimonial.css";
// import TestimonialCard from "./TestimonialCard";
// import { List } from "./TestimonialList";
function Test() {
  const options = {
    margin: 30,
    autoplay: true,
    loop: true,
    responsiveClass: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2,
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
        items: 7,
      },
    },
  };

  return (
    <div className="testimonial">
      <OwlCarousel className="item" {...options}>
        <img className="client__image2" src={Client2} alt="img1" />
        <img className="client__image1" src={Client1} alt="img1" />
        <img className="client__image7" src={Client7} alt="img1" />
        <img className="client__image8" src={Client8} alt="img1" />
        <img className="client__image5" src={Client5} alt="img1" />
        <img className="client__image6" src={Client6} alt="img1" />
        <img className="client__image3" src={Client3} alt="img1" />
        <img className="client__image4" src={Client4} alt="img1" />
        <img className="client__image9" src={Client9} alt="img1" />
        <img className="client__image10" src={Client10} alt="img1" />
        <img className="client__image11" src={Client11} alt="img1" />
        <img className="client__image12" src={Client12} alt="img1" />
        <img className="client__image13" src={Client13} alt="img1" />
        <img className="client__image14" src={Client14} alt="img1" />
      </OwlCarousel>
    </div>
  );
}

export default Test;
