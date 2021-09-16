import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
// import Multiselect from "multiselect-react-dropdown";
import "./skillset.css";
function Skillset({
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
    navigation.next();
  };

  // const handlePrimary = (data) => {
  //   const [primaryskill1, primaryskill2] = data;
  //   // console.log(primaryskill1, primaryskill2);
  //   defaultData = { ...primaryskill1, ...primaryskill2 };
  //   console.log(defaultData);
  // };
  // const handleSecondary = (data) => {
  //   const [secondaryskill1, secondaryskill2] = data;
  //   defaultData = { ...secondaryskill1, ...secondaryskill2 };
  // };
  // const handleGoodToHaveSkills = (data) => {
  //   const [thirdskill1, thirdskill2] = data;
  //   defaultData = { ...thirdskill1, ...thirdskill2 };
  // };
  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <div className="form__section">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form__box">
                <label>Your Primary Skill *</label>
                <span className="subhead">
                  *Choose the primary skill that you are confident in based on
                  your project experience.
                </span>
                <textarea
                  className={classNames("form-control", {
                    "is-invalid": errors.primarySkill,
                  })}
                  {...register("primarySkill", {
                    required: true,
                  })}
                  type="text"
                  name="primaryskill"
                />
                <div className="invalid-feedback">
                  {errors.primarySkill?.type === "required" &&
                    "This field is required "}
                </div>
              </div>
              <div className="form__box">
                <label>And Your Secondary Skill *</label>
                <textarea
                  className={classNames("form-control", {
                    "is-invalid": errors.secondarySkill,
                  })}
                  {...register("secondarySkill", {
                    required: true,
                  })}
                  type="text"
                  name="secondaryskill"
                />
                <div className="invalid-feedback">
                  {errors.secondarySkill?.type === "required" &&
                    "This field is required "}
                </div>
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
          <h1 className="stepheading">Skillset</h1>
        </div>
      </div>
    </div>
  );
}
export default Skillset;
