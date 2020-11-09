import { Grid } from "@material-ui/core";
import React from "react";
import DataChallenge from "../../components/DataChallenge/DataChallenge";
import DetailSection from "../../components/DetailSection/DetailSection";
import HomeFooter from "../../components/Footer/HomeFooter";
import HowParticipate from "../../components/HowParticipate/HowParticipate";
import NavBar from "../../components/NavBar/NavBar";
import SmartMoveLogo from "../../images/details/SmartMoveLogoVer.svg";
import "./Details.css";

const Details = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <img
          src={SmartMoveLogo}
          alt="smart move logo"
          style={{
            padding: "10%",
            width: "50%",
            marginLeft: "25%",
            marginRight: "25%",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <DetailSection />
      </Grid>
      <Grid item xs={12}>
        <DataChallenge />
      </Grid>
      <Grid item xs={12}>
        <HowParticipate />
      </Grid>
      <HomeFooter />
    </Grid>
  );
};

export default Details;

{
  /* <div>
      <NavBar />
      <Parallax src={SmartMoveImage} />
      <InfoSection
        heading="Details of Data Challenge"
        // para1="Organised by Ministry of Housing and Urban Affairs"
        para2="The data challenge is outlined considering the Government of India’s efforts to become Atmanirbhar (self-reliant) and help cities to transform into a digitally empowered society. The initiative focuses to provide students/researchers an opportunity to help the nation in building efficient and resilient urban transport systems and address some of the pressing problems that we as a commuter face every day."
        para1="The aim of the data challenge is to provide a common platform to young minds studying and researching in different institutes to put on their thinking caps and come up with feasible solutions to tackle the multitude of issues that plague the modern urban mobility and to also address the threats posed by COVID-19 pandemic on Urban Transport, specifically on public transport."
      />
      <DetailsInfoSection
        heading="WHAT ARE WE LOOKING FOR?"
        lightBg
        listheading="We are looking for solutions that can help unlock the potential of urban mobility data and generate ideas to address the following:"
        list1="How can different mobility data be combined, ideally on a platform, to create integrated and multi-modal customer propositions?"
        list2="How can on-board and off-board vehicle data be combined with users’ data (e.g. from smartphones) and other data sources to create value for the customer? "
        list3="How the mobility data when linked with the land use data can create a decision-making tool to evaluate various demand management measures."
        list4="What are some FinTech solutions that can deliver contact less integrated, seamless payment (e.g. multi-modal services, fuel, EV charging, parking)?"
      />
      <DetailsInfoSection
        heading="DATA CHALLENGE STATEMENT"
        listheading="There are three data challenge statements under which a team can participate:"
        list2="How to generate insights and creating value from the mobility data "
        list3="How to learn more on commuter behaviours and preferences with data gathered currently with various transit agencies and private transport operators "
        list4="How to influence decision making for a traveller to consider travel at a different time and / or using alternate options, so transportation demand including public transport demand is more evenly distributed through the day"
      />
      <Objective />
      <DetailsInfoSection
        heading="WHO CAN PARTICIPATE"
        lightBg
        listheading="If you are a student with any University globally or a researcher with any research institute and have passion to work for improving transportation systems in Indian Cities, this challenge is for you."
        list1="The Challenge is open to Students and Research Scholars."
        list2="The team member can also be a mixed of faculty members with students or inter university teams or team mix of university and research institutes"
        list3="Collaboration between multidisciplinary participants is encouraged."
        list4="The idea should be unique to the team. Apart from the data portal, the team can access data from various sources with required authorisation or collect their own datasets through primary and secondary surveys to substantiate the proposal, however the analysis and the final proposal should be unique of their own."
        list5="A team can submit more than one idea in all the three sub-categories. However, there shall not be any repetition of proposal within the same theme. A unique email address should be used for each application."
        list6="Students are especially encouraged to participate with multidisciplinary teams from different faculties, universities and research institutions. Please ensure the affiliations are explicitly mentioned, and if selected for funding, there is a clear demarcation of rights. An explanatory note with stated understanding needs to be signed by all members of the team and submitted along with the application."
      />
      <ParticipateSection heading="Compete in the challenge" content="Be a part of changing the landscape of urban mobility in India. Register Now to Compete" buttontext="Register Now"/>
      <Footer />
    </div> */
}
