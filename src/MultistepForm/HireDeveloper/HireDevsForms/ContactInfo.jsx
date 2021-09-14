import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "../../StepForms/personaldetail.css";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
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
    console.log(defaultData);
    successAlert();
    history.push("/");
  };

  const successAlert = () => {
    history.push("/");
    Swal.fire({
      title: "Your form has been submitted.",
      text: "Someone from our team contact you shortly",
      icon: "success",
    });
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
              <div className="email form__box">
                <label>Company Name*</label>
                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.company?.type === "required",
                  })}
                  type="text"
                  {...register("company", { required: true })}
                  name="company"
                />
                <div className="invalid-feedback">
                  {errors.company?.type === "required" &&
                    "This field is required "}
                </div>
              </div>
              <div className="number form__box">
                <label>Email*</label>
                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.email?.type,
                  })}
                  type="email"
                  {...register("email", {
                    required: true,
                  })}
                  name="email"
                />
                <div className="invalid-feedback">
                  {errors.email?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.email?.type === "pattern" && errors.email?.message}
                </div>
              </div>
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
              <div className="navigation__btns">
                <button className="submit__btn" type="submit">
                  Submit
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
export default PersonalDetails;
