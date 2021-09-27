import React from "react";
import "./formBanner.css";
import Client1 from "./client-1.png";
import Client2 from "./client-2.png";
import Client3 from "./client-3.png";
import Client4 from "./client-4.png";
import Client5 from "./client-5.png";
import Client6 from "./client-6.png";
import Client7 from "./client-7.png";
import Client8 from "./client-8.svg";
import Client9 from "./client-9.png";
import Client10 from "./client-10.png";
import Client12 from "./client-12.png";
import Client13 from "./client-13.png";
// import Client11 from "./client-11.svg";
function FormBanner() {
  return (
    <div className="companies">
      <div className="c1">
        <img className="client-img" src={Client1} alt="c1" />
      </div>
      <div className="c2">
        <img className="client-img" src={Client2} alt="c2" />
      </div>
      <div className="c3">
        <img className="client-img" src={Client3} alt="c3" />
      </div>
      <div className="c4">
        <img className="client-img" src={Client4} alt="c4" />
      </div>
      <div className="c5">
        <img className="client-img" src={Client5} alt="c5" />
      </div>
      <div className="c6">
        <img className="client-img" src={Client6} alt="c6" />
      </div>
      <div className="c7">
        <img className="client-img" src={Client7} alt="c7" />
      </div>
      <div className="c8">
        <img className="client-img" src={Client8} alt="c8" />
      </div>
      <div className="c9">
        <img className="client-img" src={Client9} alt="c9" />
      </div>
      <div className="c10">
        <img className="client-img" src={Client10} alt="c10" />
      </div>
      <div className="c11">
        <img className="client-img" src={Client12} alt="c11" />
      </div>
      <div className="c11">
        <img className="client-img" src={Client13} alt="c11" />
      </div>
    </div>
  );
}

export default FormBanner;
