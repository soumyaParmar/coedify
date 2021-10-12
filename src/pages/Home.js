import React, { useEffect } from "react";
import Hero from "../Components/Hero/Hero";
import How from "../Components/How/How";
import Section2 from "../Components/Section2/Section2";
import Section4 from "./../Components/Section4/Section4";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);
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
