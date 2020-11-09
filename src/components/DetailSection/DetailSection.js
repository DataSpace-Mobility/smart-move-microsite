import { Grid } from "@material-ui/core";
import React from "react";
import One from "../../images/Partners/one.svg";
import Two from "../../images/Partners/two.svg";
import Three from "../../images/Partners/three.svg";
import Four from "../../images/Partners/four.svg";

import {
  DetailSectionContainer,
  DetailSectionHeading,
} from "./DetailSection.elements";
import DetailContent from "./DetailContent/DetailContent";

const DetailSection = () => {
  return (
    <DetailSectionContainer>
      <DetailSectionHeading>WHAT ARE WE LOOKING FOR?</DetailSectionHeading>
      <DetailContent
        imgStart={true}
        no="1"
        para="How can different mobility data be combined, ideally on a platform, to create integrated and multi-modal customer propositions?"
      />
      <DetailContent
        imgStart={false}
        no="2"
        para="How can on-board and off-board vehicle data be combined with users’ data (e.g. from smartphones) and other data sources to create value for the customer?"
      />
      <DetailContent
        imgStart={true}
        no="3"
        para="How the mobility data, when linked with the land use data, can create a decision-making tool to evaluate various demand management measures?"
      />
      <DetailContent
        imgStart={false}
        no="4"
        para="What are some FinTech solutions that can deliver contactless, integrated, seamless payment (e.g. multi-modal services, fuel, EV charging, parking)?"
      />
    </DetailSectionContainer>
  );
};

export default DetailSection;

{
  /* <Grid container>
      <Grid item xs={12}>
        <h1 className="details_heading">WHAT are we LOOKING FOR?</h1>
      </Grid>
      <Grid container item xs={12} direction="row" alignItems="center" style={{paddingLeft:"2%",paddingRight:"2%"}}>
        <img className="details_img" src={One} alt="1" />
        <p className="details_para">
          How can different mobility data be combined, ideally on a platform, to
          create integrated and multi-modal customer propositions?
        </p>
      </Grid>
      <Grid container item xs={12} direction="row-reverse" alignItems="center" style={{paddingLeft:"2%",paddingRight:"2%"}}>
        <img className="details_img" src={Two} alt="3" />
        <p className="details_para">
          How can different mobility data be combined, ideally on a platform, to
          create integrated and multi-modal customer propositions?
        </p>
      </Grid>
      <Grid container item xs={12} direction="row" alignItems="center" style={{paddingLeft:"2%",paddingRight:"2%"}}>
        <img className="details_img" src={Three} alt="1" />
        <p className="details_para">
          How can different mobility data be combined, ideally on a platform, to
          create integrated and multi-modal customer propositions?
        </p>
      </Grid>
      <Grid container item xs={12} direction="row-reverse" alignItems="center" style={{paddingLeft:"2%",paddingRight:"2%"}}>
        <img className="details_img" src={Four} alt="1" />
        <p className="details_para">
          How can different mobility data be combined, ideally on a platform, to
          create integrated and multi-modal customer propositions?
        </p>
      </Grid>
    </Grid> */
}
