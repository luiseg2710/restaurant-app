import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalWhite24px,
  LaomuangkhongRegularNormalTobaccoBr,
  KuraleNormalTobaccoBrown45px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Wine.css";

class Wine extends React.Component {
  render() {
    const {
      drink1,
      image1,
      descLorem1,
      drink2,
      img2,
      descLorem2,
      drink3,
      img3,
      descLorem3,
      wineHeader,
      ellipse1,
      ilBagliore,
      restaurant,
      gobackbutton,
    } = this.props;

    return (
      <div className="wine screen">
        <WineList>
          <Drink1>
            <Drink11>{drink1}</Drink11>
            <FlexRow>
              <Image1 src={image1} alt="image1" />
              <DescLorem1>{descLorem1}</DescLorem1>
            </FlexRow>
          </Drink1>
          <Drink2>
            <Drink21>{drink2}</Drink21>
            <FlexRow1>
              <Image1 src={img2} alt="img2" />
              <DescLorem1>{descLorem2}</DescLorem1>
            </FlexRow1>
          </Drink2>
          <Drink3>
            <Drink31>{drink3}</Drink31>
            <FlexRow2>
              <Image1 src={img3} alt="Img3" />
              <DescLorem3>{descLorem3}</DescLorem3>
            </FlexRow2>
          </Drink3>
        </WineList>
        <BlackRectangle></BlackRectangle>
        <WineHeader>{wineHeader}</WineHeader>
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

const WineList = styled.div`
  z-index: 1;
  margin-top: 622px;
  width: 1175px;
  height: 1837.232666015625px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
`;

const Drink1 = styled.div`
  margin-left: 5px;
  width: 1174px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 539.0704956054688px;
  gap: 23px;
`;

const Drink11 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 444px;
  height: 40px;
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

const Image1 = styled.img`
  width: 215px;
  height: 476px;
  object-fit: cover;
`;

const DescLorem1 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 209px;
  margin-top: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink2 = styled.div`
  width: 1179px;
  margin-top: 109.9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 539.1516723632812px;
  gap: 24px;
`;

const Drink21 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 549px;
  height: 39px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow1 = styled.div`
  align-self: flex-end;
  margin-right: 4px;
  display: flex;
  align-items: center;
  min-width: 1170px;
  gap: 59px;
`;

const Drink3 = styled.div`
  width: 1162px;
  margin-top: 110.8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 538.2327270507812px;
  gap: 25px;
`;

const Drink31 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 633px;
  height: 37px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow2 = styled.div`
  align-self: flex-end;
  margin-right: 4px;
  display: flex;
  align-items: center;
  min-width: 1153px;
  gap: 42px;
`;

const DescLorem3 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 209px;
  margin-bottom: 0;
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

const WineHeader = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: fixed;
  top: calc(50% - 57px);
  left: calc(50% - 76px);
  width: 152px;
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

export default Wine;
