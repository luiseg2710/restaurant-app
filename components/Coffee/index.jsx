import React from "react";
import { Link } from "react-router-dom";
import Drink12 from "../Drink12";
import Drink3 from "../Drink3";
import Drink5 from "../Drink5";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalTobaccoBr,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Coffee.css";

class Coffee extends React.Component {
  render() {
    const {
      coffeeHeader,
      ellipse1,
      ilBagliore,
      restaurant,
      gobackbutton,
      drink121Props,
      drink122Props,
      drink31Props,
      drink32Props,
      drink51Props,
      drink52Props,
    } = this.props;

    return (
      <div className="coffee screen">
        <CoffeeList>
          <Drink12 drink1={drink121Props.drink1} image1={drink121Props.image1} />
          <Drink12 drink1={drink122Props.drink1} image1={drink122Props.image1} className={drink122Props.className} />
          <Drink3 img3={drink31Props.img3} />
          <Drink3 img3={drink32Props.img3} className={drink32Props.className} />
          <Drink5 img5={drink51Props.img5} />
          <Drink5 img5={drink52Props.img5} className={drink52Props.className} />
        </CoffeeList>
        <BlackRectangle></BlackRectangle>
        <CoffeeHeader>{coffeeHeader}</CoffeeHeader>
        <Link to="/home-page">
          <Logo>
            <OverlapGroup>
              <Ellipse1 src={ellipse1} alt="Ellipse 1" />
              <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
              <Restaurant>{restaurant}</Restaurant>
            </OverlapGroup>
          </Logo>
        </Link>
        <Link to="/drinks">
          <GoBackButton src={gobackbutton} alt="GoBackButton" />
        </Link>
      </div>
    );
  }
}

const CoffeeList = styled.div`
  z-index: 1;
  margin-top: 613px;
  width: 1170px;
  height: 1932.7584228515625px;
  margin-left: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const BlackRectangle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 623px;
  z-index: 2;
  background-color: var(--cod-gray);
`;

const CoffeeHeader = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: fixed;
  top: calc(50% - 57px);
  left: calc(50% - 82px);
  width: 165px;
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

export default Coffee;
