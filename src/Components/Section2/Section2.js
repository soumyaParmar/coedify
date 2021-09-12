import React from "react";
// import logo from "./tick.png";
import "./section2.css";

const Section2 = () => {
  return (
    <div className="sec2">
      <h1 className="heading">On Demand Amazing Developers</h1>
      <div className="section2">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
};

export default Section2;

function Box() {
  return (
    <>
      {/* <div className="sec2__Box">
        <div className="sec2Box__logo">
          <img className="sec2__img" src={logo} alt="logo" />
        </div>
        <div className="sec2Box__content">
          <p className="sec2__para">
            Hire for proven skills train by us, rated by us.
          </p>
        </div>
      </div> */}
      {/* <div class="card mx-5 my-3">
        <img src={logo} class="card-img-top sec2__img" alt="..." />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div> */}
    </>
  );
}
