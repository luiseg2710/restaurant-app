import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalWhite24px,
  LaomuangkhongRegularNormalTobaccoBr,
  LaomuangkhongRegularNormalWhite27px,
  KuraleNormalTobaccoBrown45px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    const {
      ilBaglioreNavbar,
      loginRegistration,
      tableReservation,
      menu,
      ellipse1,
      ilBagliore,
      restaurant,
      traditionalTaste,
      text1,
      fineDinning,
      loremSentence,
      pexelsLumn6049691,
      aboutUs,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page screen">
          <FlexRow>
            <IlBaglioreNavbar>{ilBaglioreNavbar}</IlBaglioreNavbar>
            <Link to="/login-registration" className="align-self-flex-end">
              <LoginRegistration>{loginRegistration}</LoginRegistration>
            </Link>
          </FlexRow>
          <Link to="/table-reservation" className="align-self-flex-end">
            <TableReservation>{tableReservation}</TableReservation>
          </Link>
          <Link to="/menu" className="align-self-flex-end">
            <Menu>{menu}</Menu>
          </Link>
          <Logo>
            <OverlapGroup>
              <Ellipse1 src={ellipse1} alt="Ellipse 1" />
              <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
              <Restaurant>{restaurant}</Restaurant>
            </OverlapGroup>
          </Logo>
          <FlexRow1>
            <SloganAndSentence>
              <OverlapGroup1>
                <TraditionalTaste>{traditionalTaste}</TraditionalTaste>
                <Text1>{text1}</Text1>
                <FineDinning>{fineDinning}</FineDinning>
              </OverlapGroup1>
              <LoremSentence>{loremSentence}</LoremSentence>
            </SloganAndSentence>
            <PexelsLumn6049691 src={pexelsLumn6049691} alt="pexels-lumn-604969 1" />
          </FlexRow1>
          <Link to="/about-us">
            <Footer>
              <AboutUs>{aboutUs}</AboutUs>
            </Footer>
          </Link>
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  height: 44px;
  margin-top: 10px;
  margin-left: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 1785px;
  gap: 1360px;
`;

const IlBaglioreNavbar = styled.div`
  width: 171px;
  min-height: 42px;
  font-family: var(--font-family-lao_muang_khong-regular);
  font-weight: 400;
  color: var(--white-2);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const LoginRegistration = styled.div`
  ${LaomuangkhongRegularNormalWhite27px}
  min-height: 34px;
  align-self: flex-end;
  min-width: 254px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const TableReservation = styled.div`
  ${LaomuangkhongRegularNormalWhite27px}
  min-height: 34px;
  align-self: flex-end;
  min-width: 223px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Menu = styled.div`
  ${LaomuangkhongRegularNormalWhite27px}
  min-height: 34px;
  align-self: flex-end;
  margin-right: 1px;
  min-width: 74px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Logo = styled.div`
  height: 353px;
  margin-top: 15px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 788px;
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

const FlexRow1 = styled.div`
  margin-top: 36px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1782px;
  gap: 101px;
`;

const SloganAndSentence = styled.div`
  width: 951px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 283px;
  gap: 29px;
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup1 = styled.div`
  ${KuraleNormalTobaccoBrown45px}
  width: 679px;
  height: 167px;
  position: relative;
  margin-left: 1px;
`;

const TraditionalTaste = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 357px;
  height: 87px;
  top: 80px;
  left: 322px;
  text-shadow: 0px 4px 4px #92795408;
  letter-spacing: 0;
  line-height: normal;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 60px;
  height: 87px;
  top: 40px;
  left: 367px;
  text-shadow: 0px 4px 4px #92795408;
  letter-spacing: 0;
  line-height: normal;
`;

const FineDinning = styled.p`
  ${ValignTextMiddle}
  position: absolute;
  width: 482px;
  height: 87px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 4px #92795408;
  letter-spacing: 0;
  line-height: normal;
`;

const LoremSentence = styled.p`
  width: 943px;
  min-height: 87px;
  text-shadow: 0px 4px 4px #00000040;
  font-family: var(--font-family-lao_muang_khong-regular);
  font-weight: 400;
  color: var(--mist-gray);
  font-size: 33px;
  letter-spacing: 0;
  line-height: normal;
`;

const PexelsLumn6049691 = styled.img`
  width: 730px;
  height: 382px;
  object-fit: cover;
`;

const Footer = styled.div`
  width: 111px;
  margin-top: 106px;
  margin-left: 1px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 109px;
  height: 22px;
  margin-left: -2px;
  letter-spacing: 0;
  line-height: normal;
`;

export default HomePage;
