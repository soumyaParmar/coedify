import React from "react";
import "./serviceCard.css";
function ServiceCard({ url, title, description }) {
  return (
    <>
      <div className="card">
        <div className="card__logo">
          <img src={url} alt="" />
        </div>
        <div className="card__title">
          <span>{title}</span>
        </div> 
        <div className="card__description">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
