import styled from "styled-components";

export const DetailSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
export const DetailSectionHeading = styled.h1`
  color: #69bfc3;
  font-size: 3em;
  border-bottom: 7px solid #69bfc3;
  font-weight: 700;
  width: 40%;
  margin-left: 60px;
  font-family: "Montserrat", sans-serif;
  margin-bottom:100px;
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
    height:auto;
    font-size: 1.2em;
    margin-left: 5%;
    border-bottom: 2px solid #69bfc3;
    width: 50%;
  }
`;
