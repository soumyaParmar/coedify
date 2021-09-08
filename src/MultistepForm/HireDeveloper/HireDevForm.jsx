import React from "react";
import { useStep } from "react-hooks-helper";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import "./HireDevsForms/hiredevforms.css";
import Budget from "./HireDevsForms/Budget";
import ContactInfo from "./HireDevsForms/ContactInfo";
import Employee from "./HireDevsForms/Employee";
import Experience from "./HireDevsForms/Experience";
import HowHire from "./HireDevsForms/HowHire";
import NumOfDevs from "./HireDevsForms/NumOfDevs";
import Role from "./HireDevsForms/Role";
import Skills from "./HireDevsForms/Skills";
import Submit from "./HireDevsForms/Submit";
import WhenToJoin from "./HireDevsForms/WhenToJoin";
function HireDevForm() {
  const defaultData = {};

  const steps = [
    { id: "role" },
    { id: "howHire" },
    { id: "numOfDevs" },
    { id: "skills" },
    { id: "experience" },
    { id: "employees" },
    { id: "whenToJoin" },
    { id: "budget" },
    { id: "contactInfo" },
    { id: "review" },
    { id: "submit" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = {
    defaultData,
    register,
    handleSubmit,
    classNames,
    errors,
    navigation,
  };

  switch (step.id) {
    case "role":
      return <Role {...props} />;
    case "howHire":
      return <HowHire {...props} />;
    case "numOfDevs":
      return <NumOfDevs {...props} />;
    case "skills":
      return <Skills {...props} />;
    case "experience":
      return <Experience {...props} />;
    case "employees":
      return <Employee {...props} />;
    case "whenToJoin":
      return <WhenToJoin {...props} />;
    case "budget":
      return <Budget {...props} />;
    case "contactInfo":
      return <ContactInfo {...props} />;
    case "submit":
      return <Submit />;
    default:
      console.log("default");
  }
  return (
    <div>
      <h1>MultiStepForm Developer</h1>
    </div>
  );
}

export default HireDevForm;
