import React from "react";
import {
  BulletPoints,
  DetailHeading,
  DetailInfoContainer,
  DetailList,
  DetailListHeading,
} from "./DetailsInfoSection.elements.js";

const DetailsInfoSection = (props) => {
  return (
    <DetailInfoContainer lightBg={props.lightBg}>
      <DetailHeading>{props.heading}</DetailHeading>
      <DetailList>
        <DetailListHeading>{props.listheading}</DetailListHeading>
        {props.list1 ? <BulletPoints>{props.list1}</BulletPoints> : null}
        <BulletPoints>{props.list2}</BulletPoints>
        <BulletPoints>{props.list3}</BulletPoints>
        <BulletPoints>{props.list4}</BulletPoints>
        {props.list5 ? <BulletPoints>{props.list5}</BulletPoints> : null}
        {props.list6 ? <BulletPoints>{props.list6}</BulletPoints> : null}
      </DetailList>
    </DetailInfoContainer>
  );
};

export default DetailsInfoSection;
