import React from "react";
// import {Svg1, Svg2,Svg3, Svg4, Svg5} from '../SvgImages/SvgImage'
import Grad1 from "../../images/Grad1.png";
import Grad2 from "../../images/Grad2.png";
import Grad3 from "../../images/Grad3.png";
import Grad4 from "../../images/Grad4.png";
import Grad5 from "../../images/Grad5.png";
import Card from "./Card/Card";
import "./Objective.css";

const Objective = () => {
  return (
    <section className="objective">
      <h1>OBJECTIVES OF THE CHALLENGE</h1>
      <div className="objective__cards">
        <Card
          src={Grad1}
          desc="Set standards and devise a framework for data sharing between the public and private sector"
        />
        <Card
          src={Grad2}
          desc="Integrating mobility and urban planning"
        />
        <Card
          src={Grad3}
          desc="Encourage technology driven innovative solutions for cities"
        />
        <Card
          src={Grad4}
          desc="Supporting Training and Capacity Building through data driven methodologies"
        />
        <Card
          src={Grad5}
          desc="Building self-reliance within the cities"
        />
      </div>
    </section>
  );
};

export default Objective;
