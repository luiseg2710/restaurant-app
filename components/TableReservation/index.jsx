import React from "react";
import { Link } from "react-router-dom";
import FooterSocialMedia from "../FooterSocialMedia";
import "./TableReservation.css";

function TableReservation(props) {
  const {
    ilBaglioreNavbar,
    place,
    ellipse1,
    ilBagliore,
    restaurant,
    reservationForm,
    makeReservation,
    clearForm,
    aboutUs,
    footerSocialMediaProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="table-reservation-1 screen">
        <div className="flex-row-4">
          <div className="il-bagliore-navbar-1 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
          <div className="flex-col">
            <Link to="/landing-page">
              <div className="place-2 inter-normal-white-27px">{place}</div>
            </Link>
            <div className="overlap-group5">
              <div className="overlap-group-1">
                <img className="ellipse-1-1" src={ellipse1} alt="Ellipse 1" />
                <div className="il-bagliore bellefair-normal-white-72px">{ilBagliore}</div>
                <div className="restaurant-1 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
              </div>
              <img className="reservation-form" src={reservationForm} alt="Reservation Form" />
              <div className="overlap-group1-1">
                <div className="make-reservation valign-text-middle laomuangkhong-regular-normal-mist-gray-24px">
                  {makeReservation}
                </div>
                <div className="rectangle-1"></div>
              </div>
              <div className="overlap-group2-1">
                <div className="clear-form valign-text-middle laomuangkhong-regular-normal-mist-gray-24px">
                  {clearForm}
                </div>
                <div className="rectangle-1-1"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-container">
          <div className="footbar"></div>
          <Link to="/about-us">
            <div className="footer-contact-about-us-1">
              <div className="about-us-1 inter-bold-white-24px">{aboutUs}</div>
            </div>
          </Link>
          <FooterSocialMedia iconTwitter={footerSocialMediaProps.iconTwitter} />
        </div>
      </div>
    </div>
  );
}

export default TableReservation;
