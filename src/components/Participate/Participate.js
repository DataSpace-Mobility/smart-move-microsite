import React from "react";
import { useHistory } from "react-router-dom";
// import Svg1 from "../SvgImages/SvgImage";
import "./Participate.css";

const Participate = () => {

  const history = useHistory();
  const learnHandler = () =>{
    history.push('/city-participation')
  }
  return (
    <section className="participate">
      <h1>Participate in the challenge</h1>
      <div className="participate__details">
        <div className="participate__left">
          <h1>JOIN US A CITY PARTNER</h1>
          <p className="participatePara">
            Partner as a City to get benefited from the challenge.<br></br>Click the
            button below to know more.
          </p>
          <button className="participateButton" tabIndex="-1" onClick={learnHandler}>
            Learn More
          </button>
        </div>
        <div style={{ borderLeft: "1px solid #FFFFFF", height: "70%" }}></div>
        <div className="participate__right">
          <h1>COMPETE IN THE CHALLENGE</h1>
          <p className="participatePara">
            Be a part of changing the landscape of urban mobility in India.<br></br>Register now to compete.
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
