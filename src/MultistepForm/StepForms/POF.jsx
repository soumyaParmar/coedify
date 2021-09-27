import React from "react";
import { db } from "../../lib/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Swal from "sweetalert2";
import "./submit.css";
import "./skillset.css";
import { useHistory } from "react-router";
import FormBanner from "../../Components/FormBanner/FormBanner";

function POF({
  defaultData,
  register,
  handleSubmit,
  errors,
  classNames,
  navigation,
}) {
  // const curr_date = new Date();
  // const d = curr_date.getDate();
  // const m = curr_date.getMonth();
  // const y = curr_date.getFullYear();
  // let t = `${d}/${m}/${y}`;
  // const new_date = curr_date.to

  const history = useHistory();
  const onSubmit = (data) => {
    defaultData = { ...data };

    addDoc(collection(db, "applyasdev"), {
      techEssay: defaultData.bestproject,
      email: defaultData.email,
      experience: defaultData.experience,
      githuburl: defaultData.githuburl,
      heard: defaultData.heard,
      linkedinurl: defaultData.linkedinurl,
      name: defaultData.name,
      number: defaultData.number,
      portfoliourl: defaultData.portfoliourl,
      primarySkills: defaultData.primarySkills,
      salary: defaultData.salary,
      secondarySkills: defaultData.secondarySkills,
      status: defaultData.status,
      summary: defaultData.summary,
      timeStamp: new Date().toLocaleString(),
    })
      .then(() => successAlert())
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

  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <div className="form__section">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form__box">
                <label>
                  Precisely explain your personality, professional experience
                  and the technology stack you are interested to work in
                  future?*
                </label>
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
                    maxLength: 2000,
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
                <div className="invalid-feedback">
                  {errors.bestproject?.type === "maxLength" &&
                    "Exceeding word limit "}
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
                  name="heard"
                  {...register("heard", { required: true })}
                >
                  <option value="" defaultValue>
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
                  {errors.heard && "This field is required"}
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
          <h2 className="form__banner">Our developers are working here</h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default POF;
