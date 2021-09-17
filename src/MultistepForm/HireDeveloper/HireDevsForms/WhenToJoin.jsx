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
              When do you want developers join your company?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="immediately"
                    {...register("whenToJoin", { required: true })}
                    name="whenToJoin"
                  />
                  <label class="form-check-label" for="permanentbased">
                    Immediately
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="whenToJoin"
                    {...register("whenToJoin", { required: true })}
                    value="1-2_Weeks"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    In 1-2 weeks
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="whenToJoin"
                    {...register("whenToJoin", { required: true })}
                    value="morethan2"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    More than 2 weeks
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="whenToJoin"
                    {...register("whenToJoin", { required: true })}
                    value="tellyoulater"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    I’ll tell you later
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
