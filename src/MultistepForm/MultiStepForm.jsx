import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import Experience from "./StepForms/Experience";
import PersonalDetails from "./StepForms/PersonalDetails";
import POF from "./StepForms/POF";
import Resume from "./StepForms/Resume";
import Review from "./StepForms/Review";
import Skillset from "./StepForms/Skillset";
import Submit from "./StepForms/Submit";
function MultiStepForm() {
  const defaultData = {
    name: "",
    email: "",
    number: "",
    Experience: "",
    status: "",
    salary: "",
    primaryskill: "",
    secondaryskill: "",
    githublink: "",
    linkedinlink: "",
    bestproject: "",
    explaintech: "",
    heardaboutus: "",
  };
  const steps = [
    { id: "personalDetails" },
    { id: "experience" },
    { id: "skillset" },
    { id: "resume" },
    { id: "pof" },
    { id: "review" },
    { id: "submit" },
  ];
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  console.log(navigation);
  const props = { formData, setForm, navigation };

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
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit />;
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
