import React from "react";
import { useForm } from "react-hook-form";
import { useStep } from "react-hooks-helper";
import classNames from "classnames";
import Experience from "./StepForms/Experience";
import PersonalDetails from "./StepForms/PersonalDetails";
import POF from "./StepForms/POF";
import Resume from "./StepForms/Resume";
import Skillset from "./StepForms/Skillset";

function MultiStepForm() {
  const defaultData = {};
  const steps = [
    { id: "personalDetails" },
    { id: "experience" },
    { id: "skillset" },
    { id: "resume" },
    { id: "pof" },
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
    errors,
    classNames,
    navigation,
  };

  switch (step.id) {
    case "personalDetails":
      return <PersonalDetails {...props} />;
    case "experience":
      return <Experience {...props} />;
    case "skillset":
      return <Skillset {...props} />;
    case "resume":
      return <Resume {...props} />;
    case "pof":
      return <POF {...props} />;

    default:
      console.log("default");
  }
  return (
    <div className="multistepform">
      <h1>MultiStep form</h1>
    </div>
  );
}

export default MultiStepForm;
