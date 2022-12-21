import React from "react";
import { Link } from "react-router-dom";
import DishesList from "../DishesList";
import "./Appetizers.css";

function Appetizers(props) {
  const {
    ellipse1,
    ilBagliore,
    restaurant,
    appetizers,
    ilBaglioreNavbar,
    place1,
    drinks,
    menu,
    dishes,
    tableReservation,
    place2,
    aboutUs,
    dishesListProps,
  } = props;

  return (
    <div className="appetizers-2 screen">
      <div className="logo">
        <div className="overlap-group-11">
          <img className="ellipse-1-11" src={ellipse1} alt="Ellipse 1" />
          <div className="il-bagliore-10 bellefair-normal-white-72px">{ilBagliore}</div>
          <div className="restaurant-11 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
        </div>
      </div>
      <div className="appetizers-3 valign-text-middle kurale-normal-tobacco-brown-63px">{appetizers}</div>
      <DishesList
        img5={dishesListProps.img5}
        className={dishesListProps.className}
        dish11Props={dishesListProps.dish11Props}
        dish12Props={dishesListProps.dish12Props}
        dish31Props={dishesListProps.dish31Props}
        dish32Props={dishesListProps.dish32Props}
      />
      <div className="topbar-5"></div>
      <div className="il-bagliore-navbar-10 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
      <Link to="/landing-page">
        <div className="place-16 inter-normal-white-27px">{place1}</div>
      </Link>
      <Link to="/drinks">
        <div className="drinks-9 inter-normal-white-27px">{drinks}</div>
      </Link>
      <Link to="/menu">
        <div className="menu-7 inter-normal-white-27px">{menu}</div>
      </Link>
      <Link to="/dishes">
        <div className="dishes-11 inter-normal-tobacco-brown-27px">{dishes}</div>
      </Link>
      <Link to="/table-reservation">
        <div className="table-reservation-8 inter-normal-white-27px">{tableReservation}</div>
      </Link>
      <div className="place-17 inter-normal-white-27px">{place2}</div>
      <div className="footer-contact-about-us-11">
        <div className="overlap-group1-11">
          <Link to="/about-us">
            <div className="about-us-12 inter-bold-white-24px">{aboutUs}</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Appetizers;
