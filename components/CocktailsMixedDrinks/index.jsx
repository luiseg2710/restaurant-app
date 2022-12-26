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
import "./CocktailsMixedDrinks.css";

class CocktailsMixedDrinks extends React.Component {
  render() {
    const {
      drink2,
      img2,
      descLorem2,
      drink3,
      img3,
      descLorem3,
      desclorem5,
      img5,
      drink5,
      cocktailsHeader,
      ellipse1,
      ilBagliore,
      restaurant,
      gobackbutton,
      drink1Props,
      drink4Props,
      drink6Props,
    } = this.props;

    return (
      <div className="cocktails-mixed-drinks screen">
        <CocktailsList>
          <Drink1 image1={drink1Props.image1} />
          <Drink2>
            <Drink21>{drink2}</Drink21>
            <FlexRow>
              <Img2 src={img2} alt="img2" />
              <DescLorem2>{descLorem2}</DescLorem2>
            </FlexRow>
          </Drink2>
          <Drink3>
            <Drink21>{drink3}</Drink21>
            <FlexRow1>
              <Img2 src={img3} alt="Img3" />
              <DescLorem3>{descLorem3}</DescLorem3>
            </FlexRow1>
          </Drink3>
          <Drink4 img4={drink4Props.img4} drink4={drink4Props.drink4} />
          <Drink5>
            <DescLorem5>{desclorem5}</DescLorem5>
            <Img5 src={img5} alt="Img5" />
            <Drink51>{drink5}</Drink51>
          </Drink5>
          <Drink6 drink6={drink6Props.drink6} img6={drink6Props.img6} />
        </CocktailsList>
        <BlackRectangle></BlackRectangle>
        <CocktailsHeader>{cocktailsHeader}</CocktailsHeader>
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

const CocktailsList = styled.div`
  z-index: 1;
  margin-top: 613px;
  width: 1170px;
  height: 1940.75830078125px;
  margin-left: 70px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Drink2 = styled.div`
  width: 1174px;
  margin-top: 23.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 308.516357421875px;
  gap: 7px;
`;

const Drink21 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 841px;
  height: 72px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1170px;
  gap: 59px;
`;

const Img2 = styled.img`
  width: 215px;
  height: 230px;
  object-fit: cover;
`;

const DescLorem2 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 101px;
  margin-top: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink3 = styled.div`
  width: 1157px;
  margin-top: 23.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 308.517333984375px;
  gap: 7px;
`;

const FlexRow1 = styled.div`
  display: flex;
  align-items: center;
  min-width: 1153px;
  gap: 42px;
`;

const DescLorem3 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 101px;
  margin-bottom: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink5 = styled.div`
  margin-left: 5px;
  width: 1152px;
  height: 301.7581787109375px;
  position: relative;
  margin-top: 23.2px;
`;

const DescLorem5 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 252px;
  letter-spacing: 0;
  line-height: normal;
`;

const Img5 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 0;
  object-fit: cover;
`;

const Drink51 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            position: absolute;
  width: 836px;
  height: 72px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
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

const CocktailsHeader = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: fixed;
  top: calc(50% - 57px);
  left: calc(50% - 350px);
  width: 700px;
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

export default CocktailsMixedDrinks;
