import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 social-media extra-padding">
          <a
            href="https://twitter.com/SmartMove2020"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/static/media/twitter.9a5da891.svg" alt="" />
          </a>
          <a
            href="https://www.instagram.com/smartmove_2020/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/static/media/instagram.398a2c10.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/smartmove2020"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="/static/media/linkedin.7b865d00.svg" alt="" />
          </a>
        </div>
        <div className="col-md-8"></div>
        <div className="col-md-2 reg-link extra-padding">
          <a href="https://hack.dataspace.mobi">REGISTRATION</a>
        </div>
      </div>
      <div className="row bottom-bar">
        <div className="col-md-12">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">GUIDELINES</a>
            </li>
            <li>
              <a href="/">PARTNERS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
