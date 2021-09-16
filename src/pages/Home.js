import React from "react";
import Hero from "../Components/Hero/Hero";
import How from "../Components/How/How";
import Section2 from "../Components/Section2/Section2";
import Section4 from "./../Components/Section4/Section4";

const Home = (props) => {
  return (
    <div className="home">
      <Hero />
      <Section2 />
      <How />
      <Section4 />
    </div>
  );
};

export default Home;
