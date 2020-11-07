import React from "react";
import Card from "./Card/Card";
import "./Sectors.css";
import image1 from "../../../images/card-image1.jpg";
import image2 from "../../../images/card-image2.jpg";
import image3 from "../../../images/card-image3.jpg";

const Sectors = () => {
  return (
    <div className="sectors">
      <h1>Sectors covered in the challenge</h1>
      <Card
        src={image1}
        style={{background:"rgb(108,109,111)",background:"linear-gradient(36deg, rgba(108,109,111,1) 0%, rgba(235,193,92,1) 100%)"}}
        heading="Achieving Sustainable Transport and Resilience"
        para="Ideas that give special attention to the distribution of street space for different users. It should further follow a thorough plan for promoting multi-modal integration and sustainable modes of transport - including Non-Motorised Transport (NMT), pedestrians, cyclists and other formal and informal para-transit modes. The proposal should give considerable importance to data interoperability and design approaches for each selected mode based on available and attainable datasets"
      />
      <Card
        src={image2}
        style={{background:"rgb(244,199,91)",background:"linear-gradient(36deg, rgba(244,199,91,1) 0%, rgba(105,191,195,1) 100%)"}}
        heading="Restoring Public Transport Ridership"
        para="COVID-19 recovery models that focus on the skewed mobility preferences and absence of safe mobility in the post-pandemic cities, either through technology-based ideas or innovative mobility plans for cost-effective solutions. The purpose is to use the available mobility datasets and understand commuter travel patterns to restore public transport operations. One must keep the demand management, fleet augmentation, data-driven, responsive approach, digitalization, real-time information etc. in mind."
      />
      <Card
        src={image3}
        style={{background:"rgb(220,67,81)",background:"linear-gradient(36deg, rgba(220,67,81,1) 0%, rgba(244,199,91,1) 100%)"}}
        heading="Equity in Mobility"
        para="Mobility ideas for people across all genders, age, income groups, and marginalised population. The proposals should pay attention to inclusivity and efficiency improvement, and affordable solutions considering the changing mobility patterns."
      />
    </div>
  );
};

export default Sectors;
