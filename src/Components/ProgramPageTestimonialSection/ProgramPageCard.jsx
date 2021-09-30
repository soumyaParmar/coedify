import React from "react";
import "./PageCard.css";

function ProgramPageCard() {
  return (
    <div className="pageCard">
      <div className="pageCard__logo">
        <img
          src="https://smartslider3.com/wp-content/uploads/slider/cache/5f1f6db834df014b5f6fba93bdadad09/company-logo5.webp"
          alt="logo"
        />
      </div>
      <div className="pageCard__description">
        <p>
          The backend of the plugin is beautifully designed and fairly intuitive
          – although there are so many options, it’s almost daunting.
        </p>
      </div>
      <div className="pageCard__dp">
        <img
          className="pageCard__dpImg"
          src="https://smartslider3.com/wp-content/uploads/slider/cache/135b49398751d9de6cdab14a4555d633/avatar5.webp"
          alt="dp"
        />
      </div>
      <div className="pageCard__name">
        <span>RYAN VIDAL</span>
      </div>
      <div className="pageCard__designation">
        <span>Interactive Designer</span>
      </div>
    </div>
  );
}

export default ProgramPageCard;
