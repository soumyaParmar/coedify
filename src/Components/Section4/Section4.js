import React from "react";
import Section from "../../pages/Section-2/Section";
import Gradient from "../Gradient/Gradient";
import DevCard from "./DevCard";
import { DevList } from "./DevList";

const Section4 = () => {
  const list1 = DevList.map(({ id, url, title, item1, item2, item3 }) => {
    return (
      <DevCard
        index={id}
        url={url}
        title={title}
        item1={item1}
        item2={item2}
        item3={item3}
      />
    );
  });
  return (
    <div className="igns">
      <h1 className="ings__heading">Our Ingenious Developers</h1>
      <h3>Hiring CoEdify Developers</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation{" "}
      </p>
      <div className="dev__sections">{list1.splice(0, 3)}</div>
      <Gradient />
      <div className="dev__sections">{list1.splice(0)}</div>
    </div>
  );
};

export default Section4;
