import React from "react";
import { useHistory } from "react-router";
import "./Gradient.css";

function Gradient() {
  const history = useHistory();
  return (
    <div className="grad">
      <h1 className="grad__heading">
        Meet the best developers on CoEdify as per your requirements
      </h1>
      <button
        className="btn__getDeveloperGrad"
        onClick={() => history.push("/hiredev")}
      >
        Hire Developers
      </button>
    </div>
  );
}

export default Gradient;
