import styled from "styled-components";

export const InfoContainer = styled.section`
  background-color: ${({ lightBg }) => (lightBg ? "#ffffff" : "#3e3e3f")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const InfoHeading = styled.h1`
  color: #f4c75b;
  margin: 20px;
  text-transform: uppercase;
  font-size: 44px;
  text-align: center;
`;

export const InfoPara = styled.p`
  color: ${({ lightBg }) => (lightBg ? "#3e3e3f" : "#ffffff")};
  text-align: center;
  font-size: 20px;
  margin: 20px;
  width: 70%;
  line-height: 1.5;
`;
