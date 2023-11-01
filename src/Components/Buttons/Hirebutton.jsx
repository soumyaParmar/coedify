import React from "react";
import "./hirebutton.css";

function Hirebutton(props) {
  return (
    <div>
      <a
        href="mailto:contact@coedify.com"
        target="_blank"
        rel="noreferrer"
        className="attri"
      >
        <span className="btn__getDeveloper">{props.title}</span>
      </a>
    </div>
  );
}

export default Hirebutton;
