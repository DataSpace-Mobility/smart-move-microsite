import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterHeading,
  HorizontalLine,
  ConnectUs,
  UrbanLogo,
  DataSpaceLogo,
  Logo,
  ConnectUsHeading
} from "./Footer.elements";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import UrbanImage from "../../images/challenge/GUMP1.png";
import DataSpaceImage from "../../images/challenge/dataspace_logo.svg";

const Footer = () => {
  return (
    <>
      <FooterHeading>
        The SMART MOVE Challenge is a part of the <br></br>Indian-German Green Urban
        Mobility Partnership
      </FooterHeading>
      <FooterContainer>
        <FooterContent>
          For more details, contact us at :<br></br>datachallenge@niua.org
          <br></br>National Institute of Urban Affairs, 1st and 2nd Floor,{" "}
          <br></br>Core 4B, India Habitat Centre, Lodhi Road, New Delhi
        </FooterContent>
        <HorizontalLine />
        <ConnectUs>
          <ConnectUsHeading>Connect with us</ConnectUsHeading>
          <FacebookIcon style={{fontSize:"60px"}}/>
          <LinkedInIcon style={{fontSize:"60px"}}/>
          <TwitterIcon  style={{fontSize:"60px"}}/>
        </ConnectUs>
        <HorizontalLine />
        <Logo>
          <UrbanLogo src={UrbanImage} alt="urban logo" />
          <DataSpaceLogo src={DataSpaceImage} alt="Dataspace logo" />
        </Logo>
      </FooterContainer>
    </>
  );
};

export default Footer;
