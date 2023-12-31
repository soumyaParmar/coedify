import React from "react";
import "./Section.css";
import { useHistory } from "react-router-dom";
import TechCard from "../TechnologyPageSection/TechCard";

function Section({ title, description, differentStacks, others }) {
  const history = useHistory();
  return (
    <div className="container">
      <section>
        <div className="top__heading">
          <h1 className="h1__heading">Our {title} </h1>
          <p style={{ color: "GrayText" }}>{description}</p>
        </div>
      </section>

      <h3 className="h3__heading">Different Tech {title} </h3>

      <div className="card-body">
        {differentStacks.map(({ index, url, title, item1, item2, item3 }) => {
          return (
            <TechCard
              key={index}
              index={index + 1}
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
            {others.map((other, index) => (
              <li>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => history.push(`/technology/${index + 1}`)}
                >
                  <span key={index} className="other__span">
                    {other}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section;
