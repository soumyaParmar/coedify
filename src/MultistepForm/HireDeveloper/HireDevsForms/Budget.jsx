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
              Please specify each developer's annual budget (INR).
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="6to12LPA"
                    {...register("budget", { required: true })}
                    name="budget"
                  />
                  <label className="form-check-label" htmlFor="permanentbased">
                    6 to 12 LPA
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="budget"
                    {...register("budget", { required: true })}
                    value="12to24LPA"
                  />
                  <label
                    className="form-check-label"
                    htmlFor=" ContractualBased"
                  >
                    12-24 LPA
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="budget"
                    {...register("budget", { required: true })}
                    value="24+LPA"
                  />
                  <label
                    className="form-check-label"
                    htmlFor=" ContractualBased"
                  >
                    24+ LPA
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
          <h2 className="form__banner">Trusted By</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default Role;
