import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "../../StepForms/personaldetail.css";
import FormBanner from "../../../Components/FormBanner/FormBanner";

function Role({
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

  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <div className="form__section">
            <h1 className="form__heading2">
              For how long you require developers?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="six12"
                    value="6-12 months"
                    {...register("howlong", { required: true })}
                    name="howlong"
                  />
                  <label className="form-check-label" htmlFor="six12">
                    6 to 12 Months
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="twelve"
                    name="howlong"
                    {...register("howlong", { required: true })}
                    value="12+months"
                  />
                  <label className="form-check-label" htmlFor="twelve">
                    12+ Months
                  </label>
                </div>
                <div className="invalid-feedback">
                  {errors.type?.type === "required" &&
                    "This field is required "}
                </div>
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
export default Role;
