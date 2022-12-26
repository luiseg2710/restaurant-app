import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown60px,
  LaomuangkhongRegularNormalTobaccoBr,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Menu.css";

class Menu extends React.Component {
  render() {
    const {
      gobackbutton,
      place,
      dishes,
      ellipse1,
      ilBagliore,
      restaurant,
      drinks,
      pexelsMariaOrlova49464421,
      pexelsMariaOrlova49464422,
      men,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="menu screen" onclick="window.open('home-page.html', '_self');">
          <Link to="/home-page">
            <GoBackButton src={gobackbutton} alt="GoBackButton" />
          </Link>
          <FlexCol>
            <Place>{place}</Place>
            <FlexRow>
              <OverlapGroup1>
                <Dishes>{dishes}</Dishes>
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
              <Drinks>{drinks}</Drinks>
            </FlexRow>
            <PexelsMariaOrlovaContainer>
              <Link to="/dishes">
                <PexelsMariaOrlova49464421 src={pexelsMariaOrlova49464421} alt="pexels-maria-orlova-4946442 1" />
              </Link>
              <Link to="/drinks">
                <PexelsMariaOrlova49464421 src={pexelsMariaOrlova49464422} alt="pexels-maria-orlova-4946442 2" />
              </Link>
            </PexelsMariaOrlovaContainer>
          </FlexCol>
          <Men>{men}</Men>
        </div>
      </div>
    );
  }
}

const GoBackButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 1609px;
  margin-left: 88px;
  margin-top: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 919px;
`;

const Place = styled.div`
  min-height: 38px;
  margin-right: 5px;
  min-width: 130px;
  font-family: var(--font-family-lao_muang_khong-regular);
  font-weight: 400;
  color: var(--white-2);
  font-size: 30px;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow = styled.div`
  margin-top: 82px;
  margin-left: 1px;
  display: flex;
  align-items: flex-end;
  min-width: 1166px;
  gap: 4px;
`;

const OverlapGroup1 = styled.div`
  width: 971px;
  height: 414px;
  position: relative;
`;

const Dishes = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown60px}
            position: absolute;
  width: 191px;
  height: 87px;
  top: 327px;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const Logo = styled.div`
  position: absolute;
  height: 353px;
  top: 0;
  left: 183px;
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

const Drinks = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown60px}
            width: 191px;
  height: 87px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const PexelsMariaOrlovaContainer = styled.div`
  margin-top: 7px;
  display: flex;
  align-items: flex-start;
  min-width: 1609px;
  gap: 341px;
`;

const PexelsMariaOrlova49464421 = styled.img`
  width: 634px;
  height: 378px;
  object-fit: cover;
  cursor: pointer;
`;

const Men = styled.div`
  min-height: 38px;
  margin-left: 10px;
  margin-top: 16px;
  font-family: var(--font-family-lao_muang_khong-regular);
  font-weight: 400;
  color: var(--tobacco-brown);
  font-size: 30px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Menu;
