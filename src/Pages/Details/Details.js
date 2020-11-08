import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import NavBar from "../../components/NavBar/NavBar";
import Parallax from "../../components/parallax/Parallax";
import SmartMoveImage from "../../images/challenge/smartmove.png";

const Details = () => {
  return (
    <div>
      <NavBar />
      <Parallax src={SmartMoveImage} />
      <InfoSection
        heading="Details of Data Challenge"
        // para1="Organised by Ministry of Housing and Urban Affairs"
        para2="The data challenge is outlined considering the Government of India’s efforts to become Atmanirbhar (self-reliant) and help cities to transform into a digitally empowered society. The initiative focuses to provide students/researchers an opportunity to help the nation in building efficient and resilient urban transport systems and address some of the pressing problems that we as a commuter face every day."
        para1="The aim of the data challenge is to provide a common platform to young minds studying and researching in different institutes to put on their thinking caps and come up with feasible solutions to tackle the multitude of issues that plague the modern urban mobility and to also address the threats posed by COVID-19 pandemic on Urban Transport, specifically on public transport."
      />
      <InfoSection
        heading="WHAT ARE WE LOOKING FOR?"
        lightBg
        para2="We are looking for solutions that can help unlock the potential of urban mobility data and generate ideas to address the following:"
        // para2="Implementation Partner : National Institute of Urban Adffairs, India"
        para3="• How can different mobility data be combined, ideally on a platform, to create integrated and multi-modal customer propositions? • How can on-board and off-board vehicle data be combined with users’ data (e.g. from smartphones) and other data sources to create value for the customer? • How the mobility data when linked with the land use data can create a decision-making tool to evaluate various demand management measures. • What are some FinTech solutions that can deliver contact less integrated, seamless payment (e.g. multi-modal services, fuel, EV charging, parking)?"
      />
      <InfoSection
        heading="DATA CHALLENGE STATEMENT"
        para1="There are three data challenge statements under which a team can participate:"
        // para2="Implementation Partner : National Institute of Urban Adffairs, India"
        para3="• How to generate insights and creating value from the mobility data • How to learn more on commuter behaviours and preferences with data gathered currently with various transit agencies and private transport operators • How to influence decision making for a traveller to consider travel at a different time and / or using alternate options, so transportation demand including public transport demand is more evenly distributed through the day"
      />
    </div>
  );
};

export default Details;
