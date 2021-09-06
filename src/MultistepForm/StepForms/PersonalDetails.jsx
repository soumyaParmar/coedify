import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Button from "../../Components/Buttons/Hirebutton";
function PersonalDetails({ defaultData, register, handleSubmit, navigation }) {
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
            <h1 className="form__heading">Personal Details</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form"
              autoComplete="off"
            >
              <div className="name form__box">
                <label>Name*</label>
                <input
                  className="input"
                  {...register("name")}
                  type="name"
                  name="name"
                />
              </div>
              <div className="email form__box">
                <label>Email*</label>
                <input
                  className="input"
                  type="email"
                  {...register("email")}
                  name="email"
                />
              </div>
              <div className="number form__box">
                <label>Phone Number*</label>
                <input
                  className="input"
                  type="number"
                  {...register("number")}
                  name="number"
                />
              </div>
              <div className="navigation__btns">
                <button
                  className="next__btn"
                  onClick={() => navigation.next()}
                  type="submit"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="step1__right">
          <h1 className="stepheading">Do you want to hire developers?</h1>
          <Button />
        </div>
      </div>
    </div>
  );
}
export default PersonalDetails;
