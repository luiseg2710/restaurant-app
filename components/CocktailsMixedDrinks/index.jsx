import React from "react";
import { Link } from "react-router-dom";
import CocktailsList from "../CocktailsList";
import "./CocktailsMixedDrinks.css";

function CocktailsMixedDrinks(props) {
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
      <div className="cocktails-mixed-drinks screen">
        <div className="topbar-7"></div>
        <div className="il-bagliore-navbar-12 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
        <Link to="/table-reservation">
          <div className="table-reservation-10 inter-normal-white-27px">{tableReservation}</div>
        </Link>
        <div className="place-20 inter-normal-white-27px">{place1}</div>
        <Link to="/dishes">
          <div className="dishes-13 inter-normal-white-27px">{dishes}</div>
        </Link>
        <Link to="/drinks">
          <div className="drinks-11 inter-normal-tobacco-brown-27px">{drinks}</div>
        </Link>
        <Link to="/landing-page">
          <div className="place-21 inter-normal-white-27px">{place2}</div>
        </Link>
        <Link to="/dishes">
          <div className="menu-9 inter-normal-white-27px">{menu}</div>
        </Link>
        <div className="overlap-group2-12">
          <div className="first-course-9 valign-text-middle kurale-normal-tobacco-brown-63px">{firstCourse}</div>
          <div className="overlap-group-13">
            <img className="ellipse-1-13" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-12 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-13 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
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
        <div className="footer-contact-about-us-13">
          <div className="overlap-group1-13">
            <Link to="/about-us">
              <div className="about-us-14 inter-bold-white-24px">{aboutUs}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CocktailsMixedDrinks;
