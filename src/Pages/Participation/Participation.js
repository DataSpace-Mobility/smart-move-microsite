import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

import Parallax from "../../components/parallax/Parallax";
import "./Participation.css";
import Sectors from "../../components/Participation/Sectors/Sectors";
import smart from "../../images/smart.png";
import NavBar from "../../components/NavBar/NavBar"

const Participation = () => {
    const history=useHistory();
    const shareData=()=>{
        history.push('/invitation')
    }
  return (
    <div>
      <NavBar/>
      <Parallax src={smart}/>
      <section className="section1">
        <h1>Smart MOVE : Innovative Urban Mobility Data Challenge</h1>
        <p>
          Organised by Ministry of Housing and Urban Affairs and National
          Institute of Urban Affairs Supported by : GIZ India
          <br></br>
          Implementation Partner : National Institute of Urban Affairs, India{" "}
          <br></br>
          Technical Partner : Cities Forum
        </p>
        <p>
          Building on the National Smart Cities Mission, GIZ and National
          Institute of Urban Affairs (NIUA) are supporting Ministry of Housing
          and Urban Affairs (MoHUA) in organizing SMART MOVE: Innovative Urban
          Mobility Challenge (The Challenge), a global urban mobility challenge
          to address mobility challenges faced by Indian cities.
        </p>
      </section>
      <section className="section2">
        <h1>
          An open innovation challenge for university students<br></br> and
          researchers globally.
        </h1>
        <p>
          Propose innovative urban transport solutions using mobility data and
          help make cities more liveable.
          <br></br>
        </p>
        <p>
          The main objective of the Challenge is to develop solutions for
          enhancing innovation in urban mobility by taking the current situation
          as an opportunity to improve urban mobility system and to help public
          transport's recovery from the ongoing COVID-19 crisis using big data.
          Under the Challenge, we are looking for an innovative solution in the
          urban mobility sector
        </p>
      </section>
      <Sectors />
      <section className="section3">
        <h1>Be a City Partner</h1>
        <p>
          Be a City Partner and get benefited from the Challenge Proposals. You
          can share data from a wide range of Sectors and Sub sectors. Please
          click the link below to begin with the Sharing Wizard.
          <br></br>
        </p>
        <button style={{backgroundColor:"#DC4351", padding:"15px 50px", borderRadius:"30px",color:"whitesmoke", fontSize:"24px", border:"1px solid #DC4351", outline:"none",cursor:"pointer"}} onClick={shareData} tabIndex="-1">
          Click here to share your data
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Participation;
