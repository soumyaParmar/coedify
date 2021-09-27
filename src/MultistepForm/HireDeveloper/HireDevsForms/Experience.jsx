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
                    id="6-3"
                  />
                  <label className="form-check-label" htmlFor="6-3">
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
                    id="3-6"
                  />
                  <label className="form-check-label" htmlFor="3-6">
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
                    id="6+"
                  />
                  <label htmlFor="6+" className="form-check-label">
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
        <div className="step1__right">
          <h2 className="form__banner">Our developers are working here</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default Role;
