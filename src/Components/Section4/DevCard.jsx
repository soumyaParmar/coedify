import React from "react";
import "./DevCard.css";
function DevCard({ url, title, item1, item2, item3 }) {
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

        <button className="dev__btn">Learn More</button>
      </div>
    </>
  );
}

export default DevCard;
