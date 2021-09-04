import React from "react";
import "./vetted.css";
import HeaderImg from "./vetting.svg";
import Gradient from "../../Components/Gradient/Gradient";
import img1 from "../WhyUs/whyus_1.svg";
import img2 from "../WhyUs/whyus_3.svg";
import img3 from "../WhyUs/whyus_2.svg";
import Button from "../../Components/Buttons/Hirebutton";
function Vetted() {
  return (
    <div className="vet__cover">
      <div className="vet__section1">
        <div className="vet1__left">
          <h1 className="vet1__heading">Vetting Process</h1>
          <p className="vet1__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tristique leo massa sit mollis justo, diam consectetur. Aliquet vel
            consectetur integer a nunc viverra in rutrum. Fames sit auctor ipsum
            dictum tincidunt vel amet, vel aliquam.
          </p>
          <div className="vet1__btn">
            <Button />
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
              <h1 className="vet2__1heading">Heading 1</h1>
              <p className="vet2__1para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                diam ridiculus nec quisque. Nisl, orci aliquam ultricies integer
                duis dis. Viverra turpis eget neque, vel ornare non nec,
                sollicitudin. Condimentum neque sit odio faucibus nisl natoque
                egestas. Vulputate fermentum nam vulputate vestibulum.
              </p>
            </div>
          </div>
          <div className="vet2__2">
            <div className="vet2__2left">
              <h1 className="vet2__2heading">Heading 2</h1>
              <p className="vet2__2para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                diam ridiculus nec quisque. Nisl, orci aliquam ultricies integer
                duis dis. Viverra turpis eget neque, vel ornare non nec,
                sollicitudin. Condimentum neque sit odio faucibus nisl natoque
                egestas. Vulputate fermentum nam vulputate vestibulum.
              </p>
            </div>
            <div className="vet2__2right">
              <img className="vet2__img2" src={img2} alt="img1" />
            </div>
          </div>
          <div className="vet2__3">
            <div className="vet2__3left">
              <img className="vet2__img3" src={img3} alt="img1" />
            </div>
            <div className="vet2__3right">
              <h1 className="vet2__3heading">Heading 3</h1>
              <p className="vet2__3para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus
                diam ridiculus nec quisque. Nisl, orci aliquam ultricies integer
                duis dis. Viverra turpis eget neque, vel ornare non nec,
                sollicitudin. Condimentum neque sit odio faucibus nisl natoque
                egestas. Vulputate fermentum nam vulputate vestibulum.
              </p>
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
