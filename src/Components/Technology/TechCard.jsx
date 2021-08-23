import React from 'react';
import "./TechCard.css";
function TechCard(props) {
    const {name,logo} = props;
    return (
        <div className="techCard">
            <div className="techCard__logo">
              <img src={logo} alt="logo"/>
            </div>
            <div className="techCard__name">
           <p>{name}</p> 
            </div>
        </div>
    )
}

export default TechCard
