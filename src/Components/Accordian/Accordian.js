import { useState } from "react";
import { Faqs } from "../ProgramPageFaqSection/Faqs";
import AccordionItem from "../ProgramPageFaqSection/AccordionItem";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  console.log(Faqs);
  return (
    <>
      <h1 className="faqHeading">Frequntly Ask Questions</h1>
      <p className="faqsubheading">FAQ</p>
      <ul className="faqSection">
        {Faqs.map((faq, index) => (
          <AccordionItem
            onToggle={() => handleToggle(index)}
            active={clicked === index}
            key={index}
            faq={faq}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion;
