import React, { useState } from "react";
import { db } from "../../lib/firebase-config";
import { storage, ref, uploadBytes } from "../../lib/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Swal from "sweetalert2";
import "./submit.css";
import "./skillset.css";
import { useHistory } from "react-router";

function POF({
  defaultData,
  register,
  handleSubmit,
  errors,
  classNames,
  navigation,
}) {
  const [resume, setResume] = useState("");
  const history = useHistory();
  const onSubmit = (data) => {
    setResume(data.resume[0]);
    defaultData = { ...data };
    if (resume === null) return;
    const spaceRef = ref(storage, `resumes`);
    uploadBytes(spaceRef, resume).then((snapshot) => console.log("uploaded"));

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
      resume: defaultData.resume[0].name,
      salary: defaultData.salary,
      secondarySkills: defaultData.secondarySkills,
      status: defaultData.status,
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
          <h1 className="stepheading">Proof of Work</h1>
        </div>
      </div>
    </div>
  );
}
export default POF;
