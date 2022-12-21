import React from "react";
import { Link } from "react-router-dom";
import SloganAndSentence from "../SloganAndSentence";
import "./Drinks.css";

function Drinks(props) {
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
      <div className="drinks-4 screen">
        <div className="flex-row-9">
          <div className="il-bagliore-navbar-6 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
          <div className="login-registration-3 inter-normal-white-27px">{loginRegistration}</div>
          <div className="overlap-group3-5">
            <Link to="/landing-page">
              <div className="place-9 inter-normal-white-27px">{place}</div>
            </Link>
            <Link to="/dishes">
              <div className="dishes-7 inter-normal-white-27px">{dishes}</div>
            </Link>
            <Link to="/desserts">
              <div className="drinks-5 inter-normal-tobacco-brown-27px">{drinks}</div>
            </Link>
            <Link to="/table-reservation">
              <div className="table-reservation-4 inter-normal-white-27px">{tableReservation}</div>
            </Link>
          </div>
        </div>
        <div className="overlap-group1-7">
          <div className="overlap-group-7">
            <img className="ellipse-1-7" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-6 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-7 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
          <SloganAndSentence className={sloganAndSentenceProps.className}>
            {sloganAndSentenceProps.children}
          </SloganAndSentence>
        </div>
        <div className="overlap-group4-1">
          <div className="titles">
            <Link to="/juice">
              <div className="appetizers-1 valign-text-middle kurale-normal-tobacco-brown-45px">{appetizers}</div>
            </Link>
            <Link to="/smoothies">
              <div className="first-course-3 valign-text-middle kurale-normal-tobacco-brown-45px">{firstCourse}</div>
            </Link>
            <Link to="/coffee">
              <div className="second-course-1 valign-text-middle kurale-normal-tobacco-brown-45px">{secondCourse}</div>
            </Link>
            <Link to="/wine">
              <div className="side-dishes-1 valign-text-middle kurale-normal-tobacco-brown-45px">{sideDishes}</div>
            </Link>
            <Link to="/cocktails-mixed-drinks">
              <div className="desserts-1 valign-text-middle kurale-normal-tobacco-brown-45px">{desserts}</div>
            </Link>
          </div>
          <div className="images">
            <Link to="/juice">
              <img
                className="pexels-maria-orlova-4946442-1-2"
                src={pexelsMariaOrlova49464421}
                alt="pexels-maria-orlova-4946442 1"
              />
            </Link>
            <Link to="/smoothies">
              <img
                className="pexels-janko-ferlic-590477-1-1"
                src={pexelsJankoFerlic5904771}
                alt="pexels-janko-ferlic-590477 1"
              />
            </Link>
            <Link to="/coffee">
              <img className="pexels-snapwire-675951-1-1" src={pexelsSnapwire6759511} alt="pexels-snapwire-675951 1" />
            </Link>
            <Link to="/wine">
              <img
                className="pexels-valeria-boltneva-842571-1-1"
                src={pexelsValeriaBoltneva8425711}
                alt="pexels-valeria-boltneva-842571 1"
              />
            </Link>
            <Link to="/cocktails-mixed-drinks">
              <img
                className="pexels-alisha-mishra-1343504-1-1"
                src={pexelsAlishaMishra13435041}
                alt="pexels-alisha-mishra-1343504 1"
              />
            </Link>
          </div>
        </div>
        <div className="overlap-group2-7">
          <Link to="/about-us">
            <div className="footer-contact-about-us-7">
              <div className="about-us-8 inter-bold-white-24px">{aboutUs}</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Drinks;
