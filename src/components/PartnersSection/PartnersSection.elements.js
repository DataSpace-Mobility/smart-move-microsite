import styled from "styled-components";

export const PartnersSection = styled.div`
  font-family: "Montserrat", sans-serif;
`;

export const PartnerRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction:column;
  }
`;

export const PartnersSectionHeading = styled.h1`
  color: #dc4351;
  text-align: left;
  border-bottom: 5px solid #dc4351;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  text-transform: uppercase;
  width:60%;
  margin-bottom:50px;
  margin-left:60px;

  @media screen and (max-width: 768px) {
    font-size:15px;
    border-bottom: 2px solid #dc4351;
    padding-bottom:3px;
    margin-left:20px;
    width:80%;
  }
`;

