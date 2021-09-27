import React, { useState } from "react";
import { useStep } from "react-hooks-helper";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import "./HireDevsForms/hiredevforms.css";
import Budget from "./HireDevsForms/Budget";
import ContactInfo from "./HireDevsForms/ContactInfo";
import Employee from "./HireDevsForms/Employee";
import Experience from "./HireDevsForms/Experience";
import NumOfDevs from "./HireDevsForms/NumOfDevs";
import HowLong from "./HireDevsForms/HowLong";
import Role from "./HireDevsForms/Role";
import WhenToJoin from "./HireDevsForms/WhenToJoin";
function HireDevForm() {
  const [role, setRole] = useState([]);

  const defaultData = {};
  const steps = [
    { id: "role" },
    { id: "experience" },
    { id: "numOfDevs" },
    { id: "howlong" },
    { id: "whenToJoin" },
    { id: "budget" },
    { id: "employees" },
    { id: "contactInfo" },
    { id: "review" },
    { id: "submit" },
  ];
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = {
    setValue,
    watch,
    defaultData,
    role,
    setRole,
    register,
    handleSubmit,
    classNames,
    errors,
    navigation,
  };

  switch (step.id) {
    case "role":
      return <Role {...props} />;
    case "experience":
      return <Experience {...props} />;
    case "numOfDevs":
      return <NumOfDevs {...props} />;
    case "howlong":
      return <HowLong {...props} />;
    case "employees":
      return <Employee {...props} />;
    case "whenToJoin":
      return <WhenToJoin {...props} />;
    case "budget":
      return <Budget {...props} />;
    case "contactInfo":
      return <ContactInfo {...props} />;

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
