import React from "react";
// import Sectors from "../../components/Home/Sectors/Sectors";
import NavBar from "../../components/NavBar/NavBar";
import Parallax from "../../components/parallax/Parallax";
import SmartMoveImage from "../../images/challenge/smartmove.png";
// import SmartMove1 from "../../images/SmarMove1.png";
import Participate from "../../components/Participate/Participate";
import Objective from "../../components/Objective/Objective";
import Walkthrough from "../../components/Walkthrough/Walkthrough";
import InfoSection from "../../components/InfoSection/InfoSection";
import InfoImageSection from "../../components/infoImageSection/InfoImageSection";
import InfoSmartImage from "../../images/challenge/Smart5.svg";
import BusImage from "../../images/challenge/Group 250.svg";
import CycleImage from "../../images/challenge/Group 257.svg";
import CarImage from "../../images/challenge/Group 225.svg";
import Benefits from "../../components/Benefits/Benefits";
import walk1 from "../../images/challenge/Walk1.svg";
import timeline from "../../images/challenge/Timeline.svg";
import Footer from "../../components/Footer/Footer";

const Challenge = () => {
  return (
    <div>
      <NavBar />
      <Parallax src={SmartMoveImage} />
      <InfoSection
        heading="Smart MOVE : Innovative Urban Mobility Data Challenge"
        para1="Organised by Ministry of Housing and Urban Affairs"
        para1subheading="Supported by : GIZ
        India"
        para2="Implementation Partner : National Institute of Urban Affairs, India"
        para2subheading="Technical Partner : Cities Forum"
        para3="Building on the Smart Cities Mission, GIZ and National Institute of
          Urban Affairs (NIUA) are supporting Ministry of Housing and Urban
          Affairs (MoHUA) in organizing SMART MOVE: Innovative Urban Mobility
          Challenge, a global urban mobility challenge to address mobility
          challenges faced by Indian cities."
      />
      <InfoImageSection
        heading="WHAT IS SMART MOVE?"
        lightbg={true}
        imgStart={true}
        image={InfoSmartImage}
        para1="SMART MOVE is an Innovative Urban Mobility Challenge being organized
      at global level to propose solutions to address mobility challenges
      faced by Indian cities."
        para2="The data challenge is outlined to propose solutions around
      the Government of India’s various flagship programmes to help cities
      transform into a digitally empowered society."
        para3="The challenge is open to students and researchers from
      national and international universities and institutes."
      />
      <InfoImageSection
        heading="THEMES OF THE CHALLENGE"
        image={BusImage}
        lightbg={false}
        imgStart={true}
        paraheading="Restoring Public Transport Ridership"
        parasubheading="COVID-19 recovery | Cost-effective solutions"
        para1="Developing COVID-19 recovery models that focus on the skewed mobility
         preferences and absence of safe mobility in the post-pandemic cities, 
         either through technology-based ideas or innovative mobility plans for cost-effective solutions.
        The purpose is to use the available mobility datasets and understand commuter travel patterns to restore public transport operations. One must keep the demand management, fleet augmentation, data-driven, responsive approach, digitalization, real-time information etc. in mind."
        style={{marginTop:"-80px"}}
      />
      <InfoImageSection
        image={CycleImage}
        lightbg={false}
        imgStart={false}
        paraheading="Achieving Sustainable Transport and Resilience"
        parasubheading="Multi-modal Integration | Sustainable transport modes"
        para1="Ideas that give special attention to the distribution of street space for different users. It should further follow a thorough plan for promoting multi-modal integration and sustainable modes of transport - including Non-Motorised Transport (NMT), pedestrians, cyclists and other formal and informal para-transit modes. The proposal should give considerable importance to data interoperability and design approaches for each selected mode based on available and attainable datasets."
        
      />
      <InfoImageSection
        image={CarImage}
        lightbg={false}
        imgStart={true}
        paraheading="Equity in Mobility"
        parasubheading="Gender and Safety | Inclusivity and efficiency improvement"
        para1="Mobility ideas for people across all genders, age, income groups, and marginalised population. The proposals should pay attention to inclusivity and efficiency improvement, and affordable solutions considering the changing mobility patterns."
      />
      <Walkthrough heading="CHALLENGE WALKTHROUGH" image={walk1} terms="Cities with more than 500,000 population"/>
      <Benefits />
      <Walkthrough heading="TIMELINE" image={timeline}/>
      <Participate />
      <Footer />
    </div>
  );
};

export default Challenge;
