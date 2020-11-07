import styled from "styled-components";

export const ParallaxImage = styled.div`
  background-image: url( ${({ src }) => (src)});
  min-height: 100%;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  // background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
`;

export const ParallaxHeading = styled.h1`
  width: 70%;
  color: #ffffff;
  font-size: 98px;
  line-height: 100px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const ParallaxDescription = styled.p`
  color: #ffffff;
  line-height: 50px;
  font-size: 35px;
  text-align: center;
  width: 70%;
`;
