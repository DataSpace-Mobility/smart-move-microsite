import React from "react";
import {
  FooterRow,
  HomeFooterContainer,
  FooterColumn,
  SmartMoveLogo,
  FacebkIcon,
  TwitIcon,
  LinkdnIcon,
  InstaIcon,
  FooterSmall,
  FooterBig,
  SocialLink,
} from "./HomeFooter.elements";
import smartmove from "../../images/smart-move-logo.svg";

const HomeFooter = () => {
  return (
    <HomeFooterContainer>
      {/* <FooterRow> */}
      <FooterColumn>
        <SmartMoveLogo src={smartmove} alt="smart move logo" />
      </FooterColumn>
      <FooterColumn>
        <FooterSmall>
          For more details, contact us at:{" "}
          <FooterBig>smartmove@niua.org</FooterBig>
        </FooterSmall>
        <FooterSmall>
          National Institute of Urban Affairs, 1st and 2nd Floor, Core 4B, India
          <br></br> Habitat Centre, Lodhi Road, New Delhi
        </FooterSmall>
        <FooterSmall>
          <FooterBig>
            The SMART MOVE Challenge is a part of the Indian-German Green
            <br></br>Urban Mobility Partnership
          </FooterBig>
        </FooterSmall>
      </FooterColumn>
      <FooterColumn>
        <SocialLink href="https://twitter.com/SmartMove2020" target="_bank">
          <TwitIcon />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/smartmove_2020/" target="_bank">
          <InstaIcon />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/company/smartmove2020" target="_bank">
          <LinkdnIcon />
        </SocialLink>
      </FooterColumn>
      {/* </FooterRow> */}
    </HomeFooterContainer>
  );
};

export default HomeFooter;
