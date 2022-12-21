import React from "react";
import { Link } from "react-router-dom";
import DishesList from "../DishesList";
import "./Desserts.css";

function Desserts(props) {
  const {
    ilBaglioreNavbar,
    tableReservation,
    place1,
    dishes,
    drinks,
    place2,
    menu,
    firstCourse,
    ellipse1,
    ilBagliore,
    restaurant,
    aboutUs,
    dishesListProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desserts-2 screen">
        <div className="topbar-6"></div>
        <div className="il-bagliore-navbar-11 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
        <Link to="/table-reservation">
          <div className="table-reservation-9 inter-normal-white-27px">{tableReservation}</div>
        </Link>
        <div className="place-18 inter-normal-white-27px">{place1}</div>
        <Link to="/dishes">
          <div className="dishes-12 inter-normal-tobacco-brown-27px">{dishes}</div>
        </Link>
        <Link to="/drinks">
          <div className="drinks-10 inter-normal-white-27px">{drinks}</div>
        </Link>
        <Link to="/landing-page">
          <div className="place-19 inter-normal-white-27px">{place2}</div>
        </Link>
        <Link to="/dishes">
          <div className="menu-8 inter-normal-white-27px">{menu}</div>
        </Link>
        <div className="overlap-group2-11">
          <div className="first-course-8 valign-text-middle kurale-normal-tobacco-brown-63px">{firstCourse}</div>
          <div className="overlap-group-12">
            <img className="ellipse-1-12" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-11 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-12 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
        </div>
        <DishesList
          img5={dishesListProps.img5}
          dish11Props={dishesListProps.dish11Props}
          dish12Props={dishesListProps.dish12Props}
          dish31Props={dishesListProps.dish31Props}
          dish32Props={dishesListProps.dish32Props}
        />
        <div className="footer-contact-about-us-12">
          <div className="overlap-group1-12">
            <Link to="/about-us">
              <div className="about-us-13 inter-bold-white-24px">{aboutUs}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desserts;
