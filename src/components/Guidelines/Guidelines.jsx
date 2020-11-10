import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Hero from "../Home/hero.svg";
// import PartnerLogos from "../Home/partner-logos.png";
// import Timeline from "../Home/timeline.svg";
// import MOHUA from "../Home/partners/mohua.svg";
// import NIUA from "../Home/partners/niua.svg";
// import SCM from "../Home/partners/scm.svg";
// import GIZ from "../Home/partners/giz.svg";
// import CitiesForum from "../Home/partners/cities_forum.png";
// import DataSpace from "../Home/partners/dataspace.svg";
import "./Guidelines.scss";

function Guideline() {
  return (
    <>
      <Header />
      <section className="Guidelines">
        <section className="looking">
          <div className="container">
            <div className="heading heading-yellow heading-center">
              <h1>WHAT ARE WE LOOKING FOR?</h1>
            </div>
            <br />
            <ul>
              <li>
                <p>
                  Combine different mobility datasets on a platform to create
                  integrated and multi-modal customer propositions.
                </p>
              </li>
              <li>
                <p>
                  Combine on-board & off-board vehicle data with users’ data
                  (e.g. from smartphones) and other data sources to create value
                  for customers.
                </p>
              </li>
              <li>
                <p>
                  Create a decision-making tool by linking mobility data with
                  the land use data to evaluate various demand management
                  measures.
                </p>
              </li>
              <li>
                <p>
                  Provide some Fin-tech solutions that deliver contactless,
                  integrated, seamless payment (e.g. multi-modal services, fuel,
                  EV charging, parking).
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="unlock container">
          <div className="heading heading-red">
            <h1>HOW TO PARTICIPATE</h1>
          </div>

          <p className="align-left">
            Teams can have a maximum of four members and at least one Indian
            team member of who understands the local context of the Indian
            mobility sector.
          </p>

          <div className="row unlock-item">
            <div className="col-md-4">
              <div className="heading-box heading-box-yellow">
                <h1 class="big">1</h1>
                <h1>CONCEPT STAGE</h1>
              </div>
            </div>
            <div className="col-md-8 align-left">
              {/* <p className="themes">COVID-19 recovery</p> */}
              {/* <p className="themes">Cost-effective solutions</p> */}
              <p>
                At the Concept Stage, each team has to submit a concept note in
                a predefined template. The concept note shall detail out the
                proposed solution, team composition and project plan.
              </p>
            </div>
          </div>

          <div className="row unlock-item mobile-column">
            <div className="col-md-8 align-right">
              {/* <p className="themes">Multi-modal integration</p>
              <p className="themes">Sustainable transport modes</p> */}
              <p>
                We will share the shortlisted concept note with the cities and
                arrange the matchmaking between cities and participants. The
                teams shall get an opportunity to present their proposal to the
                partner cities and develop a solution in consultation with
                cities.
              </p>
            </div>
            <div className="col-md-4">
              <div className="heading-box heading-box-blue">
                <h1 class="big">2</h1>
                <h1>CITY MATCHMAKING STAGE</h1>
              </div>
            </div>
          </div>

          <div className="row unlock-item">
            <div className="col-md-4">
              <div className="heading-box heading-box-red equity-box">
                <h1 class="big">3</h1>
                <h1>FINAL SUBMISSION</h1>
              </div>
            </div>
            <div className="col-md-8 align-left">
              {/* <p className="themes">Gender and safety</p>
              <p className="themes">Inclusivity and efficiency improvement</p> */}
              <p>
                Post matchmaking, teams shall get an opportunity to mentor under
                experts and/or cities, facilitating the development of solutions
                using the mobility data to improve, elaborate, and create POC
                along with the business model.
              </p>
            </div>
          </div>
        </section>

        <section className="looking">
          <div className="container align-left">
            <div className="heading heading-blue">
              <h1>DATA CHALLENGE STATEMENT</h1>
            </div>
            <br />
            <p>
              There are three data challenge statements under which a team can
              participate:
            </p>
            <ul>
              <li>
                <p>
                  Generating insights and creating value from the mobility data.
                </p>
              </li>
              <li>
                <p>
                  Learning more on commuters’ behaviours and preferences with
                  data gathered currently from various transit agencies and
                  private transport operators.
                </p>
              </li>
              <li>
                <p>
                  Influencing decisions of a traveller to consider travelling at
                  a different time and/or using alternate options, so
                  transportation demand, including public transport demand, is
                  more evenly distributed throughout the day.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Guideline;
