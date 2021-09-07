import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Button from "../../Components/Buttons/Hirebutton";
function PersonalDetails({
  defaultData,
  register,
  handleSubmit,
  errors,
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
            <h1 className="form__heading">Personal Details</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <label>Name*</label>
                <input
                  className="input"
                  {...register("name", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z0-9 ]+$/,
                      message: "Enter valid name",
                    },
                  })}
                />
                <small>
                  {errors.name?.type === "required" &&
                    "This field is required "}
                </small>
                <small>
                  {errors.name?.type === "pattern" && errors.name?.message}
                </small>
              </div>
              <div className="email form__box">
                <label>Email*</label>
                <input
                  className="input"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Enter a valid email",
                    },
                  })}
                  name="email"
                />
                <small>
                  {errors.email?.type === "required" &&
                    "This field is required "}
                </small>
                <small>
                  {errors.email?.type === "pattern" && errors.email?.message}
                </small>
              </div>
              <div className="number form__box">
                <label>Phone Number*</label>
                <input
                  className="input"
                  type="number"
                  {...register("number", {
                    required: true,
                    pattern: {
                      value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  name="number"
                />
                <small>
                  {errors.number?.type === "required" &&
                    "This field is required "}
                </small>
                <small>
                  {errors.number?.type === "pattern" && errors.number?.message}
                </small>
              </div>
              <div className="navigation__btns">
                <button className="next__btn" type="submit">
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
