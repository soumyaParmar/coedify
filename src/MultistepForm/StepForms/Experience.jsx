import React from "react";

function Experience({ formData, setForm, navigation }) {
  const { Experience, status, salary } = formData;
  return (
    <div style={{ padding: "10%" }}>
      Availability and expectation
      <input
        type="text"
        placeholder="Experience"
        name="Experience"
        value={Experience}
        onChange={setForm}
      />
      <input
        type="text"
        placeholder="status"
        name="status"
        value={status}
        onChange={setForm}
      />
      <input
        type="text"
        placeholder="salary"
        name="salary"
        value={salary}
        onChange={setForm}
      />
      <button onClick={() => navigation.previous()}>Back</button>
      <button onClick={() => navigation.next()}>Next</button>
    </div>
  );
}

export default Experience;
