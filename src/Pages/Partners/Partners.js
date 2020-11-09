import { Grid } from "@material-ui/core";
import React from "react";
import HomeFooter from "../../components/Footer/HomeFooter";
import NavBar from "../../components/NavBar/NavBar";
// import Parallax from '../../components/parallax/Parallax';
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import SmartMoveLogo from "../../images/details/SmartMoveLogoVer.svg";


export const Partners = () => {
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
      <PartnersSection />
      <HomeFooter />
    </Grid>
  );
};
