import React from "react";
import "./ProgramPageCompanySection.css";
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
const ProgramPageCompanySection = () => {
  return (
    <section className="company-section">
      <div className="company-section-header">
        Companies hired our developers
      </div>
      <div className="company-section-cards">
        <div className="company-card">
          <img className="company__Client" src={Client1} alt="client1"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client2} alt="client2"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client3} alt="client3"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client4} alt="client4"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client5} alt="client5"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client6} alt="client6"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client7} alt="client7"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client8} alt="client8"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client9} alt="client9"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client10} alt="client10"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client12} alt="client12"></img>
        </div>
        <div className="company-card">
          <img className="company__Client" src={Client13} alt="client13"></img>
        </div>
      </div>
    </section>
  );
};

export default ProgramPageCompanySection;
