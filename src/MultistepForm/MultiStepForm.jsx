import React from "react";
import { useForm } from "react-hook-form";
import { useStep } from "react-hooks-helper";
import Experience from "./StepForms/Experience";
import PersonalDetails from "./StepForms/PersonalDetails";
import POF from "./StepForms/POF";
import Resume from "./StepForms/Resume";
// import Review from "./StepForms/Review";
import Skillset from "./StepForms/Skillset";
import Submit from "./StepForms/Submit";
function MultiStepForm() {
  const defaultData = {};
  const steps = [
    { id: "personalDetails" },
    { id: "experience" },
    { id: "skillset" },
    { id: "resume" },
    { id: "pof" },
    // { id: "review" },
    { id: "submit" },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // console.log(errors);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { defaultData, register, handleSubmit, errors, navigation };
  // console.log(navigation);
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
    // case "review":
    //   return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
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
