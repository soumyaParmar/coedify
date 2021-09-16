import { useContext } from "react";
import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Swal from "sweetalert2";
import "./submit.css";
import "./skillset.css";
import { useHistory } from "react-router";
import { FirebaseContext } from "./../../context/firebase";

function POF({
  defaultData,
  register,
  handleSubmit,
  errors,
  classNames,
  navigation,
}) {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  console.log(firebase);
  const onSubmit = (data) => {
    defaultData = { ...data };
    // firebase.firestore();
    console.log(defaultData);
    successAlert();
  };

  const successAlert = () => {
    history.push("/");
    Swal.fire({
      title: "Your form has been submitted.",
      text: "Someone from our team contact you shortly",
      icon: "success",
    });
  };

  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <div className="form__section">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form__box">
                <label>What is the best project you have worked on? *</label>
                <span className="subhead">
                  *Write the details in description in minimum 100 words
                </span>
                <textarea
                  className={classNames("form-control", {
                    "is-invalid": errors.bestproject,
                  })}
                  {...register("bestproject", {
                    required: true,
                    minLength: 100,
                  })}
                  type="text"
                  name="bestproject"
                />
                <div className="invalid-feedback">
                  {errors.bestproject?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.bestproject?.type === "minLength" &&
                    "Enter atleast 100 words "}
                </div>
              </div>
              <div className="form__box">
                <label>
                  How will you explain technology to a 12-year old ? *
                </label>
                <span className="subhead">
                  *Write honestly in minimum 100 words
                </span>
                <textarea
                  className={classNames("form-control", {
                    "is-invalid": errors.explaintech,
                  })}
                  type="text"
                  {...register("explaintech", {
                    required: true,
                    minLength: 100,
                  })}
                  name="explaintech"
                />
                <div className="invalid-feedback">
                  {errors.explaintech?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.explaintech?.type === "minLength" &&
                    "Enter atleast 100 words"}
                </div>
              </div>
              <div className="drop form__box">
                <label className="dropdown__label">
                  Where did you hear about CoEdify ? *
                </label>

                <select
                  className={classNames("form-control", {
                    "is-invalid": errors.experience,
                  })}
                  name="experience"
                  {...register("experience", { required: true })}
                >
                  <option value="" selected>
                    Where did you hear about CoEdify ? *
                  </option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="instagram">Instagram</option>
                  <option value="facebook">Facebook</option>
                  <option value="friends">A friend of mine</option>
                  <option value="quora">Quora</option>
                </select>
                <div
                  className="invalid-feedback"
                  style={{ marginLeft: "20px" }}
                >
                  {errors.experience && "This field is required"}
                </div>
              </div>

              <div className="navigation__btns">
                <button
                  className="back__btn"
                  onClick={() => navigation.previous()}
                >
                  Back
                </button>
                <button className="submit__btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="step1__right">
          <h1 className="stepheading">Proof of Work</h1>
        </div>
      </div>
    </div>
  );
}
export default POF;
