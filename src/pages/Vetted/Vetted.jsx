import React from "react";
import "./vetted.css";
import HeaderImg from "./vetting.svg";
import Gradient from "../../Components/Gradient/Gradient";
import img1 from "./urban-852.png";
import img2 from "./soft-skill.png";
import img3 from "../WhyUs/whyus_2.svg";
import img4 from "./adaptablity.svg";
import img5 from "./problem-solving.svg";
import img6 from "./profile.svg";
import Button from "../../Components/Buttons/Hirebutton";
function Vetted() {
  return (
    <div className="vet__cover">
      <div className="vet__section1">
        <div className="vet1__left">
          <span className="vet1__span">Vetting Process</span>
          <h1 className="vet1__heading">Our talents are our real asset.</h1>
          <p className="vet1__p">
            Quality you can trust always. We make a huge effort to find, filter
            and polish to meet the ever-changing technology stack required by
            start-ups and the established organization.
          </p>
          <div className="vet1__btn">
            <Button title="Hire Developers" />
          </div>
        </div>
        <div className="vet1__right">
          <img className="vet1__img" src={HeaderImg} alt="img" />
        </div>
      </div>
      <div className="vet__section2">
        <div className="vet2">
          <h1 className="vet2__heading">Here’s how we vetted our developers</h1>
          <div className="vet2__1">
            <div className="vet2__1left">
              <img className="vet2__img" src={img1} alt="img1" />
            </div>
            <div className="vet2__1right">
              <h1 className="vet2__1heading">Candidate Screening </h1>
              <p className="vet2__1para">
                Our HR team does first screening by evaluating candidate resume
                with the specific "must have" technical competence and previous
                relevant work experience required by your hiring managers.
                <br />
                Although we don't give much importance to their educational
                background and years of experience they have accumulated, we
                give more weightage on adaptability and problem solving skills.
              </p>
            </div>
          </div>
          <div className="vet2__2">
            <div className="vet2__2left">
              <h1 className="vet2__2heading">Test of Soft Skill </h1>
              <p className="vet2__2para">
                Tradition interviews fail miserably assessing candidate soft
                skills and research shows soft skills are even more important
                than technical skills to make a team productive and successful.
                Assessing soft skills is even harder and we do not believing in
                asking question to test this, we believe in practical
                evaluation. By soft skills, we particularly checking
                collaboration and communication. We usually test this by
                assigning a technical task to group of developers with mixed
                experience to solve and come out with an execution plan. We
                evaluate everyone contribution and asses the results.
              </p>
            </div>
            <div className="vet2__2right">
              <img className="vet2__img2" src={img3} alt="img1" />
            </div>
          </div>
          <div className="vet2__3">
            <div className="vet2__3left">
              <img className="vet2__img3" src={img4} alt="img1" />
            </div>
            <div className="vet2__3right">
              <h1 className="vet2__3heading">
                Test of Adaptability and Resiliency
              </h1>
              <p className="vet2__3para">
                <i>
                  {" "}
                  In today's constantly changing business and tech requirements,
                  adaptability is the key for survival.
                </i>{" "}
                Technology companies needs a team which can be adaptable and
                resilient to sudden changes in project technical stack. We find
                it critically important and we have unique way of figuring out
                this ability. We evaluate candidates true engineering skill by
                giving them problems which is not related to their current
                technical skill set. Candidate is asked to use internet and
                solve the task in a given time frame. This shows true
                engineering skills and it proves candidate can deal future
                challenges with ease.
              </p>
            </div>
          </div>
          <div className="vet2__4">
            <div className="vet2__4left">
              <h1 className="vet2__4heading">
                Test of Problem solving ability using tech stack defined by
                hiring managers
              </h1>
              <p className="vet2__4para">
                This is the test to prove candidates possess required skill set
                to quickly show productive results and value to your team. Based
                on the job requirements we carefully design real life problem
                that every candidate has to solve to qualify this round. The
                problem set is carefully chosen based on the discussion with
                hiring manager and their project requirements.
              </p>
            </div>
            <div className="vet2__4right">
              <img className="vet2__img4" src={img5} alt="img1" />
            </div>
          </div>
          <div className="vet2__5">
            <div className="vet2__5left">
              <img className="vet2__img5" src={img2} alt="img1" />
            </div>
            <div className="vet2__5right">
              <h1 className="vet2__5heading">Upskilling and Training</h1>
              <p className="vet2__5para">
                Surprised, yes we are team of highly experts in our domain and
                when we see a potential candidates who qualify all above
                criteria but lacking the few skill set we put into rigorous
                training to match the hiring manager demands. Once we get
                satisfied then only we share the profile.
              </p>
            </div>
          </div>
          <div className="vet2__6">
            <div className="vet2__6left">
              <h1 className="vet2__6heading">
                Building a profile and sharing with you
              </h1>
              <p className="vet2__6para">
                The profile we share is tailor made by us with a clear and
                objective insight giving you the empirical data on all necessary
                key criteria that will help you to make an informed decisions.
                {/* Have a look at our{" "}
                <a href="https://www.coedify.com"> sample profiles </a>. */}
              </p>
            </div>
            <div className="vet2__6right">
              <img className="vet2__img6" src={img6} alt="img1" />
            </div>
          </div>
        </div>
      </div>
      <div className="vet__grad">
        <Gradient />
      </div>
    </div>
  );
}

export default Vetted;
