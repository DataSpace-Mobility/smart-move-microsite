import styled from "styled-components";

export const DataContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  @media screen and (max-width: 768px) {
    padding-right: 5%;

  }
`;

export const DataHeading = styled.h1`
  color: #dc4351;
  font-size: 3em;
  border-bottom: 7px solid #dc4351;
  font-weight: 700;
  width: 40%;
  text-align: right;
  float: right;
  margin-left: auto;
  margin-right: 50px;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    height:auto;
    font-size: 1.2em;
    border-bottom: 2px solid #dc4351;
    margin-right: 0px;
    width: 70%;
  }
`;

export const DataPara = styled.ul`
  list-style-position: inside;
  padding: 100px;
  margin-left: 5%;
  margin-right: 5%;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: .9em;
    margin-left: 5%;
    margin-right: 0%;
    padding: 10px;

  }
`;

export const DataParaList = styled.li`
  margin-bottom: 10px;
  font-size: 1.5em;
  line-height: 1.8em;
  color: #3e3e3f;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 1.2em;
   
  }
`;
