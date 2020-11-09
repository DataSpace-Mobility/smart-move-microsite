import React from "react";
import objectiveImage from '../../images/details/objective.svg';
import { ObjectiveContainer, ObjectiveHeading, ObjectiveImage } from "./Objective.elements";

const Objective = () => {
  return (
    <ObjectiveContainer>
       <ObjectiveHeading>OBJECTIVE THAT YOUR SOLUTIONS SHOULD AIM TO ACHIEVE</ObjectiveHeading> 
      <ObjectiveImage src={objectiveImage} alt="objectives"/>
    </ObjectiveContainer>
  );
};

export default Objective;
