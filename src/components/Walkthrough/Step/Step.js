import React from "react";
import { Circle, Step, StepContainer, StepDesc } from "./Step.elements";

const Steps = (props) => {
  return (
    <StepContainer>
      <Circle />
      <Step>STEP {props.no} </Step>
      <StepDesc>{props.desc}</StepDesc>
    </StepContainer>
  );
};

export default Steps;
