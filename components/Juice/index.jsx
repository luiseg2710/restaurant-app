import React from "react";
import { Link } from "react-router-dom";
import CocktailsList from "../CocktailsList";
import "./Juice.css";

function Juice(props) {
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
    title,
    restaurant,
    aboutUs,
    cocktailsListProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="juice screen">
        <div className="topbar"></div>
        <div className="il-bagliore-navbar inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
        <Link to="/table-reservation">
          <div className="table-reservation inter-normal-white-27px">{tableReservation}</div>
        </Link>
        <div className="place inter-normal-white-27px">{place1}</div>
        <Link to="/dishes">
          <div className="dishes inter-normal-white-27px">{dishes}</div>
        </Link>
        <Link to="/drinks">
          <div className="drinks inter-normal-tobacco-brown-27px">{drinks}</div>
        </Link>
        <Link to="/landing-page">
          <div className="place-1 inter-normal-white-27px">{place2}</div>
        </Link>
        <Link to="/dishes">
          <div className="menu inter-normal-white-27px">{menu}</div>
        </Link>
        <div className="overlap-group2">
          <div className="first-course valign-text-middle kurale-normal-tobacco-brown-63px">{firstCourse}</div>
          <div className="overlap-group">
            <img className="ellipse-1" src={ellipse1} alt="Ellipse 1" />
            <h1 className="title bellefair-normal-white-72px">{title}</h1>
            <div className="restaurant laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
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
        <div className="footer-contact-about-us">
          <div className="overlap-group1">
            <Link to="/about-us">
              <div className="about-us inter-bold-white-24px">{aboutUs}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Juice;
