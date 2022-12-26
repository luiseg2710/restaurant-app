import React from "react";
import { Link } from "react-router-dom";
import DishesList from "../DishesList";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalTobaccoBr,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./FirstCourse.css";

class FirstCourse extends React.Component {
  render() {
    const { firstCourse, ellipse1, ilBagliore, restaurant, gobackbutton, dishesListProps } = this.props;

    return (
      <div className="first-course screen">
        <DishesList
          img5={dishesListProps.img5}
          className={dishesListProps.className}
          dish11Props={dishesListProps.dish11Props}
          dish12Props={dishesListProps.dish12Props}
          dish31Props={dishesListProps.dish31Props}
          dish32Props={dishesListProps.dish32Props}
        />
        <BlackRectangle></BlackRectangle>
        <FirstCourse1>{firstCourse}</FirstCourse1>
        <Link to="/home-page">
          <Logo>
            <OverlapGroup>
              <Ellipse1 src={ellipse1} alt="Ellipse 1" />
              <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
              <Restaurant>{restaurant}</Restaurant>
            </OverlapGroup>
          </Logo>
        </Link>
        <Link to="/dishes">
          <GoBackButton src={gobackbutton} alt="GoBackButton" />
        </Link>
      </div>
    );
  }
}

const BlackRectangle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 623px;
  z-index: 2;
  background-color: var(--cod-gray);
`;

const FirstCourse1 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: fixed;
  top: calc(50% - 57px);
  left: calc(50% - 168px);
  width: 336px;
  height: 87px;
  z-index: 3;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const Logo = styled.div`
  position: fixed;
  top: calc(50% - 381px);
  left: calc(50% - 397px);
  height: 353px;
  z-index: 4;
  display: flex;
  align-items: flex-start;
  min-width: 788px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 784px;
  height: 353px;
  position: relative;
`;

const Ellipse1 = styled.img`
  position: absolute;
  width: 353px;
  height: 353px;
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
  text-shadow: 0px 4px 4px #705d3e21;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const GoBackButton = styled.img`
  position: fixed;
  width: 2.6%;
  height: 4.63%;
  top: 1.85%;
  left: 1.04%;
  z-index: 5;
  cursor: pointer;
`;

export default FirstCourse;
