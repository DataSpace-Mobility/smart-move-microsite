import styled from "styled-components";

export const InfoImageContainer = styled.section`
  background-color: ${({ lightBg }) => (lightBg ? "#ffffff" : "#F4C75B")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`;
// #3E3E3F
export const InfoImageHeading = styled.h1`
  color: ${({ lightCol }) => (lightCol ? "#f4c75b" : "#3E3E3F")};
  margin: 20px;
  text-transform: uppercase;
  font-size: 66px;
  text-align: center;
  margin-top:50px;
  margin-bottom:70px;
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
`;

export const InfoImage = styled.img`
  flex: 0.5;
  margin-left: 50px;
  object-fit:contain;
  padding:20px;
`;

export const Para = styled.div`
  display: flex;
  flex: 0.4;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 30px;
  padding-left: 30px;
  color: #3e3e3f;
`;

export const InfoImagePara = styled.p`
  color: ${({ lightBg }) => (lightBg ? "#3e3e3f" : "#000")};
  text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
  font-size: 22px;
  line-height: 1.5;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ParaHeading = styled.h2`
text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
text-transform: uppercase;
font-size:36px;
`;

export const ParaSubHeading = styled.h3`
text-align: ${({ imgStart }) => (imgStart ? "left" : "right")};
font-family: 'Roboto', sans-sarif;
padding-top:5px;
font-size:25px;
`;
