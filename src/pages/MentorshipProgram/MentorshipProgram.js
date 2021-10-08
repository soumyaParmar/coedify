import React from "react";
import "./MentorshipProgram.css";
import ProgramPageHeader from "../../Components/ProgramPageHeader/ProgramPageHeader";
import ProgramPageSection from "../../Components/ProgramPageSection/ProgramPageSection";
import ProgramPageImageSection from "../../Components/ProgramPageImageSection/ProgramPageImageSection";
import ProgramPageTestimonialSection from "../../Components/ProgramPageTestimonialSection/ProgramPageTestimonialSection";
import ProgramPageCompanySection from "../../Components/ProgramPageCompanySection/ProgramPageCompanySection";
import Accordion from "../../Components/Accordian/Accordian";

const MentorshipProgram = () => {
  return (
    <div className="page-body">
      <ProgramPageHeader />
      <ProgramPageSection />
      <ProgramPageImageSection />
      <ProgramPageTestimonialSection />
      <ProgramPageCompanySection />
      <Accordion />
    </div>
  );
};

export default MentorshipProgram;
