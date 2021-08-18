import React from 'react'
import "./card.css"
function Card() {
    return (
        <div className="tech__card">
         <div className="tech__card__logo">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwRepwYQWk61iDBlIidQcJNcPQxYsShtMCA&usqp=CAU" alt="logo"/>
         </div>
         <div className="tech__card__name">
             <span>Custom Developement</span>
         </div>
            
        </div>
    )
}

export default Card
