import React from "react";
import { Link } from "react-router-dom";
import DishesList from "../DishesList";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalTobaccoBr,
  InterBoldWhite24px,
  InterNormalTobaccoBrown27px,
  InterNormalWhite27px,
  InterSemiBoldWhite36px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./SideDishes.css";

function SideDishes(props) {
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
      <div className="side-dishes screen">
        <Topbar></Topbar>
        <IlBaglioreNavbar>{ilBaglioreNavbar}</IlBaglioreNavbar>
        <Link to="/table-reservation">
          <TableReservation>{tableReservation}</TableReservation>
        </Link>
        <Place>{place1}</Place>
        <Link to="/dishes">
          <Dishes>{dishes}</Dishes>
        </Link>
        <Link to="/drinks">
          <Drinks>{drinks}</Drinks>
        </Link>
        <Link to="/landing-page">
          <Place1>{place2}</Place1>
        </Link>
        <Link to="/dishes">
          <Menu>{menu}</Menu>
        </Link>
        <OverlapGroup2>
          <FirstCourse>{firstCourse}</FirstCourse>
          <OverlapGroup>
            <Ellipse1 src={ellipse1} alt="Ellipse 1" />
            <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
            <Restaurant>{restaurant}</Restaurant>
          </OverlapGroup>
        </OverlapGroup2>
        <DishesList
          img5={dishesListProps.img5}
          dish11Props={dishesListProps.dish11Props}
          dish12Props={dishesListProps.dish12Props}
          dish31Props={dishesListProps.dish31Props}
          dish32Props={dishesListProps.dish32Props}
        />
        <FooterContactAboutUs>
          <OverlapGroup1>
            <Link to="/about-us">
              <AboutUs>{aboutUs}</AboutUs>
            </Link>
          </OverlapGroup1>
        </FooterContactAboutUs>
      </div>
    </div>
  );
}

const Topbar = styled.div`
  position: fixed;
  width: 1920px;
  height: 51px;
  top: 0;
  left: 0;
  z-index: 7;
  background-color: var(--cod-gray);
`;

const IlBaglioreNavbar = styled.div`
  ${InterSemiBoldWhite36px}
  position: fixed;
  width: 333px;
  top: 4px;
  left: -58px;
  z-index: 9;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const TableReservation = styled.div`
  ${InterNormalWhite27px}
  position: fixed;
  top: 15px;
  left: 1664px;
  z-index: 8;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Place = styled.div`
  ${InterNormalWhite27px}
  position: fixed;
  top: 15px;
  left: 902px;
  z-index: 10;
  letter-spacing: 0;
  line-height: normal;
`;

const Dishes = styled.div`
  ${InterNormalTobaccoBrown27px}
  position: fixed;
  top: 47px;
  left: 1807px;
  z-index: 6;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Drinks = styled.div`
  ${InterNormalWhite27px}
  position: fixed;
  width: 81px;
  top: 79px;
  left: 1813px;
  z-index: 5;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Place1 = styled.div`
  ${InterNormalWhite27px}
  position: fixed;
  top: 114px;
  left: 1818px;
  z-index: 3;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Menu = styled.div`
  ${InterNormalWhite27px}
  position: fixed;
  top: 146px;
  left: 1821px;
  z-index: 4;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroup2 = styled.div`
  width: 788px;
  height: 391px;
  z-index: 1;
  position: relative;
  align-self: center;
  margin-top: 171px;
  margin-right: 6px;
`;

const FirstCourse = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: absolute;
  width: 324px;
  height: 87px;
  top: 304px;
  left: 235px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 784px;
  height: 351px;
  top: 0;
  left: 0;
`;

const Ellipse1 = styled.img`
  position: absolute;
  width: 353px;
  height: 351px;
  top: 0;
  left: 221px;
`;

const ILBAGLIORE = styled.div`
  ${BellefairNormalWhite72px}
  position: absolute;
  width: 784px;
  top: 105px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Restaurant = styled.div`
  ${LaomuangkhongRegularNormalTobaccoBr}
  position: absolute;
  width: 436px;
  top: 161px;
  left: 174px;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const FooterContactAboutUs = styled.div`
  position: fixed;
  height: 51px;
  top: 1035px;
  left: 0;
  z-index: 11;
  display: flex;
  align-items: flex-start;
  min-width: 1922px;
`;

const OverlapGroup1 = styled.div`
  height: 51px;
  display: flex;
  padding: 5px 880px;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--cod-gray);
`;

const AboutUs = styled.div`
  ${InterBoldWhite24px}
  width: 160px;
  min-height: 31px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

export default SideDishes;
