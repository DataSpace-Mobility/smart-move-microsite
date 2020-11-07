import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <img src={props.src} alt="gradient steps" />
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
