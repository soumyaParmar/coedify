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
        To suit the needs of both start-ups and established IT firms, we're
        broadening our technology stack. Although precise definitions of these
        technological stacks are difficult to articulate due to their extremely
        contextual nature, We're largely talking about the core competencies
        that each developer possesses, but they're also incredibly flexible to
        new technologies and can swiftly ramp up to a new tech stack.
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
