import React from "react";
import "./Section.css";
// import DevCard from "../../Components/Section4/DevCard";
import SectionCard from "./SectionCard";
import { DevLists } from "./DevLists";
import { Link } from "react-router-dom";
// import fullstack from "./fullstack.png"
function Section({ title }) {
  return (
    <div className="container">
      <section>
        <div className="top__heading">
          <h1 className="h1__heading">Our {title} Developers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            nulla, pariatur ex odio sed tempore esse est accusantium officiis
            eum praesentium totam mollitia dolores. Atque temporibus ullam
            tempore dolorum quibusdam! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Veniam vitae minus quidem, a ex, natus at sit
          </p>
        </div>
      </section>

      <h3 className="h3__heading">Different Tech Full Stack Developer</h3>

      <div className="card-body">
        {DevLists.map(({ id, url, title, item1, item2, item3 }) => {
          return (
            <SectionCard
              index={id}
              url={url}
              title={title}
              item1={item1}
              item2={item2}
              item3={item3}
            />
          );
        })}
        <div className="dev__boxx">
          <h4 className="other__heading">See others types of Developers</h4>

          <ul className="other__ul">
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="other__span">Frontend Developer</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="other__span">Backend Developer</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="other__span">Native Mobile Developer</span>
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="other__span">DevOps Engineer</span>
              </Link>
            </li>{" "}
            <li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="other__span">Sql Tuning Engineer</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section;
