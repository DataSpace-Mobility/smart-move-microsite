import React from "react";
import {
  CardConatiner,
  CardHeading,
  CardPara,
} from "./ParticipateCard.elements";

const ParticipateCard = (props) => {
  return (
    <CardConatiner>
      <CardHeading>{props.heading}</CardHeading>
      <CardPara>{props.para}</CardPara>
    </CardConatiner>
  );
};

export default ParticipateCard;
