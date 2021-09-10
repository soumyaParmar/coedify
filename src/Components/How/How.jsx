import React from "react";
import "./How.css";
import First from "./First__Step.jpg";
import Second from "./Second__step.svg";
import Third from "./Third__Step.png";
import Fourth from "./Fourth__step.svg";
import Hirebutton from "../Buttons/Hirebutton";

function How() {
  return (
    <>
      <div id="howWeWork" style={{ height: "20px" }}></div>
      <div className="how">
        <h1 className="how__mainHeading">This is How We Work?</h1>
        <div className="how1">
          <div className="how1__left">
            <h1 className="how__heading">
              Tell us what kind of specific tech stack and experience level you
              need?
            </h1>
            <p className="how__para">
              Submit your technical job description via our interactive forms,
              the more details the better for us to find exact match. After we
              get the details, our tech expert will review and get in touch with
              you to find out more details to better understand your hiring
              need.
            </p>
            <div className="how__hirebutton">
              <Hirebutton title="Hire Developers" />
            </div>
          </div>
          <div className="how1__right">
            <img src={First} alt="imag" />
          </div>
        </div>
        <div className="how2">
          <div className="how2__left">
            <img src={Second} alt="img2" />
          </div>
          <div className="how2__right">
            <h1 className="how__heading">
              We will provide you status report concerning your request as
              quickly as possible.
            </h1>
            <ul>
              <li>
                We will handpick the suitable candidates for the job role from
                our pool of pre-screened candidates, then will arrange interview
                for you.
              </li>
              <li>
                We currently do not have pre-screened developer matching your
                exact tech requirements and we are in the process of screening
                the candidates, we will work actively to find one.
              </li>
            </ul>
          </div>
        </div>
        <div className="how3">
          <div className="how3__left">
            <h1 className="how__heading">
              They become part of team, assess the candidates by giving real
              work task.
            </h1>
            <ul>
              <li>
                Start the trail with the developer of your choice for one week
                before giving any commitments.{" "}
              </li>
              <li>
                Check the fitment and technical depth of the candidates and get
                confident for long term commitments.
              </li>
              <li>
                After you decide which developer you want to go ahead and
                integrate with your team, just like an in-house employee.
              </li>
              <li>
                If you are not satisfied for any reason, we will start all over
                again to give you best candidates.
              </li>
            </ul>
          </div>
          <div className="how3__right">
            <img src={Third} alt="img3" />
          </div>
        </div>
        <div className="how2">
          <div className="how2__left">
            <img src={Fourth} alt="img4" />
          </div>
          <div className="how2__right">
            <h1 className="how__heading"> Integrate them at No-Risk </h1>
            <p className="how__para">
              After the one week trail is over and if you are 100% satisfied
              with our CoEdified candidates, we will sign-off the contracts and
              they are ready to be integrated in your team like your in-house
              employee.
            </p>
            <div className="how__hirebutton">
              <Hirebutton title="Hire Developers" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default How;
