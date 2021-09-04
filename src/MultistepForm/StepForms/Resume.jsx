import React from "react";

function Resume({ formData, setForm, navigation }) {
  const { githublink, linkedinlink } = formData;
  return (
    <div style={{ padding: "10%" }}>
      Social Links
      <input
        type="text"
        placeholder="githublink"
        name="githublink"
        value={githublink}
        onChange={setForm}
      />
      <input
        type="text"
        placeholder="linkedinlink"
        name="linkedinlink"
        value={linkedinlink}
        onChange={setForm}
      />
      <button onClick={() => navigation.previous()}>Back</button>
      <button onClick={() => navigation.next()}>Next</button>
    </div>
  );
}

export default Resume;
