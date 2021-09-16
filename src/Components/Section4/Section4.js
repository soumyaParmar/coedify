import React from "react";
import Gradient from "../Gradient/Gradient";
import DevCard from "./DevCard";
import { DevList } from "./DevList";

const Section4 = () => {
  const list1 = DevList.map(
    ({ id, url, title, item1, item2, item3, redirect }) => {
      return (
        <DevCard
          key={id}
          id={id}
          url={url}
          title={title}
          item1={item1}
          item2={item2}
          item3={item3}
          redirect={redirect}
        />
      );
    }
  );
  return (
    <div className="igns" id="techStack">
      <h1 className="ings__heading">Our Technology Stack</h1>
      <h3>Hiring CoEdify Developers</h3>
      <p style={{ color: "GrayText" }}>
        You always found highly skilled developers on CoEdify and our developers
        are not only focused with one technology but they are so much resilient
        that they can switch with any technology or framework anytime. We give
        you developers with work experience in different technologies rigorously
        trained by us.{" "}
      </p>
      <div className="dev__sections">{list1.splice(0, 3)}</div>
      <div className="dev__gradient">
        <Gradient />
      </div>
      <div className="dev__sections">{list1.splice(0)}</div>
    </div>
  );
};

export default Section4;
