import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <div className="navbar__items"> */}
        <Link to="/challenge">Challenge</Link>
        <Link to="/details">Details</Link>
        <Link to="/city-participation">Participation</Link>
        <Link to="timeline">Timeline</Link>
        <Link to="news">News and Updates</Link>
        <Link to="organizers">Organizers</Link>
        <Link to="faqs">FAQs</Link>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
