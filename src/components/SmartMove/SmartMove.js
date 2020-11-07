import React from "react";
import "./SmartMove.css";
import Aatma from "../../images/Aatma.png";
import DigitalIndia from "../../images/DigitalIndia.png";
import SmartCity from "../../images/SmartCity.png";
import Swachh from "../../images/Swachh.png";

const SmartMove = () => {
  return (
    <div className="smartmove">
      <div className="smartmove__row">
        <img
          src={Swachh}
          alt="Swachh Bharat"
          className="smartmove__column"
          style={{ backgroundColor: "#6C6D6F" ,objectFit: "none" }}
        />
        <img
          src={DigitalIndia}
          alt="Digital India"
          className="smartmove__column"
          style={{ backgroundColor: "#F4C75B" ,objectFit: "none" }}
        />
      </div>
      <div className="smartmove__row">
        <img
          src={SmartCity}
          alt="Smart City"
          className="smartmove__column"
          style={{ backgroundColor: "#FFFFFF", border: "1px solid #707070", objectFit: "contain" }}
        />
        <img
          src={Aatma}
          alt="Aatma Nirbhar Barat"
          className="smartmove__column"
          style={{ backgroundColor: "#69BFC3" ,objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default SmartMove;
