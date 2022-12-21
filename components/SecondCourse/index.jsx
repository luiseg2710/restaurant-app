import React from "react";
import { Link } from "react-router-dom";
import DishesList from "../DishesList";
import "./SecondCourse.css";

function SecondCourse(props) {
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
      <div className="second-course-2 screen">
        <div className="topbar-4"></div>
        <div className="il-bagliore-navbar-9 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
        <Link to="/table-reservation">
          <div className="table-reservation-7 inter-normal-white-27px">{tableReservation}</div>
        </Link>
        <div className="place-14 inter-normal-white-27px">{place1}</div>
        <Link to="/dishes">
          <div className="dishes-10 inter-normal-tobacco-brown-27px">{dishes}</div>
        </Link>
        <Link to="/drinks">
          <div className="drinks-8 inter-normal-white-27px">{drinks}</div>
        </Link>
        <Link to="/landing-page">
          <div className="place-15 inter-normal-white-27px">{place2}</div>
        </Link>
        <Link to="/dishes">
          <div className="menu-6 inter-normal-white-27px">{menu}</div>
        </Link>
        <div className="overlap-group2-10">
          <div className="first-course-7 valign-text-middle kurale-normal-tobacco-brown-63px">{firstCourse}</div>
          <div className="overlap-group-10">
            <img className="ellipse-1-10" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-9 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-10 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
        </div>
        <DishesList
          img5={dishesListProps.img5}
          dish11Props={dishesListProps.dish11Props}
          dish12Props={dishesListProps.dish12Props}
          dish31Props={dishesListProps.dish31Props}
          dish32Props={dishesListProps.dish32Props}
        />
        <div className="footer-contact-about-us-10">
          <div className="overlap-group1-10">
            <Link to="/about-us">
              <div className="about-us-11 inter-bold-white-24px">{aboutUs}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondCourse;
