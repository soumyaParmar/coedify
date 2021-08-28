import React from "react";
import img from "./hero__img.jpg";
import wave from "./wave.png";
import urban from "./urban-852.png";
import certificate from "./certificate.png";
import logooo from "./logooo.png"
import fire from "./fireball.png"
import "./hero.css";
import contact from "./contact.png"
import DevCard from "./DevCard";
import { DevList } from "./DevList";
function Hero() {
  return (
    <>
    <img className="wave" src = {wave} alt="wave"/>

      <div className="hero">
        <div className="hero__left">
          <h1 className="hero__heading">Get the Top Developers </h1>
          <span className="hero__desc">
            Although precise definitions of each engineering type may be hard to
            come by, we explain each engineering track based on our technical
            screening. As companies.Although precise definitions of each engineering type may be hard to come by, we explain each engineering track based on our technical screening. As companies
          </span>
          <div className="buttons">
            <span className="btn__getDeveloper">Hire Developers</span>
            <span className="btn__apply">Apply as a Developer</span>
          </div>
        </div>
        
      </div>
      <h1 className="heading">On Demand Amazing Developers</h1>
      <div className="hero2">
        <div className="hero2__left">
          <div className="boxes1">
            <Box url={fire} desc="Hire for proven skills train by us, rated by us" />
            <Box url={certificate} desc="Every candidate you hire is a level above from others" />
          </div>
          <div className="boxes2">
            <Box url={contact} desc="Meet the right fit for your company here" />
            <Box url={logooo} desc="Access the diverse pool of talents here" />
          </div>
        </div>
        <div className="hero2__right">
          <img src={urban} alt = "urban"/>
        </div>
      </div>
      <Ingenious/>
    </>
  
  );
}

export default Hero;

function Box(props) {
  return (
    <div className="box">
      <div className="box__logo">
        <img src={props.url} alt="logo" />
      </div>
      <div className="description">
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

function Ingenious(){
  let devList = DevList.map(({id,url,title,item1,item2,item3})=>{
    return( <DevCard index = {id} url={url} title={title} item1={item1} item2 = {item2}item3 = {item3}/>)
  } 
  )
  return(
    <div className="igns">
      <h1 className="ings__heading">Our Ingenious Developers</h1>
      <h3>Hiring CoEdify Developers</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitationLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </p>
      <div className="dev__sections">
      {devList}
      </div>
    </div>
  )
}

