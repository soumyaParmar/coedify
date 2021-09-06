import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import "./skillset.css";
function POF({ defaultData, register, handleSubmit, navigation }) {
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
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="name form__box">
                <label>What is the best project you have worked on? *</label>
                <span className="subhead">
                  *Write the details in description in minimum 100 words
                </span>
                <input
                  className="input"
                  {...register("skill")}
                  type="name"
                  name="skill"
                />
              </div>
              <div className="email form__box">
                <label>
                  How will you explain technology to a 12-year old ? *
                </label>
                <span className="subhead">
                  *Write honestly in minimum 100 words
                </span>
                <input
                  className="input"
                  type="text"
                  {...register("topskill")}
                  name="topskill"
                />
              </div>
              <div className="email form__box">
                <label>Where did you hear about CoEdify ? *</label>

                <input
                  className="input"
                  type="text"
                  {...register("topskill")}
                  name="topskill"
                />
              </div>

              <div className="navigation__btns">
                <button
                  className="back__btn"
                  onClick={() => navigation.previous()}
                >
                  Back
                </button>
                <button className="next__btn" type="submit">
                  Next
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
