import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Button from "../../Components/Buttons/Hirebutton";
function Skillset({ defaultData, register, handleSubmit, navigation }) {
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
          <h1>Personal Details</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="name form__box">
              <label>skill*</label>
              <input
                className="input"
                {...register("skill")}
                type="name"
                name="skill"
              />
            </div>
            <div className="email form__box">
              <label>Email*</label>
              <input
                className="input"
                type="text"
                {...register("topskill")}
                name="topskill"
              />
            </div>

            <div className="navigation__btns">
              <button className="next__btn" type="submit">
                Next
              </button>
            </div>
          </form>
        </div>
        <div className="step1__right">
          <h1 className="stepheading">Do you want to hire developers?</h1>
          <Button />
        </div>
      </div>
    </div>
  );
}
export default Skillset;
