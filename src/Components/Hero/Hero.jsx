import "./hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

function Hero() {
  const componentStyles = {
    backgroundImage: 'url("./video11.gif")',
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  return (
    <div style={componentStyles}>
      <div className="hero_backcontainer">
        <div className="hero__cover">
          <div className="hero">
            <div className="hero__left">
              <h1 className="hero__heading">Engineering the Future Together</h1>

              <p className="hero__desc">
                Discover CoEdify, we're driven by the art of solving engineering
                challenges. Our B2B focus is your gateway to streamlined
                development, cost reduction, and cutting-edge technology
                solutions. From digital transformation and legacy code
                refinement to seamless AI integration, we're your trusted
                partner in technological innovation.
              </p>
              <div className="buttons">
                <a
                  href="mailto:contact@coedify.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span
                    className="hero_contact"
                    onMouseOver={console.log("hellonik")}
                  >
                    <p>Try No Cost Consultation</p>
                    <FaArrowRightLong />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="comapnies">
        <div className="trustedby">
          <h3 className="trust__heading">Our developers are working here</h3>
        </div>
        <div className="companies__carousel">
          <Test />
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default Hero;
