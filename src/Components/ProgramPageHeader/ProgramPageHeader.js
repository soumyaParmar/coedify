import React from 'react'
import './ProgramPageHeader.css'
import headerImage from "../../assets/pixeltrue-web-development-1.svg"
import Hirebutton from '../Buttons/Hirebutton'

const ProgramPage = () => {
    return (
        <section className="header-section">
            <div className="header-content">
                <div className="header-heading">
                    CoEdify Mentorship Program
                </div>
                <div className="header-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem interdum malesuada in mi ultrices volutpat phasellus natoque. Vitae viverra etiam viverra cursus urna facilisis mi elit. Turpis iaculis vulputate a pellentesque egestas.
                </div>
                <div className="button">
                    <Hirebutton title={true && 
                        <>
                        <span className="button-title">Apply Now</span>  
                        <span className="material-icons">double_arrow</span>
                        </>}
                    />
                </div>
            </div>
            <div className="header-image">
                <img src={headerImage} alt="studying student" />
            </div>
        </section>
    )
}

export default ProgramPage
