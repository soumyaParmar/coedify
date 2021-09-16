import React from 'react'
import "./MentorshipProgram.css"
import ProgramPageHeader from '../../Components/ProgramPageHeader/ProgramPageHeader'
import ProgramPageSection from '../../Components/ProgramPageSection/ProgramPageSection'
import ProgramPageImageSection from '../../Components/ProgramPageImageSection/ProgramPageImageSection'
import ProgramPageTestimonialSection from '../../Components/ProgramPageTestimonialSection/ProgramPageTestimonialSection'
import ProgramPageCompanySection from '../../Components/ProgramPageCompanySection/ProgramPageCompanySection'
import ProgramPageFaqSection from '../../Components/ProgramPageFaqSection/ProgramPageFaqSection'

const MentorshipProgram = () => {
    return (
        <div className='page-body'>
            <ProgramPageHeader/>
            <ProgramPageSection/>
            <ProgramPageImageSection/>
            <ProgramPageTestimonialSection/>
            <ProgramPageCompanySection/>
            <ProgramPageFaqSection/>
        </div>
    )
}

export default MentorshipProgram
