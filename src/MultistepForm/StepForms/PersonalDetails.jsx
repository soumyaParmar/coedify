import React from "react";

function PersonalDetails({ formData, setForm, navigation }) {
  const { name, email, number } = formData;

  return (
    <div style={{ padding: "10%" }}>
      PersonalDetails
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={setForm}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={setForm}
      />
      <input
        type="number"
        placeholder="number"
        name="number"
        value={number}
        onChange={setForm}
      />
      <button onClick={() => navigation.next()}>Next</button>
    </div>
  );
}

export default PersonalDetails;
