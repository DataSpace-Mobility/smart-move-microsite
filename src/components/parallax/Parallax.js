import React from "react";
import { ParallaxImage } from "./Parallax.elements";

const Parallax = (props) => {
  return (
      <ParallaxImage src={props.src} style={props.style}/>
  );
};

export default Parallax;
