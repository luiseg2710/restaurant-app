import React from "react";
import { Link } from "react-router-dom";
import "./Wine.css";

function Wine(props) {
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
    descLorem1,
    image1,
    drink1,
    img2,
    descLorem2,
    img3,
    descLorem3,
    aboutUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="wine screen">
        <div className="topbar-8"></div>
        <div className="il-bagliore-navbar-13 inter-semi-bold-white-36px">{ilBaglioreNavbar}</div>
        <Link to="/table-reservation">
          <div className="table-reservation-11 inter-normal-white-27px">{tableReservation}</div>
        </Link>
        <div className="place-22 inter-normal-white-27px">{place1}</div>
        <Link to="/dishes">
          <div className="dishes-14 inter-normal-white-27px">{dishes}</div>
        </Link>
        <Link to="/drinks">
          <div className="drinks-12 inter-normal-tobacco-brown-27px">{drinks}</div>
        </Link>
        <Link to="/landing-page">
          <div className="place-23 inter-normal-white-27px">{place2}</div>
        </Link>
        <Link to="/dishes">
          <div className="menu-10 inter-normal-white-27px">{menu}</div>
        </Link>
        <div className="overlap-group2-13">
          <div className="first-course-10 valign-text-middle kurale-normal-tobacco-brown-63px">{firstCourse}</div>
          <div className="overlap-group-14">
            <img className="ellipse-1-14" src={ellipse1} alt="Ellipse 1" />
            <div className="il-bagliore-13 bellefair-normal-white-72px">{ilBagliore}</div>
            <div className="restaurant-14 laomuangkhong-regular-normal-tobacco-brown-51px">{restaurant}</div>
          </div>
        </div>
        <div className="juice-list-1">
          <div className="drink-1-8">
            <p className="desc-lorem1-4 inter-normal-white-24px">{descLorem1}</p>
            <img className="image1-9" src={image1} alt="image1" />
            <div className="drink-1-9 valign-text-middle kurale-normal-tobacco-brown-45px">{drink1}</div>
          </div>
          <div className="drink-2-4">
            <img className="img2-9" src={img2} alt="img2" />
            <p className="desc-lorem-14 inter-normal-white-24px">{descLorem2}</p>
          </div>
          <div className="drink-3-4">
            <img className="img3-9" src={img3} alt="Img3" />
            <p className="desc-lorem-14 inter-normal-white-24px">{descLorem3}</p>
          </div>
        </div>
        <div className="footer-contact-about-us-14">
          <div className="overlap-group1-14">
            <Link to="/about-us">
              <div className="about-us-15 inter-bold-white-24px">{aboutUs}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wine;
