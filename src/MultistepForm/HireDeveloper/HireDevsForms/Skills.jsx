import React, { useState } from "react";
import logo from "./CoEdify-logo.png";
import "../../StepForms/personaldetail.css";
import Multiselect from "multiselect-react-dropdown";
import FormBanner from "../../../Components/FormBanner/FormBanner";
// import Select from "react-select";

function Skills({
  defaultData,
  register,
  handleSubmit,
  errors,
  classNames,
  navigation,
}) {
  const onSubmit = (data) => {
    defaultData = { ...data };
    navigation.next();
  };
  const skills = [
    {
      value: 1,
      label: "HTMl",
    },
    {
      value: 2,
      label: "CSS",
    },
    {
      value: 3,
      label: "JS",
    },
    {
      value: 4,
      label: "ReactJs",
    },
    {
      value: 5,
      label: "NodeJs",
    },
    {
      value: 6,
      label: "VueJs",
    },
  ];
  let [displaySkill] = useState(skills);
  const handleskill = (data) => {};
  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <div className="form__section">
            <h1 className="form__heading2">
              What skills do you want your new recruit to possess ?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <Multiselect
                  options={displaySkill}
                  displayValue="label"
                  emptyRecordMsg="select"
                  selectionLimit="2"
                  placeholder="Select only two"
                  onSelect={handleskill}
                />
              </div>

              <div className="navigation__btns">
                <button className="next__btn" type="submit">
                  Next
                </button>
                <button
                  className="back__btn"
                  onClick={() => navigation.previous()}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="step1__right">
          <h2 className="form__banner">Our developers are working here</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default Skills;
