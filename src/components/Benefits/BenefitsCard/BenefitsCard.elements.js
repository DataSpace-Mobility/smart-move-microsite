import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ lightBg }) => (lightBg ? "#69BFC3" : "#DC4351")};
  width: 35%;
  height:35%;
  display: flex;
  flex-direction: column;
  margin:5%;
  box-shadow: 6px 6px 6px #00000029;
  border: ${({ lightBg }) => (lightBg ? "1px solid #69BFC3" : "1px solid #dc4351")}; ;
  border-radius: 30px;
  padding:30px 30px 30px 45px;
`;

export const CardLine = styled.div`
  width: 100px;
  height: 2px;
  margin-bottom:5px;
  background-color: #ffffff;
`;

export const CardHeading = styled.h2`
color: #FFFFFF;
margin-bottom:5px;
width:90%;
`;

export const CardPara = styled.p`
color: #FFFFFF;
width:90%;
`;
