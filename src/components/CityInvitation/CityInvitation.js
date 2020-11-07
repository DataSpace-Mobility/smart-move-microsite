import React from "react";
import PersonDetails from "./PersonDetails/PersonDetails";
import Header from "./Header/Header";
import "./CityInvitation.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CityDetails from "./CityDetails/CityDetails";
import ThankYou from "./ThankYou/ThankYou";
import Preview from "./Preview/Preview";

const CityInvitation = () => {
  return (
    <div className="city__invitation">
      <Router>
        <Header />
        <Switch>
          <Route path="/invitation" exact component={PersonDetails} />
          <Route path="/invitation/city-data" exact component={CityDetails} />
          <Route path="/invitation/thankyou" exact component={ThankYou} />
          <Route path="/invitation/preview" exact component={Preview} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default CityInvitation;
