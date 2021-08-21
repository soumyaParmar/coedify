import React from "react";
import "./hero.css";
function Hero() {
  return (
    <section className="hero">
      <section className="hero__left">
        <p>A Digital Agency</p>
        <h1>We're A Full-Range Digital Agency.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="hero__buttons">
          <span className="btn__getStarted">Get Started</span>
          <span className="btn__howItWork">How it Works</span>
        </div>
      </section>
      <section className="hero__right">
        <img
          src="https://images.unsplash.com/photo-1573495628363-04667cedc587?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNvZnR3YXJlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="img"
        />
      </section>
    </section>
  );
}

export default Hero;
