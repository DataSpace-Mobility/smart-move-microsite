import styled from "styled-components";

export const DetailContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  flex-direction: ${({ imgStart }) => (imgStart ? "row" : "row-reverse")};
  padding:0px 50px;
  @media screen and (max-width: 768px) {
    display:flex;
    width:100%;
    padding:0px;
    margin:0px;
  }
`;
export const DetailSectionHeading = styled.h1`
  color: #69bfc3;
  font-size: 66px;
  font-family: "Montserrat", sans-serif;
`;

export const DetailPara = styled.p`
  font-size: 24px;
  padding: 20px;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5em;
  line-height: 1.8em;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const DetailImage = styled.div`
background-color:#69bfc3;
width:160px;
height:110px;
font-size:66px;
color:#fff;
text-align:center;
padding:10px;
font-family: "Montserrat", sans-serif;
font-weight:700;
@media screen and (max-width: 768px) {
    width:100%;
  }
`;
