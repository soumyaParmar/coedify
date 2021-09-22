import React from "react-hook-form";
import FormBanner from "../../Components/FormBanner/FormBanner";
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
                <label>Github URL</label>

                <input
                  className={classNames("form-control", {
                    "is-invalid": errors.githuburl,
                  })}
                  type="url"
                  {...register("githuburl")}
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
              <div className="name form__box">
                <label>Your Resume Summary*</label>

                <span className="subhead">
                  *Please write your professional summary here in minimum 500
                  words
                </span>
                <textarea
                  className={classNames("form-control", {
                    "is-invalid": errors.summary,
                  })}
                  {...register("summary", {
                    required: true,
                    minLength: 500,
                    maxLength: 2000,
                  })}
                  type="text"
                  name="summary"
                />
                <div className="invalid-feedback">
                  {errors.summary?.type === "required" &&
                    "This field is required "}
                </div>
                <div className="invalid-feedback">
                  {errors.summary?.type === "minLength" &&
                    "Enter atleast 500 words "}
                </div>
                <div className="invalid-feedback">
                  {errors.summary?.type === "maxLength" &&
                    "Exceeding word limit "}
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
          <h2 className="form__banner">
            Leading Companies hire our developers
          </h2>
          <FormBanner />
        </div>
      </div>
    </div>
  );
}
export default Resume;
