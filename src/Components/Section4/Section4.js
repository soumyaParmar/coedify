import React from "react";
import DevCard from "./DevCard";
import { DevList } from "./DevList";

const Section4 = () => {
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
      <div className="dev__sections">
        {DevList.map(({ id, url, title, item1, item2, item3 }) => {
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
        })}
      </div>
      <div className="grad">
     
        <h1 className="grad__heading">Meet the best developers on CoEdify as per your requirements</h1>
        <button className="btn__getDeveloperGrad">Hire Developers</button>
     
      </div>
    </div>
  );
};

export default Section4;
