import React from "react";
import { BenefitsContainer, BenefitsHeading, Cards } from "./Benefits.elements";
import BenefitsCard from "./BenefitsCard/BenefitsCard";

const Benefits = () => {
  return (
    <BenefitsContainer>
      <BenefitsHeading>BENEFITS FOR THE SOCIETY</BenefitsHeading>
      <Cards>
        <BenefitsCard
          heading="Industry, Research, Academics and Cities Interface"
          para="The challenge will engage students and researchers and mentoring by cities and industry to transform cities into a digitally-enabled urban mileu."
        />
        <BenefitsCard
          lightBg={true}
          heading="Setup of National Open Mobility Data Portal"
          para="This initiative will help establish mutual trust in terms of data sharing and develop data related guidelines between the public and private sector."
        />
        <BenefitsCard
          lightBg={true}
          heading="Technology Driven Sustainable Solutions"
          para="The challenge will devise innovative technology-driven solutions to help cities in offering a safe, sustainable, efficient and smart urban transport systems."
        />
        <BenefitsCard
          heading="Unlocking Mobility Datasets"
          para="The initiative will help improve the accessibility and mobility of people and goods by unlocking the potential of urban mobility data sets."
        />
      </Cards>
    </BenefitsContainer>
  );
};

export default Benefits;
