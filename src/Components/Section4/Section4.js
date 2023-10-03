import React from "react";
import Gradient from "../Gradient/Gradient";
import DevCard from "./DevCard";
import { DevList } from "./DevList";

const Section4 = () => {
  const style = {
    backgroundColor:'#072d34',
    color:'white',
  }
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
    <div className="igns" id="techStack" style={style}>
      <h1 className="ings__heading" style={{color:"white"}}>Our Working Domains</h1>
      <p style={{ color: "white", textAlign:"center" }}>
      We are specialized in crafting robust solutions for a wide spectrum 
      of industries, including stock and crypto trading, banking and finance, 
      healthcare, and insurance. Our expertise lies in delivering high-performance, 
      secure, and scalable software applications that empower clients to navigate 
      their respective sectors with cutting-edge technology
      </p>
      <div className="dev__sections">{list1}</div>
    </div>
  );
};

export default Section4;
