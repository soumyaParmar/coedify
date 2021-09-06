import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import "./skillset.css";
function Resume({ defaultData, register, handleSubmit, navigation }) {
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
                <label>Upload your CV*</label>

                <input
                  className="input"
                  {...register("skill")}
                  type="name"
                  name="skill"
                />
              </div>
              <div className="email form__box">
                <label>LinkedIN URL*</label>

                <input
                  className="input"
                  type="text"
                  {...register("topskill")}
                  name="topskill"
                />
              </div>
              <div className="email form__box">
                <label>Github URL*</label>

                <input
                  className="input"
                  type="text"
                  {...register("topskill")}
                  name="topskill"
                />
              </div>
              <div className="email form__box">
                <label>Personal Portfolio URL (If any)</label>

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
          <h1 className="stepheading">Resume & Personal Profiles</h1>
        </div>
      </div>
    </div>
  );
}
export default Resume;
