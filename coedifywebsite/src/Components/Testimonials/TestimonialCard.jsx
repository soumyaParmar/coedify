import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./TestimonialCard.css";
function TestimonialCard(props) {
  const { description, url, title, name, rating } = props;
  return (
    <div className="client">
      <FaQuoteLeft />
      <p className="client__para">{description}</p>
      <div className="client__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <div className="client__img">
        <img src={url} alt="" />
        <h3>{name}</h3>
        <span className="des">{title}</span>
      </div>
    </div>
  );
}

export default TestimonialCard;
