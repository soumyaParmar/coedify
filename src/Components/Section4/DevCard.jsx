import React from "react";
import "./DevCard.css";
function DevCard({ id, url, title, item1, item2, item3 }) {
  return (
    <>
      <div className="dev__box">
        {/* <div className="dev__content"> */}
        <img className="dev__img1" src={url} alt="fullstack" />
        <div className="dev__spa" >{title}</div>
        {/* <ul className="dev__ul">
          <li>{item1}</li>
          <li>{item2}</li>
          <li>{item3}</li>
        </ul> */}

        {/* <Link
          className="dev__btn"
          style={{ textDecoration: "none", color: "black" }}
          to={`/technology/${id}`}
        >
          Learn More
        </Link> */}
      </div>
    </>
  );
}

export default DevCard;
