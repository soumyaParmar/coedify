import React from "react";

function Review({ formData, navigation }) {
  //   const { go } = navigation;
  //   const {
  //     name,
  //     email,
  //     number,
  //     Experience,
  //     status,
  //     salary,
  //     primaryskill,
  //     secondaryskill,
  //     githublink,
  //     linkedinlink,
  //     bestproject,
  //     explaintech,
  //     heardaboutus,
  //   } = formData;
  console.log(formData);
  return (
    <div style={{ padding: "10%" }}>
      <h1>Review</h1>
      <button onClick={() => navigation.next()}>Submit</button>
    </div>
  );
}

export default Review;
