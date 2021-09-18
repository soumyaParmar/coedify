import React from "react";
import "./formBanner.css";
import Client1 from "./client-1.png";
import Client2 from "./client-2.png";
import Client3 from "./client-3.png";
import Client4 from "./client-4.png";
import Client5 from "./client-5.png";
import Client6 from "./client-6.png";
import Client7 from "./client-7.png";
import Client8 from "./client-8.png";
function FormBanner() {
  return (
    <div className="companies">
      <div className="c1">
        <img className="client-img" src={Client1} alt="c1" />
        <img className="client-img" src={Client2} alt="c2" />
      </div>
      <div className="c2">
        <img className="client-img" src={Client3} alt="c3" />
        <img className="client-img" src={Client4} alt="c4" />
      </div>
      <div className="c3">
        <img className="client-img" src={Client5} alt="c5" />
        <img className="client-img" src={Client6} alt="c6" />
      </div>
      <div className="c4">
        <img className="client-img" src={Client7} alt="c7" />
        <img className="client-img" src={Client8} alt="c8" />
      </div>
    </div>
  );
}

export default FormBanner;
