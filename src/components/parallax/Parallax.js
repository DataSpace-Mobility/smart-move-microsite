import React from "react";
import { ParallaxImage } from "./Parallax.elements";

const Parallax = (props) => {
  return (
      <ParallaxImage src={props.src} />
  );
};

export default Parallax;
