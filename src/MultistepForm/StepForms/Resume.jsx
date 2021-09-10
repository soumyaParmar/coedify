import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import "./skillset.css";
function Resume({
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
                  className={classNames("form-control", {
                    "is-invalid": errors.resume,
                  })}
                  {...register("resume", { required: true })}
                  type="file"
                  name="resume"
                />
                <div className="invalid-feedback">
                  {errors.resume?.type === "required" &&
                    "This field is required "}
                </div>
              </div>
              <div className="email form__box">
                <label>LinkedIN URL*</label>
                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.resume,
                  })}
                  type="url"
                  {...register("linkedinurl", {
                    required: true,
                    pattern: {
                      value:
                        /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
                      message: "Enter a valid Link",
                    },
                  })}
                  name="linkedinurl"
                />
                <div className="invalid-feedback">
                  {errors.linkedinurl?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.linkedinurl?.type === "pattern" &&
                    errors.linkedinurl?.message}
                </div>
              </div>
              <div className="email form__box">
                <label>Github URL*</label>

                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.githuburl,
                  })}
                  type="url"
                  {...register("githuburl", { required: true })}
                  name="githuburl"
                />
                <div className="invalid-feedback">
                  {errors.githuburl?.type === "required" &&
                    "This field is required "}
                </div>
              </div>
              <div className="email form__box">
                <label>Personal Portfolio URL (If any)</label>

                <input
                  className="input"
                  type="url"
                  {...register("portfoliourl")}
                  name="portfoliourl"
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
