import React from "react";
import "./Section.css";
function SectionCard({ index, url, title, item1, item2, item3 }) {
  return (
    <>
      <div className="sec__box">
        {/* <div className="dev__content"> */}
        <img className="sec__img" src={url} alt="fullstack" />
        <h4 className="sec__heading">
          <span className="sec__span">{title}</span> <span>Developer</span>
        </h4>
        <ul className="sec__ul">
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>

        {/* <button className="dev__btn">Learn More</button> */}
      </div>
    </>
  );
}

export default SectionCard;
