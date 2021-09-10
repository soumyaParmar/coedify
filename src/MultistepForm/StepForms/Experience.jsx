import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./Experience.css";
import "./personaldetail.css";
// import Button from "../../Components/Buttons/Hirebutton";
function Experience({
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form"
              autoComplete="off"
            >
              <div className="name form__box">
                <label className="dropdown__label">Experience*</label>
                <select
                  className={classNames("form-control", {
                    "is-invalid": errors.experience,
                  })}
                  name="experience"
                  {...register("experience", { required: true })}
                >
                  <option value="" selected>
                    Experience*
                  </option>
                  <option value="0-3years">0-3 years</option>
                  <option value="3-5years">3-5 years</option>
                  <option value="morethan5">More than 5</option>
                </select>
                <div className="invalid-feedback">
                  {errors.experience && "This field is required"}
                </div>
              </div>
              <div className="email form__box">
                <label className="dropdown__label">Current Status*</label>
                <select
                  className={classNames("form-control", {
                    "is-invalid": errors.status,
                  })}
                  name="status"
                  {...register("status", { required: true })}
                >
                  <option value="" selected>
                    Current Status*
                  </option>
                  <option value="employed">Employed</option>
                  <option value="unemployed">Unemployed</option>
                </select>
                <div className="invalid-feedback">
                  {errors.status && "This field is required"}
                </div>
              </div>
              <div className="number form__box">
                <label className="dropdown__label">
                  Salary Expectations(LPA)*
                </label>
                <select
                  className={classNames("form-control", {
                    "is-invalid": errors.salary,
                  })}
                  name="salary"
                  {...register("salary", { required: true })}
                >
                  <option value="" selected>
                    Salary Expectations(LPA)*
                  </option>
                  <option value="0-3years">3-5 lakh</option>
                  <option value="5-7lakh">5-7 lakh</option>
                  <option value="7-9lakh">7-9 lakh</option>
                  <option value="morethan10">More than 10 lakh</option>
                </select>
                <div className="invalid-feedback">
                  {errors.salary && "This field is required"}
                </div>
              </div>

              <div className="navigation__btns">
                <button
                  className="back__btn"
                  onClick={() => navigation.previous()}
                >
                  Back
                </button>
                <button className="next__btn" type="submit">
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="step1__right">
          <h1 className="stepheading">Availibility and Expectation</h1>
        </div>
      </div>
    </div>
  );
}
export default Experience;
