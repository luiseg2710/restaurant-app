import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalTobaccoBr,
  KuraleNormalTobaccoBrown45px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Dishes.css";

class Dishes extends React.Component {
  render() {
    const {
      gobackbutton,
      dishesTitle,
      ellipse1,
      ilBagliore,
      restaurant,
      appetizers,
      pexelsMariaOrlova49464421,
      firstCourse,
      pexelsJankoFerlic5904771,
      secondCourse,
      pexelsSnapwire6759511,
      sideDishes,
      pexelsValeriaBoltneva8425711,
      desserts,
      pexelsAlishaMishra13435041,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="dishes screen">
          <Link to="/menu" className="align-self-flex-start">
            <GoBackButton src={gobackbutton} alt="GoBackButton" />
          </Link>
          <OverlapGroup1>
            <DishesTitle>{dishesTitle}</DishesTitle>
            <Link to="/home-page">
              <Logo>
                <OverlapGroup>
                  <Ellipse1 src={ellipse1} alt="Ellipse 1" />
                  <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
                  <Restaurant>{restaurant}</Restaurant>
                </OverlapGroup>
              </Logo>
            </Link>
          </OverlapGroup1>
          <FlexRow>
            <FlexCol>
              <Link to="/appetizers">
                <Appetizers>{appetizers}</Appetizers>
              </Link>
              <Link to="/appetizers">
                <PexelsMariaOrlova49464421 src={pexelsMariaOrlova49464421} alt="pexels-maria-orlova-4946442 1" />
              </Link>
            </FlexCol>
            <FlexCol1>
              <Link to="/first-course">
                <FirstCourse>{firstCourse}</FirstCourse>
              </Link>
              <Link to="/first-course">
                <PexelsJankoFerlic5904771 src={pexelsJankoFerlic5904771} alt="pexels-janko-ferlic-590477 1" />
              </Link>
            </FlexCol1>
            <FlexCol2>
              <Link to="/second-course">
                <SecondCourse>{secondCourse}</SecondCourse>
              </Link>
              <Link to="/second-course">
                <PexelsSnapwire6759511 src={pexelsSnapwire6759511} alt="pexels-snapwire-675951 1" />
              </Link>
            </FlexCol2>
            <FlexCol3>
              <Link to="/side-dishes">
                <SideDishes>{sideDishes}</SideDishes>
              </Link>
              <Link to="/side-dishes">
                <PexelsValeriaBoltneva8425711
                  src={pexelsValeriaBoltneva8425711}
                  alt="pexels-valeria-boltneva-842571 1"
                />
              </Link>
            </FlexCol3>
            <FlexCol4>
              <Link to="/desserts">
                <Desserts>{desserts}</Desserts>
              </Link>
              <Link to="/desserts">
                <PexelsMariaOrlova49464421 src={pexelsAlishaMishra13435041} alt="pexels-alisha-mishra-1343504 1" />
              </Link>
            </FlexCol4>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const GoBackButton = styled.img`
  width: 50px;
  height: 50px;
  align-self: flex-start;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 788px;
  height: 410px;
  position: relative;
  margin-top: 89px;
  margin-right: 6px;
`;

const DishesTitle = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: absolute;
  width: 185px;
  height: 87px;
  top: 323px;
  left: 305px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const Logo = styled.div`
  position: absolute;
  height: 353px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 788px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  width: 784px;
  height: 355px;
  position: relative;
  margin-top: -1px;
`;

const Ellipse1 = styled.img`
  position: absolute;
  width: 355px;
  height: 355px;
  top: 0;
  left: 220px;
`;

const ILBAGLIORE = styled.div`
  ${BellefairNormalWhite72px}
  position: absolute;
  width: 784px;
  top: 106px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Restaurant = styled.div`
  ${LaomuangkhongRegularNormalTobaccoBr}
  position: absolute;
  width: 436px;
  top: 162px;
  left: 174px;
  text-shadow: 0px 4px 4px #705d3e21;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow = styled.div`
  height: 388px;
  margin-top: 61px;
  margin-left: 18px;
  display: flex;
  align-items: flex-start;
  min-width: 1640px;
`;

const FlexCol = styled.div`
  width: 219px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const Appetizers = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 207px;
  height: 49px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const PexelsMariaOrlova49464421 = styled.img`
  width: 219px;
  height: 286px;
  object-fit: cover;
  cursor: pointer;
`;

const FlexCol1 = styled.div`
  width: 238px;
  margin-left: 116px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const FirstCourse = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 238px;
  height: 49px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const PexelsJankoFerlic5904771 = styled.img`
  width: 219px;
  height: 286px;
  margin-left: 0.85px;
  object-fit: cover;
  cursor: pointer;
`;

const FlexCol2 = styled.div`
  width: 292px;
  margin-left: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const SecondCourse = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 292px;
  height: 49px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const PexelsSnapwire6759511 = styled.img`
  width: 219px;
  height: 286px;
  margin-left: 0.82px;
  object-fit: cover;
  cursor: pointer;
`;

const FlexCol3 = styled.div`
  width: 235px;
  margin-left: 109px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const SideDishes = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 235px;
  height: 49px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const PexelsValeriaBoltneva8425711 = styled.img`
  width: 219px;
  height: 286px;
  margin-right: 0.14px;
  object-fit: cover;
  cursor: pointer;
`;

const FlexCol4 = styled.div`
  width: 219px;
  margin-left: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const Desserts = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 168px;
  height: 49px;
  margin-right: 0.9px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

export default Dishes;
