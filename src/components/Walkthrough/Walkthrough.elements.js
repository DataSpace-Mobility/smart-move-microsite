import styled from "styled-components";

export const WalkContainer = styled.div`
  background-color: ${({ lightBg }) => (lightBg ? "#ffffff" : "#F4C75B")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;

  svg {
    font-family: "Barlow Condensed", sans-serif;
  }
`;

export const WalkHeading = styled.h1`
  margin: 20px;
  color: #f4c75b;
  font-size: 66px;
  margin-top:60px;
`;

export const WalkImage = styled.img`
  margin-top: 100px;
  width: 80%;
`;

export const Steps = styled.div`
  display: flex;
`;
