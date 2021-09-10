import React from "react";
import { useHistory } from "react-router";

function Hirebutton(props) {
  const history = useHistory();
  return (
    <div>
      <span
        className="btn__getDeveloper"
        onClick={() => history.push("./hiredev")}
      >
        {props.title}
      </span>
    </div>
  );
}

export default Hirebutton;
