import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card__image" src={props.src} alt="name1" />
      <div className="card__section" style={props.style}>
        <h2>{props.heading}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default Card;
