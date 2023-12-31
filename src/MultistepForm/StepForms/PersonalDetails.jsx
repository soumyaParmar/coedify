import React from "react-hook-form";
import { useHistory } from "react-router";
import FormBanner from "../../Components/FormBanner/FormBanner";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";

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
          <img
            style={{ cursor: "pointer" }}
            className="form__logo"
            onClick={() => history.push("/")}
            src={logo}
            alt="logo"
          />
          <h1 className="getyoustared">
            Join the community of smart developers
          </h1>
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
                      value: /^(\+\d{1,3}[- ]?)?\d{11}$/,
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
          <h2 className="form__banner">Our developers are working here</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default PersonalDetails;
