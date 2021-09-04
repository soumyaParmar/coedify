import React from "react";

function POF({ formData, setForm, navigation }) {
  const { bestproject, explaintech, heardaboutus } = formData;
  return (
    <div style={{ padding: "10%" }}>
      Proof of work
      <input
        type="text"
        placeholder="bestproject"
        name="bestproject"
        value={bestproject}
        onChange={setForm}
      />
      <input
        type="text"
        placeholder="explaintech"
        name="explaintech"
        value={explaintech}
        onChange={setForm}
      />
      <input
        type="text"
        placeholder="heardaboutus"
        name="heardaboutus"
        value={heardaboutus}
        onChange={setForm}
      />
      <button onClick={() => navigation.previous()}>Back</button>
      <button onClick={() => navigation.next()}>Next</button>
    </div>
  );
}

export default POF;
