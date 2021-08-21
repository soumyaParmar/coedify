import React from 'react'
import About from '../Components/About us/About'
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'
import Testimonial from '../Components/Testimonials/Testimonial'

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Services/>
            <Testimonial/>
        </div>
    )
}

export default Home
