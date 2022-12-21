import React from "react";
import { Link } from "react-router-dom";
import FooterSocialMedia from "../FooterSocialMedia";
import "./LoginRegistration.css";

function LoginRegistration(props) {
  const { place, ellipse1, ilBagliore, restaurant, signUpForm, joinNow, aboutUs, footerSocialMediaProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login-registration-1 screen">
        <Link to="/landing-page">
          <div className="place-6 inter-normal-white-27px">{place}</div>
        </Link>
        <div className="overlap-group5-1">
          <div className="overlap-group-4">
            <img className="ellipse-1-4" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-3 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-4 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
          <img className="sign-up-form" src={signUpForm} alt="Sign Up Form" />
          <div className="overlap-group1-4">
            <div className="join-now valign-text-middle laomuangkhong-regular-normal-mist-gray-24px">{joinNow}</div>
            <div className="rectangle-1-2"></div>
          </div>
        </div>
        <div className="foot-container-1">
          <div className="footbar-1"></div>
          <Link to="/about-us">
            <div className="footer-contact-about-us-4">
              <div className="about-us-4 inter-bold-white-24px">{aboutUs}</div>
            </div>
          </Link>
          <FooterSocialMedia iconTwitter={footerSocialMediaProps.iconTwitter} />
        </div>
      </div>
    </div>
  );
}

export default LoginRegistration;
