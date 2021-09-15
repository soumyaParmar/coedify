import React from "react";
import "../Section4/DevCard.css";
function TechCard({ id, url, title, item1, item2, item3 }) {
  return (
    <>
      <div className="dev__box">
        {/* <div className="dev__content"> */}
        <img className="dev__img" src={url} alt="fullstack" />
        <h4 className="dev__heading">
          <span className="dev__span">{title}</span> <span>Developer</span>
        </h4>
        <ul className="dev__ul">
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </>
  );
}

export default TechCard;
