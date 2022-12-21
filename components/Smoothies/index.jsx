import React from "react";
import { Link } from "react-router-dom";
import CocktailsList from "../CocktailsList";
import "./Smoothies.css";

function Smoothies(props) {
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
    cocktailsListProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="smoothies screen">
        <div className="topbar-1"></div>
        <div className="il-bagliore-navbar-2 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
        <Link to="/table-reservation">
          <div className="table-reservation-2 inter-normal-white-27px">{tableReservation}</div>
        </Link>
        <div className="place-3 inter-normal-white-27px">{place1}</div>
        <Link to="/dishes">
          <div className="dishes-1 inter-normal-white-27px">{dishes}</div>
        </Link>
        <Link to="/drinks">
          <div className="drinks-1 inter-normal-tobacco-brown-27px">{drinks}</div>
        </Link>
        <Link to="/landing-page">
          <div className="place-4 inter-normal-white-27px">{place2}</div>
        </Link>
        <Link to="/dishes">
          <div className="menu-1 inter-normal-white-27px">{menu}</div>
        </Link>
        <div className="overlap-group2-3">
          <div className="first-course-1 valign-text-middle kurale-normal-tobacco-brown-63px">{firstCourse}</div>
          <div className="overlap-group-2">
            <img className="ellipse-1-2" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-1 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-2 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
        </div>
        <CocktailsList
          image1={cocktailsListProps.image1}
          img2={cocktailsListProps.img2}
          img3={cocktailsListProps.img3}
          img4={cocktailsListProps.img4}
          drink51Props={cocktailsListProps.drink51Props}
          drink52Props={cocktailsListProps.drink52Props}
        />
        <div className="footer-contact-about-us-2">
          <div className="overlap-group1-2">
            <Link to="/about-us">
              <div className="about-us-2 inter-bold-white-24px">{aboutUs}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smoothies;
