import React from "react";
import { useParams } from "react-router";
import Section from "../../Components/TechnologyPageSection/Section";
import Gradient from "../../Components/Gradient/Gradient";
import Header from "../../Components/TechnologyPageHeader/Header";
import { TechnologyPageData } from "./TechnologyPageData";

const TechnologiesPage = () => {
  const { id } = useParams();
  const { image, title, headerDesc, sectionDesc, differentStacks, otherTypes } =
    TechnologyPageData[id - 1];

  return (
    <div>
      <Header title={title} description={headerDesc} image={image} />
      <Section
        title={title}
        description={sectionDesc}
        differentStacks={differentStacks}
        others={otherTypes}
      />
      <Gradient />
    </div>
  );
};

export default TechnologiesPage;
