import React, { useState } from "react";
import logo from "./CoEdify-logo.png";
// import Select from "react-select";
import "../../StepForms/personaldetail.css";
import Button from "../../../Components/Buttons/Hirebutton";
import Multiselect from "multiselect-react-dropdown";
import { useHistory } from "react-router";
// import * as Yup from "yup"

function Role({
  defaultData,
  register,
  handleSubmit,
  errors,
  classNames,
  navigation,
}) {
  const onSubmit = (data) => {
    console.log(defaultData);
    defaultData = { ...data };
    navigation.next();
  };
  const history = useHistory();
  const Roles = [
    {
      value: 1,
      label: "MERN Stack",
    },
    {
      value: 2,
      label: "MEAN Stack",
    },
    {
      value: 3,
      label: "React & Django",
    },
    {
      value: 4,
      label: "Angular & .net",
    },
    {
      value: 5,
      label: "React & Spring Boot",
    },
    {
      value: 6,
      label: "VueJs",
    },
    {
      value: 6,
      label: "NodeJs & Express",
    },
  ];

  const [role] = useState(Roles);
  const handleRole = (data) => {
    defaultData = { ...data };
  };
  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <div className="form__section">
            <h1 className="form__heading2">
              What role would you like to hire ?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <Multiselect
                options={role}
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
          <h1 className="stepheading">Do you want to apply as a developer ?</h1>
          <div onClick={() => history.push("/applyasdev")}>
            <Button title="Apply as a Developer" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Role;
