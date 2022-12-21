import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage(props) {
  const {
    ilBaglioreNavbar,
    loginRegistration,
    tableReservation,
    menu,
    ellipse1,
    ilBagliore,
    restaurant,
    traditionalTaste,
    text1,
    fineDinning,
    loremSentence,
    pexelsLumn6049691,
    aboutUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <div className="flex-row-25">
          <div className="il-bagliore-navbar-15 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
          <div className="flex-col-2">
            <Link to="/login-registration">
              <div className="login-registration-4 inter-normal-white-27px">{loginRegistration}</div>
            </Link>
            <Link to="/table-reservation">
              <div className="table-reservation-13 inter-normal-white-27px">{tableReservation}</div>
            </Link>
            <Link to="/menu">
              <div className="menu-12 inter-normal-white-27px">{menu}</div>
            </Link>
          </div>
        </div>
        <div className="flex-col-3">
          <div className="overlap-group-16">
            <img className="ellipse-1-16" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-15 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-16 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
          <div className="flex-row-26">
            <div className="slogan-and-sentence-2">
              <div className="overlap-group1-16 kurale-normal-tobacco-brown-45px">
                <div className="traditional-taste valign-text-middle">{traditionalTaste}</div>
                <div className="text-1 valign-text-middle">{text1}</div>
                <p className="fine-dinning valign-text-middle">{fineDinning}</p>
              </div>
              <p className="lorem-sentence">{loremSentence}</p>
            </div>
            <img className="pexels-lumn-604969-1" src={pexelsLumn6049691} alt="pexels-lumn-604969 1" />
          </div>
          <div className="overlap-group2-15">
            <Link to="/about-us">
              <div className="footer">
                <div className="about-us-17 inter-bold-white-24px">{aboutUs}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
