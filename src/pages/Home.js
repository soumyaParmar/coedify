import React from 'react'
import About from '../Components/About us/About'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import Testimonial from '../Components/Testimonials/Testimonial'
import Technology from '../Components/Technology/Technology'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Testimonial/>
            <Technology/>
        </div>
    )
}

export default Home
