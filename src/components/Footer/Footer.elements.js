import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import UrbanImage from "../../images/challenge/GUMP1.png";
import DataSpaceImage from "../../images/challenge/dataspace_logo.svg";

export const FooterContainer = styled.div`
  background-color: #fff;
  color: #3e3e3f;
  padding: 4rem 0 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContent = styled.p`
  color: #3e3e3f;
  line-height: 43px;
  margin: 50px;
`;

export const FooterHeading = styled.h1`
  background-color: #f4c75b;
  color: #3e3e3f;
  text-align:center;
  padding-top:10px;
  padding-bottom:10px;
`;

export const HorizontalLine = styled.div`
  border-left: 2px solid #3e3e3f;
  height: 150px;
  padding-right:30px;
`;
 
export const ConnectUs = styled.div`
color: #3e3e3f;
`;

export const ConnectUsHeading = styled.h1``;


export const UrbanLogo = styled.img`
`;

export const DataSpaceLogo  =styled.img`
`;

export const Logo = styled.div`
`;

export const FacebkIcon = styled(FacebookIcon)`
font-size:3em;
`;

export const TwitIcon = styled(TwitterIcon)`
font-size:3em;
`;

export const LinkdnIcon = styled(LinkedInIcon)`
font-size:3em;
`;