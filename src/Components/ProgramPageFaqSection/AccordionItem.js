import "./ProgramPageFaqSection.css";
import { useRef } from "react";
const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();

  return (
    <li className={`main__heading ${active ? "active" : ""}`}>
      <div className="acc__btn" onClick={onToggle}>
        <h2 className="faqQuestion">{question}</h2>
        <p className="faqToggleIcon">{active ? "➖" : "➕"}</p>
      </div>
      <div ref={contentEl} className="">
        {active ? <div className="faqAnswer">{answer}</div> : ""}
      </div>
    </li>
  );
};

export default AccordionItem;
