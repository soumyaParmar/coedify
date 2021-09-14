import React, { useState } from "react";
import logo from "./CoEdify-logo.png";
import "../../StepForms/personaldetail.css";
import Button from "../../../Components/Buttons/Hirebutton";
import Select from "react-select";

function Skills({
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
  let [displaySkill, setSkill] = useState();
  const handleChange = (e) => {
    setSkill(Array.isArray(e) ? e.map((x) => x.label) : []);
  };
  console.log(displaySkill?.length);
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
                <Select
                  name="skills"
                  className={classNames("form-control", {
                    "is-invalid": errors.role,
                  })}
                  {...register("role", {
                    required: true,
                  })}
                  isMulti
                  options={skills}
                  onChange={handleChange}
                ></Select>
                <div className="invalid-feedback">
                  {errors.skills?.type === "required" &&
                    "This field is required "}
                </div>
                <center>
                  <b>Selected Skills :- {displaySkill + " "}</b>
                </center>
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
          <h1 className="stepheading">Do you want to apply as a developer ?</h1>
          <Button title="Apply as a Developer" />
        </div>
      </div>
    </div>
  );
}
export default Skills;
