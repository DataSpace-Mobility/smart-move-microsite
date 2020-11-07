import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import CityInvitation from "./components/CityInvitation/CityInvitation";
import './App.css'
import Challenge from "./Pages/Challenge/Challenge";
import Details from "./Pages/Details/Details";
import Participation from './Pages/Participation/Participation';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Challenge} />
        <Route path="/details" exact component={Details} />
        <Route path="/challenge" exact component={Challenge} />
        <Route path="/city-participation" exact component={Participation} />
        <Route path="/admin" component={Login} />
        <Route path="/invitation" component={CityInvitation} />
        {/* <Route path="/test" exact component={challenge} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
