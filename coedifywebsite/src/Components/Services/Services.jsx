import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";
import { ServiceList } from "./ServiceList";
function Services() {
  const List = ServiceList.map(({ id, title, url, description }) => {
    return (
      <ServiceCard key={id} title={title} url={url} description={description} />
    );
  });
  return (
    <>
      <div className="services">
        <h1>Our Services</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </span>
        <div className="service__cards">{List}</div>
      </div>
    </>
  );
}

export default Services;
