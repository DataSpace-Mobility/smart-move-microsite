import styled from "styled-components";

export const ParticipateContainer = styled.section`
  background-color: ${({ lightBg }) => (lightBg ? "#ffffff" : "#3e3e3f")};
  color: ${({ lightBg }) => (lightBg ? "#3e3e3f" : "#fff")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`;

export const ParticipateHeading = styled.h1`
color: #f4c75b;
margin-bottom: 20px;
margin-left: 20px;
margin-right: 10px;
margin-top:20px;
text-transform: uppercase;
font-size: 44px;
text-align: center
`;

export const ParticipateContent = styled.p`
color: #fff;
text-align: center;
font-size: 20px;
margin: 20px;
width: 70%;
line-height: 1.5;
margin-bottom: 50px
`;

export const ParticipateButton = styled.button`
background-color: rgb(220, 67, 81);
padding: 15px 50px;
border-radius: 30px;
color: whitesmoke;
font-size: 24px;
border: 1px solid rgb(220, 67, 81);
outline: currentcolor none medium;
cursor: pointer;
`;