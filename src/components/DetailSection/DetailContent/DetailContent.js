import React from "react";
import {
  DetailContentContainer,
  DetailImage,
  DetailPara,
} from "./DetailContent.elements";

const DetailContent = (props) => {
  return (
    <DetailContentContainer imgStart={props.imgStart}>
      {/* <DetailImage src={props.src} alt="number image" /> */}
      <DetailImage>{props.no}</DetailImage>
      <DetailPara>{props.para}</DetailPara>
    </DetailContentContainer>
  );
};

export default DetailContent;
