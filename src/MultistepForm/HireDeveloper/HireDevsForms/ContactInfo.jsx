import React from "react-hook-form";
import { db } from "../../../lib/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import logo from "./CoEdify-logo.png";
import FormBanner from "../../../Components/FormBanner/FormBanner";
import "../../StepForms/personaldetail.css";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
function PersonalDetails({
  defaultData,
  register,
  handleSubmit,
  role,
  errors,
  classNames,
  navigation,
}) {
  const onSubmit = (data) => {
    defaultData = { ...data };
    // console.log(defaultData);
    addDoc(collection(db, "hiredevdata"), {
      budget: defaultData.budget,
      company: defaultData.company,
      email: defaultData.email,
      techStack: role,
      experience: defaultData.experience,
      howlong: defaultData.howlong,
      name: defaultData.name,
      numOfDevs: defaultData.numOfDevs,
      numOfEmployee: defaultData.numOfEmployee,
      phone: defaultData.phone,
      whenToJoin: defaultData.whenToJoin,
    })
      .then(() => {
        successAlert();
        history.push("/");
      })
      .catch((err) => console.log(err));
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
            <h1 className="form__heading">Little more details about you.</h1>
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
                <label>Company Email*</label>
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

              <div className="number form__box">
                <label>Phone Number*</label>
                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.phone,
                  })}
                  type="number"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  name="phone"
                />
                <div className="invalid-feedback">
                  {errors.phone?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.phone?.type === "pattern" && errors.phone?.message}
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
        <div className="step1__right">
          <h2 className="form__banner">Our developers are working here</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default PersonalDetails;
