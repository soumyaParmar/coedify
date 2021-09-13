import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "../../StepForms/personaldetail.css";
import Button from "../../../Components/Buttons/Hirebutton";
import { useHistory } from "react-router";

function Role({
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
              <div className="name form__box">
                <input
                  name="role"
                  placeholder="e.g. Full Stack, Frontend, Backend, etc"
                  className={classNames("form-control", {
                    "is-invalid": errors.role,
                  })}
                  {...register("role", {
                    required: true,
                  })}
                />
                <div className="invalid-feedback">
                  {errors.role?.type === "required" &&
                    "This field is required "}
                </div>
              </div>

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
