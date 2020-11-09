import styled from "styled-components";

export const DetailInfoContainer = styled.section`
  background-color: ${({ lightBg }) => (lightBg ? "#ffffff" : "#3e3e3f")};
  color: ${({ lightBg }) => (lightBg ? "#3e3e3f" : "#fff")};;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5%;
`;

export const DetailHeading = styled.h1`
  color: #f4c75b;
  margin: 20px;
  text-transform: uppercase;
  font-size: 44px;
  text-align: center;
`;

export const DetailList = styled.ul`
  display: flex;
  flex-direction: column;
  width:60%;
  list-style-position: inside;
`;
export const DetailListHeading = styled.h2`
text-align:left;

`;

export const BulletPoints = styled.li`
  margin-bottom: 10px;
  font-size:20px;

`;
