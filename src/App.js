import React from "react";
import { Route, Switch, HashRouter as Router } from "react-router-dom";

import Home from "./components/Home/Home";
import Partners from "./components/Partners/Partners";
import Privacy from "./components/Privacy/Privacy";

import "./App.scss";
import SignIn from "./Admin/Signin";
import AdminDashboard from "./Admin/Dashboard/AdminDashboard";
import CityInvitation from "./components/CityInvitation/CityInvitation";
import CityForm from "./components/CitySingleForm/CityForm";
import Guideline from "./components/Guidelines/Guidelines";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/guidelines" exact component={Guideline} />
          <Route path="/partners" component={Partners} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/admin" component={SignIn} />
          <Route path="/dashboard" component={AdminDashboard} />
          <Route exact path="/form" component={CityForm} />
          <Route exact path="/invitation" component={CityInvitation} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
