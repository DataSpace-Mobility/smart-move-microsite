import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import CityInvitation from "./components/CityInvitation/CityInvitation";
import Home from "./Pages/Participation/Home";
import './App.css'
import Challenge from "./Pages/Challenge/Challenge";
import challenge from "./components/html/challenge";
import Details from "./components/html/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Challenge} />
        <Route path="/challenge" exact component={Challenge} />
        <Route path="/city-participation" exact component={Home} />
        <Route path="/admin" component={Login} />
        <Route path="/invitation" component={CityInvitation} />
        <Route path="/test" exact component={challenge} />
        <Route path="/test2" exact component={Details} />
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
