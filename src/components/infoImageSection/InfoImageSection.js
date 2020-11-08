import React from "react";
import {
  InfoImage,
  InfoImageContainer,
  InfoImageHeading,
  InfoImagePara,
  InfoRow,
  Para,
  ParaHeading,
  ParaSubHeading,
} from "./InfoImageSection.elements";

const InfoImageSection = (props) => {
  return (
    <InfoImageContainer lightBg={props.lightbg}>
      {props.heading ? <InfoImageHeading lightCol={props.lightbg}>
        {props.heading}
      </InfoImageHeading> :null }
      <InfoRow imgStart={props.imgStart}>
        <InfoImage src={props.image} alt={props.heading} style={props.style}/>
        <Para lightBg>
            {props.paraheading ? <ParaHeading imgStart={props.imgStart}>{props.paraheading}</ParaHeading>:null}
            {props.parasubheading ? <ParaSubHeading imgStart={props.imgStart}>{props.parasubheading}</ParaSubHeading>:null}
          <InfoImagePara imgStart={props.imgStart}>{props.para1}</InfoImagePara>
          <InfoImagePara imgStart={props.imgStart}>{props.para2}</InfoImagePara>
          <InfoImagePara imgStart={props.imgStart}>{props.para3}</InfoImagePara>
        </Para>
      </InfoRow>
    </InfoImageContainer>
  );
};

export default InfoImageSection;
