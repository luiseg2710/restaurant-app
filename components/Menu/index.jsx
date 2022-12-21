import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(props) {
  const {
    ilBaglioreNavbar,
    loginRegistration,
    booktable,
    menu,
    place,
    ellipse1,
    ilBagliore,
    restaurant,
    pexelsMariaOrlova49464421,
    pexelsMariaOrlova49464422,
    dishes,
    drinks,
    aboutUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu-2 screen" onclick="window.open('landing-page.html', '_self');">
        <div className="flex-row-5">
          <div className="il-bagliore-navbar-3 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
          <div className="login-registration inter-normal-white-27px">{loginRegistration}</div>
          <div className="flex-col-1">
            <Link to="/table-reservation">
              <div className="booktable inter-normal-white-27px">{booktable}</div>
            </Link>
            <div className="menu-3 inter-normal-tobacco-brown-27px">{menu}</div>
            <Link to="/landing-page">
              <div className="place-5 inter-normal-white-27px">{place}</div>
            </Link>
          </div>
        </div>
        <div className="overlap-group-container">
          <div className="overlap-group3-2 kurale-normal-tobacco-brown-63px">
            <div className="overlap-group2-4">
              <div className="overlap-group-3">
                <img className="ellipse-1-3" src={ellipse1} alt="Ellipse 1" />
                <div className="il-bagliore-2 bellefair-normal-white-72px">{ilBagliore}</div>
                <div className="restaurant-3 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
              </div>
              <Link to="/dishes">
                <img
                  className="pexels-maria-orlova-4946442-1"
                  src={pexelsMariaOrlova49464421}
                  alt="pexels-maria-orlova-4946442 1"
                />
              </Link>
              <Link to="/drinks">
                <img
                  className="pexels-maria-orlova-4946442-2"
                  src={pexelsMariaOrlova49464422}
                  alt="pexels-maria-orlova-4946442 2"
                />
              </Link>
            </div>
            <div className="dishes-2 valign-text-middle">{dishes}</div>
            <div className="drinks-2 valign-text-middle">{drinks}</div>
          </div>
          <div className="overlap-group1-3">
            <Link to="/about-us">
              <div className="footer-contact-about-us-3">
                <div className="about-us-3 inter-bold-white-24px">{aboutUs}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
