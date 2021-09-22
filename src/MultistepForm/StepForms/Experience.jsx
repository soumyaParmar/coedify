import React from "react-hook-form";
import FormBanner from "../../Components/FormBanner/FormBanner";
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
                  style={{ margin: "auto" }}
                  className={classNames("form-control", {
                    "is-invalid": errors.experience,
                  })}
                  name="experience"
                  {...register("experience", { required: true })}
                >
                  <option value="" defaultValue>
                    Experience*
                  </option>
                  <option value="freshers">Freshers</option>
                  <option value="1-3 Years">1-3 Years</option>
                  <option value="3-6 Years">3-6 Years</option>
                  <option value="6+ Years">6+ Years</option>
                </select>
                <div className="invalid-feedback">
                  {errors.experience && "This field is required"}
                </div>
              </div>
              <div className="email form__box">
                <label className="dropdown__label">Current Status*</label>
                <select
                  style={{ margin: "auto" }}
                  className={classNames("form-control", {
                    "is-invalid": errors.status,
                  })}
                  name="status"
                  {...register("status", { required: true })}
                >
                  <option value="" defaultValue>
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
                  style={{ margin: "auto" }}
                  className={classNames("form-control", {
                    "is-invalid": errors.salary,
                  })}
                  name="salary"
                  {...register("salary", { required: true })}
                >
                  <option value="" defaultValue>
                    Salary Expectations(LPA)*
                  </option>
                  <option value="3-5 LPA">Upto 5 LPA</option>
                  <option value="6-8 LPA">5-8 LPA</option>
                  <option value="8-15 LPA">8-15 LPA</option>
                  <option value="15-20 LPA">15+ LPA</option>
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
          <h2 className="form__banner">Trusted By</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default Experience;
