import React from "react";
import { useHistory } from "react-router";
import "./hirebutton.css";

function Hirebutton(props) {
  const history = useHistory();
  return (
    <div>
      <a href="mailto:contact@coedify.com" target="_blank" className="attri"><span
        className="btn__getDeveloper"
      >
        {props.title}
      </span></a>
    </div>
  );
}

export default Hirebutton;
