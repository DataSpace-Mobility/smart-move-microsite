import React from "react";
// import Svg1 from "../SvgImages/SvgImage";
import "./Participate.css";

const Participate = () => {
  return (
    <section className="participate">
      <h1>Participate</h1>
      <div className="participate__details">
        <div className="participate__left">
          <p className="participatePara">
            Partner as a City to get benefited from the challenge.<br></br>Click the
            button below to know more.
          </p>
          <button className="participateButton" tabIndex="-1">
            Learn More
          </button>
        </div>
        <div style={{ borderLeft: "1px solid #FFFFFF", height: "90%" }}></div>
        <div className="participate__right">
          <p className="participatePara">
            Be a part of changing the landscape of urban mobility in India.<br></br>Fill
            out the form to compete in the challenge.
          </p>
          <button className="participateButton" tabIndex="-1">
            Register
          </button>
        </div>
      </div>

      {/* <div
        
      >
        <div>
          <p style={{ color: "white", textAlign: "center" }}>
            Partner as a City to get benefited from the challenge. Click the
            button below to know more.
            <br></br>
          </p>
          <button
            style={{
              backgroundColor: "#DC4351",
              padding: "15px 50px",
              borderRadius: "30px",
              color: "whitesmoke",
              fontSize: "24px",
              border: "1px solid #DC4351",
              outline: "none",
              cursor: "pointer",
            }}
            tabIndex="-1"
          >
            Learn More
          </button>
        </div>
        <div style={{ borderLeft: "1px solid #FFFFFF", height: "90%" }}></div>
        <div></div>
      </div> */}
    </section>
  );
};

export default Participate;
