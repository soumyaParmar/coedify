import React from "react-hook-form";
import { useHistory } from "react-router-dom";
import logo from "./CoEdify-logo.png";
import "./personaldetail.css";
import "./submit.css";

function Submit({ defaultData, register, handleSubmit, navigation }) {
  let history = useHistory();

  return (
    <div className="form1">
      <div className="step1">
        <div className="step1__left">
          <img className="form__logo" src={logo} alt="logo" />
          <h1 className="submit__heading">Your form has been submitted</h1>
          <span className="submit__subheading">
            Someone from our team contact you shortly
          </span>

          <button className="backtohome__btn" onClick={() => history.push("/")}>
            Back to Home
          </button>
        </div>
        <div className="step1__right">
          {/* <h1 className="stepheading">Resume & Personal Profiles</h1> */}
        </div>
      </div>
    </div>
  );
}
export default Submit;
