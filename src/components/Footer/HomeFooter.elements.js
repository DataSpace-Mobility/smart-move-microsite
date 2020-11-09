import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Grid } from "@material-ui/core";

export const HomeFooterContainer = styled.section`
  display: flex;
  background-color: #dc4351;
  border-top: 5px solid #141415;
  padding: 40px 0px;
  color: #fff;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterRow = styled.div`
  display: flex;
`;

export const FooterSmall = styled.p`
  padding: 0 20px;
  font-size: 1em;
  margin-bottom: 30px;
  font-family: "Montserrat", sans-serif;
`;

export const FooterBig = styled.b`
  font-family: "Montserrat", sans-serif;
`;

export const FooterColumn = styled.div``;

export const SmartMoveLogo = styled.img`
  width: 140px;
  @media screen and (max-width: 768px) {
    padding-bottom: 40px;
  }
`;

// export const FooterContent = styled.p`
//   color: #3e3e3f;
//   line-height: 43px;
//   margin: 50px;
// `;

// export const FooterHeading = styled.h1`
//   background-color: #f4c75b;
//   color: #3e3e3f;
//   text-align: center;
//   padding-top: 10px;
//   padding-bottom: 10px;
// `;

// export const HorizontalLine = styled.div`
//   border-left: 2px solid #3e3e3f;
//   height: 150px;
//   padding-right: 30px;
// `;

// export const ConnectUs = styled.div`
//   color: #3e3e3f;
//   margin-right: 20px;
// `;

// export const ConnectUsHeading = styled.h1``;

// export const UrbanLogo = styled.img`
//   width: 40%;
//   margin-bottom: 2%;
// `;

// export const DataSpaceLogo = styled.img`
//   width: 60%;
// `;

// export const Logo = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

export const FacebkIcon = styled(FacebookIcon)`
  font-size: 3em;
`;

export const TwitIcon = styled(TwitterIcon)`
  font-size: 3em;
`;

export const LinkdnIcon = styled(LinkedInIcon)`
  font-size: 3em;
`;

export const InstaIcon = styled(InstagramIcon)`
  font-size: 3em;
`;

export const SocialLink = styled.a`
  color: #fff;
  text-decoration: none;
  background-color: transparent;
`;
