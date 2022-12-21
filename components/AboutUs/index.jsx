import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";

function AboutUs(props) {
  const {
    ilBaglioreNavbar,
    place,
    ellipse1,
    ilBagliore,
    restaurant,
    aboutUs,
    loremIpsumDolorSi,
    iconFacebook,
    facebook,
    iconTwitter,
    instraLogo,
    instagram,
    twitter,
    contact,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about-us-5 screen">
        <div className="flex-row-6">
          <div className="il-bagliore-navbar-4 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
          <Link to="/landing-page">
            <div className="place-7 inter-normal-white-27px">{place}</div>
          </Link>
        </div>
        <div className="overlap-group3-3">
          <div className="overlap-group-5">
            <img className="ellipse-1-5" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-4 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-5 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
          <div className="sign-up-form-1 inter-medium-white-27px">
            <div className="about-us-6">{aboutUs}</div>
            <p className="lorem-ipsum-dolor-si">{loremIpsumDolorSi}</p>
          </div>
        </div>
        <div className="footer-social-media-2">
          <img className="icon-facebook-2" src={iconFacebook} alt="icon-facebook" />
          <div className="overlap-group1-5">
            <div className="facebook-2 inter-bold-tobacco-brown-24px">{facebook}</div>
            <img className="icon-twitter-2" src={iconTwitter} alt="icon-twitter" />
          </div>
          <div className="overlap-group2-5 inter-bold-tobacco-brown-24px">
            <img className="instra-logo-2" src={instraLogo} alt="instra-logo" />
            <div className="instagram-2">{instagram}</div>
            <div className="twitter-2">{twitter}</div>
          </div>
        </div>
        <div className="foot-container-2">
          <div className="footbar-2"></div>
          <div className="footer-contact-about-us-5">
            <p className="contact inter-bold-white-24px">{contact}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
