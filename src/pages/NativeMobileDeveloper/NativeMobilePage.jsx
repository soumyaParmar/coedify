import React from "react";
import Section from "../../Components/TechnologyPageSection/Section";
import Gradient from "../../Components/Gradient/Gradient";
import Header from "../../Components/TechnologyPageHeader/Header";

const NativeMobilePage = () => {
  let description1 =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A architecto tenetur ut. Deserunt eius voluptatem adipisci unde quasi nesciunt quisquam odit totam sint, voluptates nihil atque quam mollitia a magni dolores quidem! Recusandae, vero. ";
  return (
    <div>
      <Header title="Native Mobile" description={description1} />
      <Section title="Native Mobile" />
      <Gradient />
    </div>
  );
};

export default NativeMobilePage;
