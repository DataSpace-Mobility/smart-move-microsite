import React from "react";
import {
  ParticipateConatiner,
  ParticipateContent,
  ParticipateHeading,
  ParticipatePara,
} from "./HowParticipate.elements";
import ParticipateCard from "./ParticipateCard/ParticipateCard";

const HowParticipate = () => {
  return (
    <ParticipateConatiner>
      <ParticipateHeading>how to participate</ParticipateHeading>
      <ParticipatePara>
        Teams must have no more than four members and have at least one team
        members of Indian nationality who understand the local context of the
        Indian mobility sector.
      </ParticipatePara>
      <ParticipateContent>
        <ParticipateCard
          heading="Concept Stage"
          para="At the Concept Stage, each team has to submit a concept note in a predefined template. The concept note shall detail out the proposed solution, team composition and project plan."
        />
        <ParticipateCard
          heading="City Matchmaking Stage"
          para="The shortlisted concept note shall be shared with the cities, and we will arrange the matchmaking between cities and participants. The teams shall get an opportunity to present their proposal to the partner cities and develop a solution in consultation with cities."
        />
        <ParticipateCard
          heading="Final Submission"
          para="After the matchmaking, teams shall get an opportunity to mentor under experts and/or cities, and this can facilitate the development of solutions using the mobility data for improving, elaborating, and creating POC along with the business model."
        />
      </ParticipateContent>
    </ParticipateConatiner>
  );
};

export default HowParticipate;
