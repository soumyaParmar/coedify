import React from "react";
// import { FaQuoteLeft } from "react-icons/fa";

import "./TestimonialCard.css";
function TestimonialCard(props) {
  // const { description, url, title, name, rating } = props;
  return (
    <div className="client">
      <img
        className="client__img"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        alt="client"
      />
      {/* <FaQuoteLeft /> */}
      {/* <p className="client__para">{description}</p> */}
      {/* <div className="client__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div> */}
      {/* <div className="client__img">
        <img src={url} alt="" />
        <h3>{name}</h3>
        <span className="des">{title}</span>
      </div> */}
    </div>
  );
}

export default TestimonialCard;
