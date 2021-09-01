import React from "react";
import "./Section.css";

// import fullstack from "./fullstack.png"
function Section({ url, title, item1, item2, item3 }) {
  return (
    <>
      <div className="devCard">
        <div className="dev__img">
          <img src={url} alt="logo" />
        </div>
        <h4 className="dev__title">{title}</h4>
        <ul className="dev__ul">
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul>
      </div>
    </>
  );
}

export default Section;
