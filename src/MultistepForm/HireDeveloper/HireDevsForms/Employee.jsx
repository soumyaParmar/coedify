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
              How many people are currently employed in your company?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="lessthan10"
                    id="lessthan10"
                    {...register("numOfEmployee", { required: true })}
                    name="numOfEmployee"
                  />
                  <label className="form-check-label" htmlFor="lessthan10">
                    Less than 10
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="numOfEmployee"
                    {...register("numOfEmployee", { required: true })}
                    value="10-50"
                    id="10-50"
                  />
                  <label className="form-check-label" htmlFor="10-50">
                    10-50
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="numOfEmployee"
                    {...register("numOfEmployee", { required: true })}
                    value="50+"
                    id="50+"
                  />
                  <label className="form-check-label" htmlFor="50+">
                    50+
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
