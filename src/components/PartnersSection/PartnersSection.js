
import React from "react";
import Partner from "./Partner/Partner";
import CityForum from "../../images/Partners/citiesforum.png";
import Giz from "../../images/Partners/giz.svg";
import Ministry from "../../images/Partners/Group 19@2x.png";
import {
  PartnerRow,
  PartnersSection,
  PartnersSectionHeading,
} from "./PartnersSection.elements";

const Partners = () => {
  return (
    <PartnersSection>
      {/* <PartnersSectionHeading></PartnerSectionHeading> */}
      <PartnersSectionHeading>
        The Data Challenge is supported by the following organisations
      </PartnersSectionHeading>
      <PartnerRow >
        <Partner
          image={Ministry}
          heading="Ministry of Housing and Urban Affairs and National Institute of Urban Affairs"
          subheading="Project Implementation Partner"
          para="Ministry of Housing and Urban Affairs, Government of India is implementing a Smart Cities Mission in India. The Mission objective is to develop more resilient and technology powered cities and urban transport system. National Institute of Urban Affairs is the premiere urban sector think tank in India and is tasked to implement this challenge."
        />
        <Partner
          image={Giz}
          heading="GIZ India"
          subheading="Project Development and Support Partner"
          para="GIZ India is part of German Development Agency. GIZ supported SMART-SUT project is supporting Ministry of Housing and Urban Affairs (MoHUA) in organizing this national level data challenge to address urban mobility challenges faced by Indian cities."
        />
        <Partner
          image={CityForum}
          heading="CITIES FORUM"
          subheading="Project Technical Partner"
          para="Cities Forum is a specialized strategic advisory institution works in cities and mobility sector. Cities Forum will provide technical support to GIZ and NIUA in implementing this data challenge."
        />
      </PartnerRow>
    </PartnersSection>

    // <Grid container>
    //   <Grid item xs={12}>
    //     <PartnersSectionHeading>
    //       The Data Challenge is supported by the following organisations
    //     </PartnersSectionHeading>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid item xs={4}>
    //       <img src={Ministry} alt="Ministry Logo" />
    //     </Grid>
    //     <Grid item xs={4}>
    //       <img src={Giz} alt="Giz logo" />
    //     </Grid>
    //     <Grid item xs={4}>
    //       <img src={CityForum} alt="City Forum" />
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid item xs={3}>
    //       <PartnerHeading>
    //         Ministry of Housing and Urban Affairs and National Institute of
    //         Urban Affairs
    //       </PartnerHeading>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <PartnerHeading>GIZ India</PartnerHeading>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <PartnerHeading>CITIES FORUM</PartnerHeading>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid item xs={3}>
    //       <PartnerSubHeading>Project Implementation Partner</PartnerSubHeading>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <PartnerSubHeading>
    //         Project Development and Support Partner
    //       </PartnerSubHeading>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <PartnerSubHeading>Project Technical Partner</PartnerSubHeading>
    //     </Grid>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Grid item xs={3}>
    //       <PartnerPara>
    //         Ministry of Housing and Urban Affairs, Government of India is
    //         implementing a Smart Cities Mission in India. The Mission objective
    //         is to develop more resilient and technology powered cities and urban
    //         transport system. National Institute of Urban Affairs is the
    //         premiere urban sector think tank in India and is tasked to implement
    //         this challenge.
    //       </PartnerPara>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <PartnerPara>
    //       GIZ India is part of German Development Agency. GIZ supported SMART-SUT project is supporting Ministry of Housing and Urban Affairs (MoHUA) in organizing this national level data challenge to address urban mobility challenges faced by Indian cities.
    //       </PartnerPara>
    //     </Grid>
    //     <Grid item xs={3}>
    //       <PartnerPara>
    //       Cities Forum is a specialized strategic advisory institution works in cities and mobility sector. Cities Forum will provide technical support to GIZ and NIUA in implementing this data challenge.
    //       </PartnerPara>
    //     </Grid>
    //   </Grid>
    // </Grid>
  );
};

export default Partners;

// {/* <Grid item xs={4}>
//       {/* <PartnerCard /> */}
//       <Partner
//       src={Ministry}
//       heading="Ministry of Housing and Urban Affairs and National Institute of Urban Affairs"
//       subheading="Project Implementation Partner"
//       para="Ministry of Housing and Urban Affairs, Government of India is implementing a Smart Cities Mission in India. The Mission objective is to develop more resilient and technology powered cities and urban transport system. National Institute of Urban Affairs is the premiere urban sector think tank in India and is tasked to implement this challenge."
//     />
//   </Grid>
//   <Grid item xs={4}>
//     <Partner
//       src={Giz}
//       heading="GIZ India"
//       subheading="Project Development and Support Partner"
//       para="GIZ India is part of German Development Agency. GIZ supported SMART-SUT project is supporting Ministry of Housing and Urban Affairs (MoHUA) in organizing this national level data challenge to address urban mobility challenges faced by Indian cities."
//     />
//     {/* <Partner /> */}
//   </Grid>
//   <Grid item xs={4}>
//     <Partner
//       src={CityForum}
//       heading="CITIES FORUM"
//       subheading="Project Technical Partner"
//       para="Cities Forum is a specialized strategic advisory institution works in cities and mobility sector. Cities Forum will provide technical support to GIZ and NIUA in implementing this data challenge."
//     />
//     {/* <PartnerCard /> */}
//   </Grid> */}
