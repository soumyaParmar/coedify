import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./Experience.css";
import "./personaldetail.css";
// import Button from "../../Components/Buttons/Hirebutton";
function Experience({ defaultData, register, handleSubmit, navigation }) {
  const onSubmit = (data) => {
    defaultData = { ...data };
    console.log(defaultData);
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
                <label>Experience*</label>
                <input
                  className="input"
                  {...register("exp")}
                  type="name"
                  name="exp"
                />
              </div>
              <div className="email form__box">
                <label>Current Status*</label>
                <input
                  className="input"
                  type="text"
                  {...register("any")}
                  name="any"
                />
              </div>
              <div className="number form__box">
                <label>Salary Expectations(PA)*</label>
                <input
                  className="input"
                  type="number"
                  {...register("salary")}
                  name="salary"
                />
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
          {/* <Button /> */}
        </div>
      </div>
    </div>
  );
}
export default Experience;
