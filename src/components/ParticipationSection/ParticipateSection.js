import React from "react";
// import Participate from "../Participate/Participate";
import {
    ParticipateButton,
  ParticipateContainer,
    ParticipateContent,
  ParticipateHeading,
} from "./ParticipateSection.elements";

const ParticipateSection = (props) => {
  return (
    <ParticipateContainer>
      <ParticipateHeading>{props.heading}</ParticipateHeading>
      <ParticipateContent>{props.content}</ParticipateContent>
      <ParticipateButton>{props.buttontext}</ParticipateButton>
    </ParticipateContainer>
    // <section className="section3">
    //   <h1>Be a City Partner</h1>
    //   <p>
    //     Be a City Partner and get benefited from the Challenge Proposals. You
    //     can share data from a wide range of Sectors and Sub sectors. Please
    //     click the link below to begin with the Sharing Wizard.
    //     <br></br>
    //   </p>
    //   <button
    //     style={{
    //       backgroundColor: "#DC4351",
    //       padding: "15px 50px",
    //       borderRadius: "30px",
    //       color: "whitesmoke",
    //       fontSize: "24px",
    //       border: "1px solid #DC4351",
    //       outline: "none",
    //       cursor: "pointer",
    //     }}
    //     onClick={shareData}
    //     tabIndex="-1"
    //   >
    //     Click here to share your data
    //   </button>
    // </section>
  );
};

export default ParticipateSection;
