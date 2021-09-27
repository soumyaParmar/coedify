import React from "react";
import { Carousel } from "3d-react-carousal";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
function Testimonial() {
  let slides = [
    <img className="clientImgs" src={img4} alt="4" />,
    <img className="clientImgs" src={img3} alt="3" />,
    <img className="clientImgs" src={img2} alt="6" />,
    <img className="clientImgs" src={img1} alt="5" />,
    <img className="clientImgs" src={img5} alt="1" />,
    <img className="clientImgs" src={img6} alt="2" />,
  ];

  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export default Testimonial;
