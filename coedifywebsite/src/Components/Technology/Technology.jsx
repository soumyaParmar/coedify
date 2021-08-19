import React from "react";
import Card from "./Card";
import "./Technology.css";

function Technology() {
  return (
    <>
      <div className="tech">
        <h1 className="tech__title"> Hire Angular Developers</h1>
        <p className="tech__para">
          We consider ourselves as experts at Angular having built successful
          web solutions for more than 100+ clients worldwide. Our experienced
          programmers are specialists who constantly research and experiment
          more with the tech stack to produce the best deliverables for our
          partners
        </p>
        <span className="tech__btn">Get Started</span>
      </div>
      <div className="tech__2">
        <div className="tech__heading">
          <h1>Hire expert Angular developers from CoEdify for building</h1>
          <div className="tech__details">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="whyChoose">
        <h1>Why CoEdify for Angular Development</h1>
        <div className="keyPoints">
          <div className="key__card">
            <ul>
              <li>
                Team of React Native app development expert engineers, managers,
                and designers
              </li>
              <li>Top consultancy on language, frameworks, library, etc</li>
              <li>
                Team of React Native app development expert engineers, managers,
                and designers
              </li>
            </ul>
          </div>
          <div className="key__card">
            <ul>
              <li>
                Team of React Native app development expert engineers, managers,
                and designers
              </li>
              <li>Top consultancy on language, frameworks, library, etc</li>
              <li>
                Team of React Native app development expert engineers, managers,
                and designers
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="whyTech">
        <div className="whyTech__left">
          <h1>Why Angular?</h1>
          <p>In front-end development, React JS JavaScript library makes it painless to create interactive UIs. These are the reasons why you should choose this platform:</p>
          <ul>
              <li>Open-source framework</li>
              <li>High-end web & mobile app development</li>
              <li>Superb for HTML website/applications</li>
              <li>Effectively makes writing Javascript easier</li>
              <li>Flexible with other frameworks</li>
              <li>Quick rendering and stable codes</li>
          </ul>
        </div>
        <div className="whyTech__right">
          <img
            src="https://binmile.com/wp-content/uploads/2021/05/ReactJS.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="hire">
        <h1>
          Hire <span>Angular</span> Developers
        </h1>
        <p>
          We provide useful ReactJS consulting based on your personalized
          business requirements, wherever and whenever you want it.
        </p>
      </div>
      <div className="start__project">
        <h3>START A PROJECT WITH US</h3>
        <span className="get__estimation">GET ESTIMATION</span>
      </div>
    </>
  );
}

export default Technology;
