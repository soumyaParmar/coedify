import React from "react";
import "./How.css";
import First from "./UnderstandingRequirements.svg";
import Second from "./ProposedSolution.svg";
import Third from "./Collaboration.svg";

function How() {
  return (
    <>
      <div id="howWeWork"></div>
      <div className="how">
        <h1 className="how__mainHeading">How We Work?</h1>
        <div className="how1">
          <div className="how1__left">
            <h1 className="how__heading">Understanding Your Unique Needs</h1>
            <p className="how__para">
              At CoEdify, our process commences by understanding your specific
              requirements and objectives. We engage in thorough discussions to
              gain deep insights into your needs. Our approach combines
              comprehensive analysis and in-depth research to ensure that our
              solutions are precisely tailored to meet your demands.
            </p>
          </div>
          <div className="how1__right">
            <img src={First} alt="imag" />
          </div>
        </div>
        <div className="how2">
          <div className="how2__left">
            <img src={Second} alt="img2" />
          </div>
          <div className="how2__right">
            <h1 className="how__heading">The Proposed Solution</h1>
            <ul>
              <li>
                Building upon our insights, we provide customized solutions. Be
                it software redesign, greenfield development, or any other
                service, we engineer cost-effective and robust solutions. We
                present a clear timeline and a comprehensive solution, providing
                you with full insight into the scope and cost.
              </li>
            </ul>
          </div>
        </div>
        <div className="how3">
          <div className="how3__left">
            <h1 className="how__heading">Integration and Collaboration</h1>
            <ul>
              <li>
                Collaboration is a core principle of our approach. We work
                closely with our clients, ensuring that you're an integral part
                of the process. You'll have full insight into the project at
                every stage, from inception to delivery, as we demonstrate
                technical expertise and deliver value throughout the project's
                journey.
              </li>
            </ul>
          </div>
          <div className="how3__right">
            <img src={Third} alt="img3" />
          </div>
        </div>
      </div>
    </>
  );
}

export default How;
