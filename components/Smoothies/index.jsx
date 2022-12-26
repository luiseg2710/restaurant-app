import React from "react";
import { Link } from "react-router-dom";
import Drink1 from "../Drink1";
import Drink4 from "../Drink4";
import Drink6 from "../Drink6";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalWhite24px,
  LaomuangkhongRegularNormalTobaccoBr,
  KuraleNormalTobaccoBrown45px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Smoothies.css";

class Smoothies extends React.Component {
  render() {
    const {
      descLorem2,
      img2,
      drink2,
      descLorem3,
      img3,
      drink3,
      smoothies,
      ellipse1,
      ilBagliore,
      restaurant,
      gobackbutton,
      drink1Props,
      drink4Props,
      drink61Props,
      drink62Props,
    } = this.props;

    return (
      <div className="smoothies screen">
        <SmoothiesList>
          <Drink1 image1={drink1Props.image1} className={drink1Props.className} />
          <Drink2>
            <DescLorem2>{descLorem2}</DescLorem2>
            <OverlapGroup1>
              <Img2 src={img2} alt="img2" />
              <Drink21>{drink2}</Drink21>
            </OverlapGroup1>
          </Drink2>
          <Drink3>
            <DescLorem3>{descLorem3}</DescLorem3>
            <OverlapGroup1>
              <Img3 src={img3} alt="Img3" />
              <Drink21>{drink3}</Drink21>
            </OverlapGroup1>
          </Drink3>
          <Drink4 img4={drink4Props.img4} drink4={drink4Props.drink4} className={drink4Props.className} />
          <Drink6 drink6={drink61Props.drink6} img6={drink61Props.img6} className={drink61Props.className} />
          <Drink6 drink6={drink62Props.drink6} img6={drink62Props.img6} className={drink62Props.className} />
        </SmoothiesList>
        <BlackRectangle></BlackRectangle>
        <Smoothies1>{smoothies}</Smoothies1>
        <Link to="/home-page">
          <Logo>
            <OverlapGroup2>
              <Ellipse1 src={ellipse1} alt="Ellipse 1" />
              <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
              <Restaurant>{restaurant}</Restaurant>
            </OverlapGroup2>
          </Logo>
        </Link>
        <Link to="/drinks">
          <GoBackButton src={gobackbutton} alt="GoBackButton" />
        </Link>
      </div>
    );
  }
}

const SmoothiesList = styled.div`
  z-index: 1;
  margin-top: 613px;
  width: 1175px;
  height: 1941.75830078125px;
  margin-left: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Drink2 = styled.div`
  width: 1179px;
  height: 301.516357421875px;
  position: relative;
  margin-top: 26.2px;
`;

const DescLorem2 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 279px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 841px;
  height: 302px;
  top: 0;
  left: 0;
`;

const Img2 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 5px;
  object-fit: cover;
`;

const Drink21 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            position: absolute;
  width: 841px;
  height: 72px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink3 = styled.div`
  margin-left: 5px;
  width: 1157px;
  height: 301.517333984375px;
  position: relative;
  margin-top: 26.5px;
`;

const DescLorem3 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 257px;
  letter-spacing: 0;
  line-height: normal;
`;

const Img3 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 0;
  object-fit: cover;
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

const Smoothies1 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: fixed;
  top: calc(50% - 57px);
  left: calc(50% - 144px);
  width: 288px;
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

const OverlapGroup2 = styled.div`
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

export default Smoothies;
