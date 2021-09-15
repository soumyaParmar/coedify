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
              How many people are employed at your company?
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="lessthan10"
                    {...register("numOfEmployee", { required: true })}
                    name="numOfEmployee"
                  />
                  <label class="form-check-label" for="permanentbased">
                    Less than 10
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="numOfEmployee"
                    {...register("numOfEmployee", { required: true })}
                    value="11-60"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    11 - 60
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="numOfEmployee"
                    {...register("numOfEmployee", { required: true })}
                    value="61-200"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    61 - 200
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="numOfEmployee"
                    {...register("numOfEmployee", { required: true })}
                    value="200-1000"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    200 - 1000
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="numOfEmployee"
                    {...register("numOfEmployee", { required: true })}
                    value="morethan1000"
                  />
                  <label class="form-check-label" for=" ContractualBased">
                    More than 1000
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
