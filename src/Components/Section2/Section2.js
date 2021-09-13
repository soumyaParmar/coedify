import React from "react";
import "./section2.css";
import logo2 from "./card2.png";
import logo3 from "./card3.png";
import logo4 from "./card4.png";
import logo5 from "./card5.png";
import logo6 from "./card6.png";
import logo1 from "./card2.png";

const Section2 = () => {
  return (
    <div className="sec2">
      <h1 className="heading">On Demand Amazing Developers</h1>
      <div className="section2">
        <Box
          title="Hire for proven skills train by us, rated by us."
          url={logo1}
        />
        <Box title="Try out our developers for 1 week." url={logo2} />
        <Box
          title="Every candidate you hire is a level above from others."
          url={logo3}
        />
        <Box title="Meet the right fit for your company here." url={logo4} />
        <Box title="Meet the diverse pool of vetted talent here." url={logo5} />
        <Box title="No Extra Charges required." url={logo6} />
      </div>
    </div>
  );
};

export default Section2;

function Box({ title, url }) {
  return (
    <>
      <div className="sec2__Box">
        <div className="sec2Box__logo">
          <img className="sec2__img" src={url} alt="logo" />
        </div>
        <div className="sec2Box__content">
          <p className="sec2__para">{title}</p>
        </div>
      </div>
    </>
  );
}
