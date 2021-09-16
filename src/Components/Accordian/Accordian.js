import React, { useState, useRef } from "react";

import "./Accordian.css";

function Accordion({heading, text}) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "acc-active" : "");
    setHeightState(setActive === "acc-active" ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <div className="accordion__section">
      <div className={`accordion ${setActive}`} onClick={toggleAccordion}>
        {heading}
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
          {text}
      </div>
    </div>
  );
}

export default Accordion;