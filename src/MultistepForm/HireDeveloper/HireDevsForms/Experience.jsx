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
    console.log(data);
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
              How much experience do you need for developers?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="0-3"
                    {...register("experience", { required: true })}
                    name="experience"
                  />
                  <label className="form-check-label" htmlfor="permanentbased">
                    6 Months to 3 Years
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="experience"
                    {...register("experience", { required: true })}
                    value="3-6"
                  />
                  <label
                    className="form-check-label"
                    htmlfor=" ContractualBased"
                  >
                    3 Years to 6 Years
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="experience"
                    {...register("experience", { required: true })}
                    value="6+"
                  />
                  <label
                    className="form-check-label"
                    htmlfor=" ContractualBased"
                  >
                    6+ Years
                  </label>
                </div>

                <div className="invalid-feedback">
                  {errors.state && errors.state.message}
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
