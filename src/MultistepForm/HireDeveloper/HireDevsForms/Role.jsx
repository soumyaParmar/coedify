import React, { useState } from "react";
import { useHistory } from "react-router";
// import { firebase } from "../../../lib/firebase-config.js";
import logo from "./CoEdify-logo.png";
// import Select from "react-select";
import "../../StepForms/personaldetail.css";
// import Button from "../../../Components/Buttons/Hirebutton";
import Multiselect from "multiselect-react-dropdown";
import FormBanner from "../../../Components/FormBanner/FormBanner";

function Role({
  defaultData,
  register,
  setRole,
  role,
  handleSubmit,
  errors,
  classNames,
  navigation,
}) {
  const history = useHistory();
  const Roles = [
    {
      value: 1,
      label: "React JS front-end Developer ",
    },
    {
      value: 2,
      label: "Angular.JS front-end Developer",
    },
    {
      value: 3,
      label: "Node.js back-end Developer",
    },
    {
      value: 4,
      label: "Python Developer",
    },
    {
      value: 5,
      label:
        "Java full-stack Developer ( Core Java/ Spring Boot/ Hibernate/ React.JS Or Angular.JS)",
    },
    {
      value: 6,
      label:
        ".NET full-stack Developer ( C# / ASP.Net Core/ React.JS Or Angular.JS)",
    },
    {
      value: 7,
      label: "MEAN stack Developer",
    },
    {
      value: 8,
      label: "MERN stack Developer",
    },
    {
      value: 9,
      label:
        "Python full-stack Developer (Python/ DJango/ React.JS Or Angular.JS) ",
    },
    {
      value: 10,
      label: "Golang Developer",
    },
    {
      value: 11,
      label: "Core Java Developer",
    },
    {
      value: 12,
      label: "Advanced SQL and Query Performance Tuning Expert",
    },
  ];
  const [count, setCount] = useState(0);
  const [Role] = useState(Roles);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selected = [];
  const handleRole = (data) => {
    data.forEach((ele) => {
      selected.push(ele.label);
      setCount(count + 1);
    });
  };

  const onSubmit = (data) => {
    setRole([selected[1], selected[2]]);
    if (count === 2) navigation.next();
    else return false;
  };
  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img
            className="form__logo"
            onClick={() => history.push("/")}
            src={logo}
            style={{ cursor: "pointer" }}
            alt="logo"
          />
          <div className="form__section">
            <h1 className="form__heading2">
              What technology stack you are hiring for ?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <Multiselect
                options={Role}
                displayValue="label"
                emptyRecordMsg="select"
                selectionLimit="2"
                placeholder="Select only two"
                onSelect={handleRole}
              />
              <div className="navigation__btns">
                <button className="getStarted__btn" type="submit">
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="step1__right">
          <h2 className="form__banner">Trusted By</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default Role;
