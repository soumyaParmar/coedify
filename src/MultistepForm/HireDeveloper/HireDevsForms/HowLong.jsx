import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "../../StepForms/personaldetail.css";

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
                    class="form-check-input"
                    type="radio"
                    id="six12"
                    value="6-12 months"
                    {...register("howlong", { required: true })}
                    name="howlong"
                  />
                  <label className="form-check-label" htmlfor="six12">
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
                  <label className="form-check-label" htmlfor="Twelve">
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
        <div className="step1__right"></div>
      </div>
    </div>
  );
}
export default Role;
