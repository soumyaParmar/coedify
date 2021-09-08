import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Button from "../../Components/Buttons/Hirebutton";
import { useHistory } from "react-router";

function PersonalDetails({
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

  const history = useHistory();
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
                  className={classNames("form-control", {
                    "is-invalid": errors.name,
                  })}
                  {...register("name", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z0-9 ]+$/,
                      message: "Enter valid name",
                    },
                  })}
                />
                <div className="invalid-feedback">
                  {errors.name?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.name?.type === "pattern" && errors.name?.message}
                </div>
              </div>
              <div className="email form__box">
                <label>Email*</label>
                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.email,
                  })}
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
                <div className="invalid-feedback">
                  {errors.email?.type === "required" &&
                    "This field is required "}
                </div>
                <small className="invalid-feedback">
                  {errors.email?.type === "pattern" && errors.email?.message}
                </small>
              </div>
              <div className="number form__box">
                <label>Phone Number*</label>
                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.number,
                  })}
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
                <div className="invalid-feedback">
                  {errors.number?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.number?.type === "pattern" && errors.number?.message}
                </div>
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
          <div onclick={() => history.push("./hiredev")}>
            <Button title="Hire Developer" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PersonalDetails;
