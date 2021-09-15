import React from "react-hook-form";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import Multiselect from "multiselect-react-dropdown";
import "./skillset.css";
function Skillset({ defaultData, register, handleSubmit, navigation }) {
  const onSubmit = (data) => {
    defaultData = { ...data };
    navigation.next();
  };
  const primarySkills = [
    {
      value: 1,
      label: "HTML",
    },
    {
      value: 2,
      label: "Javascript",
    },
    {
      value: 3,
      label: "CSS",
    },
    {
      value: 4,
      label: "NodeJs",
    },
    {
      value: 5,
      label: "ReactJs",
    },
    {
      value: 6,
      label: "VueJs",
    },
  ];
  const secondarySkills = [
    {
      value: 1,
      label: "Java",
    },
    {
      value: 2,
      label: "Express",
    },
    {
      value: 3,
      label: "React Native",
    },
    {
      value: 4,
      label: "Testing",
    },
    {
      value: 5,
      label: "ReactJs",
    },
    {
      value: 6,
      label: "VueJs",
    },
  ];
  const goodToHaveSkills = [
    {
      value: 1,
      label: "Firebase",
    },
    {
      value: 2,
      label: "MongoDb",
    },
    {
      value: 3,
      label: "Php",
    },
    {
      value: 4,
      label: "GraphQl",
    },
    {
      value: 5,
      label: "Flutter",
    },
    {
      value: 6,
      label: "Sql",
    },
  ];

  const handlePrimary = (data) => {
    console.log(data);
  };
  const handleSecondary = (data) => {
    console.log(data);
  };
  const handleGoodToHaveSkills = (data) => {
    console.log(data);
  };
  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <div className="form__section">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="form__box">
                <label>Primary Skill*</label>
                <span className="subhead">
                  *Choose that skill in which you have hands on experience and
                  you are confident to give interview in that skill
                </span>
                <Multiselect
                  options={primarySkills}
                  displayValue="label"
                  onSelect={handlePrimary}
                />
              </div>
              <div className="form__box">
                <label>Secondary Skills*</label>
                <span className="subhead">
                  *Choose that skill in which you have written some code in some
                  project and you are comfortable with it if you have given
                  project on that skill
                </span>
                <Multiselect
                  options={secondarySkills}
                  displayValue="label"
                  onSelect={handleSecondary}
                />
              </div>
              <div className="form__box">
                <label>Good to have Skills*</label>
                <span className="subhead">
                  *Choose that skill in which you have written some code in some
                  project and you are comfortable with it if you have given
                  project on that skill
                </span>
                <Multiselect
                  options={goodToHaveSkills}
                  displayValue="label"
                  onSelect={handleGoodToHaveSkills}
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
          <h1 className="stepheading">Skillset</h1>
        </div>
      </div>
    </div>
  );
}
export default Skillset;
