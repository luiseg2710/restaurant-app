import React from "react";
import { Link } from "react-router-dom";
import SloganAndSentence from "../SloganAndSentence";
import "./Dishes.css";

function Dishes(props) {
  const {
    ilBaglioreNavbar,
    loginRegistration,
    place,
    dishes,
    drinks,
    tableReservation,
    ellipse1,
    ilBagliore,
    restaurant,
    appetizers,
    firstCourse,
    secondCourse,
    sideDishes,
    desserts,
    pexelsMariaOrlova49464421,
    pexelsJankoFerlic5904771,
    pexelsSnapwire6759511,
    pexelsValeriaBoltneva8425711,
    pexelsAlishaMishra13435041,
    aboutUs,
    sloganAndSentenceProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="dishes-3 screen">
        <div className="flex-row-7">
          <div className="il-bagliore-navbar-5 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
          <div className="login-registration-2 inter-normal-white-27px">{loginRegistration}</div>
          <div className="overlap-group1-6">
            <Link to="/landing-page">
              <div className="place-8 inter-normal-white-27px">{place}</div>
            </Link>
            <div className="dishes-4 inter-normal-tobacco-brown-27px">{dishes}</div>
            <Link to="/drinks">
              <div className="drinks-3 inter-normal-white-27px">{drinks}</div>
            </Link>
            <Link to="/table-reservation">
              <div className="table-reservation-3 inter-normal-white-27px">{tableReservation}</div>
            </Link>
          </div>
        </div>
        <div className="overlap-group3-4">
          <div className="overlap-group-6">
            <img className="ellipse-1-6" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-5 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-6 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
          <SloganAndSentence>{sloganAndSentenceProps.children}</SloganAndSentence>
        </div>
        <div className="flex-row-8">
          <Link to="/appetizers">
            <div className="appetizers valign-text-middle kurale-normal-tobacco-brown-45px">{appetizers}</div>
          </Link>
          <Link to="/first-course">
            <div className="first-course-2 valign-text-middle kurale-normal-tobacco-brown-45px">{firstCourse}</div>
          </Link>
          <Link to="/second-course">
            <div className="second-course valign-text-middle kurale-normal-tobacco-brown-45px">{secondCourse}</div>
          </Link>
          <Link to="/side-dishes">
            <div className="side-dishes valign-text-middle kurale-normal-tobacco-brown-45px">{sideDishes}</div>
          </Link>
          <Link to="/desserts">
            <div className="desserts valign-text-middle kurale-normal-tobacco-brown-45px">{desserts}</div>
          </Link>
        </div>
        <div className="pexels-container">
          <Link to="/appetizers">
            <img
              className="pexels-maria-orlova-4946442-1-1"
              src={pexelsMariaOrlova49464421}
              alt="pexels-maria-orlova-4946442 1"
            />
          </Link>
          <Link to="/first-course">
            <img
              className="pexels-janko-ferlic-590477-1"
              src={pexelsJankoFerlic5904771}
              alt="pexels-janko-ferlic-590477 1"
            />
          </Link>
          <Link to="/second-course">
            <img className="pexels-snapwire-675951-1" src={pexelsSnapwire6759511} alt="pexels-snapwire-675951 1" />
          </Link>
          <Link to="/side-dishes">
            <img
              className="pexels-valeria-boltneva-842571-1"
              src={pexelsValeriaBoltneva8425711}
              alt="pexels-valeria-boltneva-842571 1"
            />
          </Link>
          <Link to="/desserts">
            <img
              className="pexels-alisha-mishra-1343504-1"
              src={pexelsAlishaMishra13435041}
              alt="pexels-alisha-mishra-1343504 1"
            />
          </Link>
        </div>
        <div className="overlap-group2-6">
          <Link to="/about-us">
            <div className="footer-contact-about-us-6">
              <div className="about-us-7 inter-bold-white-24px">{aboutUs}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dishes;
