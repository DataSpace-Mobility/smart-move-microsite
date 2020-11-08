import React from "react";
import { WalkContainer, WalkHeading, WalkImage } from "./Walkthrough.elements";

const Walkthrough = (props) => {
  return (
    <WalkContainer lightBg>
      <WalkHeading>{props.heading}</WalkHeading>
      <WalkImage src={props.image} alt="walkthrough" />
      {props.terms ? <p style={{textAlign:"right", marginLeft:"70%"}}>*{props.terms}</p> : null}
    </WalkContainer>
  );
};

export default Walkthrough;
