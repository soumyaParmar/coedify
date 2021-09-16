import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "../../StepForms/personaldetail.css";
// import Button from "../../../Components/Buttons/Hirebutton";

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
              {" "}
              Please specify each developer's annual budget (INR).
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="6to12LPA"
                    {...register("budget", { required: true })}
                    name="budget"
                  />
                  <label class="form-check-label" for="permanentbased">
                    6 to 12 LPA
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="budget"
                    {...register("budget", { required: true })}
                    value="12to24LPA"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    12-24 LPA
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="budget"
                    {...register("budget", { required: true })}
                    value="24+LPA"
                  />
                  <label class="form-check-label" for=" ContractualBased">
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
          {/* <h1 className="stepheading">Do you want to apply as a developer ?</h1>
          <Button title="Apply as a Developer" /> */}
        </div>
      </div>
    </div>
  );
}
export default Role;
