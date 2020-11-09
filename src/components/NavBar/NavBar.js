import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar__items"> */}
        <a href="https://smartmove.niua.org">Home</a>
        <Link to="/guidelines">Guidelines</Link>
        {/* <Link to="/city-participation">Participation</Link>
        <Link to="/timeline">Timeline</Link> */}
        {/* <Link to="news">News and Updates</Link> */}
        <Link to="/partners">Partners</Link>
        {/* <Link to="faqs">FAQs</Link> */}
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
