import React from "react";

function Skillset({ formData, setForm, navigation }) {
  const { primaryskill, secondaryskill } = formData;
  return (
    <div style={{ padding: "10%" }}>
      SKills
      <input
        type="text"
        placeholder="primaryskill"
        name="primaryskill"
        value={primaryskill}
        onChange={setForm}
      />
      <input
        type="text"
        placeholder="secondaryskill"
        name="secondaryskill"
        value={secondaryskill}
        onChange={setForm}
      />
      <button onClick={() => navigation.previous()}>Back</button>
      <button onClick={() => navigation.next()}>Next</button>
    </div>
  );
}

export default Skillset;
