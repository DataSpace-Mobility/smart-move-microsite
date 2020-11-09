import styled from "styled-components";

export const PartnerContainer = styled.div`
  display: grid;
  font-family: "Montserrat", sans-serif;
  padding: 20px;
  width: 30%;

  @media screen and (max-width: 768px) {
    display: grid;
    font-family: "Montserrat", sans-serif;
    padding: 20px;
    width:100%;
  }
`;
export const PartnerImage = styled.img`
  height: 100px;
  margin-bottom: 10px;
  width: 50%;
  object-fit: contain;
 
`;
export const PartnerHeading = styled.h1`
  color: #dc4351;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  height: 170px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    height:auto;
  }
`;

export const PartnerSubHeading = styled.h2`
  color: #3e3e3f;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  height: 80px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    height:auto;
  }
`;

export const PartnerPara = styled.p`
  font-family: "Montserrat", sans-serif;
  line-height: 28px;
  height: 400px;

  @media screen and (max-width: 768px) {
    height:auto;
  }
`;
