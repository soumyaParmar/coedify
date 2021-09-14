import React from "react";
import logo from "./CoEdify-logo.png";
import Select from "react-select";
import "../../StepForms/personaldetail.css";
import Button from "../../../Components/Buttons/Hirebutton";
import { useHistory } from "react-router";

function Role({
  setValue,
  watch,
  defaultData,
  register,
  handleSubmit,
  errors,
  classNames,
  navigation,
}) {
  const onSubmit = (data) => {
    console.log(data);
    defaultData = { ...data };
    navigation.next();
  };
  const history = useHistory();
  const Roles = [
    {
      value: 1,
      label: "HTML",
    },
    {
      value: 2,
      label: "JS",
    },
    {
      value: 3,
      label: "CSS",
    },
    {
      value: 4,
      label: "NodeJs",
    },
    {
      value: 5,
      label: "ReactJs",
    },
    {
      value: 6,
      label: "VueJs",
    },
  ];

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
              <select multiple class="form-control" id="state">
                <option value="">Select Your State</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
                <option value="Assam">Assam</option>
                <option value="Goa">Goa</option>
                <option value="Manipur">Manipur</option>
              </select>
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
