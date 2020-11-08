import styled from "styled-components";

export const BenefitsContainer = styled.div`
  background-color: ${({ lightBg }) => (lightBg ? "#ffffff" : "#F4C75B")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10%;
  padding-bottom: 5%;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
export const BenefitsHeading = styled.h1`
  margin: 2%;
  color: #3e3e3f;
  font-size: 66px;
`;
