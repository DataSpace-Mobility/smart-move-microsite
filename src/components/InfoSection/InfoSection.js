import React from "react";
import { InfoContainer, InfoHeading, InfoPara } from "./InfoSection.elements";

const InfoSection = (props) => {
  return (
    <InfoContainer lightBg={props.lightBg}>
      <InfoHeading>{props.heading}</InfoHeading>
      <InfoPara lightBg={props.lightBg} >
        {props.para1}
        <br></br>
        {props.para1subheading}
      </InfoPara >
      <InfoPara lightBg={props.lightBg} >
        {props.para2}
        <br></br>
        {props.para2subheading}
      </InfoPara>
      <InfoPara lightBg={props.lightBg} >
        {props.para3}
      </InfoPara>
    </InfoContainer>
  );
};

export default InfoSection;
