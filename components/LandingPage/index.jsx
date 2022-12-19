import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalTobaccoBr,
  InterBoldWhite24px,
  KuraleNormalTobaccoBrown45px,
  InterNormalWhite27px,
  InterSemiBoldWhite36px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./LandingPage.css";

function LandingPage(props) {
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing-page screen">
        <FlexRow>
          <IlBaglioreNavbar>{ilBaglioreNavbar}</IlBaglioreNavbar>
          <FlexCol>
            <Link to="/login-registration">
              <LoginRegistration>{loginRegistration}</LoginRegistration>
            </Link>
            <Link to="/table-reservation">
              <TableReservation>{tableReservation}</TableReservation>
            </Link>
            <Link to="/menu">
              <Menu>{menu}</Menu>
            </Link>
          </FlexCol>
        </FlexRow>
        <FlexCol1>
          <OverlapGroup>
            <Ellipse1 src={ellipse1} alt="Ellipse 1" />
            <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
            <Restaurant>{restaurant}</Restaurant>
          </OverlapGroup>
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
          <OverlapGroup2>
            <Link to="/about-us">
              <Footer>
                <AboutUs>{aboutUs}</AboutUs>
              </Footer>
            </Link>
          </OverlapGroup2>
        </FlexCol1>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 112px;
  margin-top: 4px;
  margin-left: -58px;
  display: flex;
  align-items: flex-start;
  min-width: 1952px;
  gap: 1361px;
`;

const IlBaglioreNavbar = styled.div`
  ${InterSemiBoldWhite36px}
  width: 333px;
  min-height: 87px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexCol = styled.div`
  width: 258px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 101px;
  gap: 1px;
`;

const LoginRegistration = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  margin-right: 1px;
  min-width: 257px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const TableReservation = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  margin-right: 1px;
  min-width: 229px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Menu = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  min-width: 72px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const FlexCol1 = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 909px;
`;

const OverlapGroup = styled.div`
  width: 784px;
  height: 351px;
  position: relative;
  margin-right: 10px;
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

const FlexRow1 = styled.div`
  margin-top: 27px;
  margin-left: 91px;
  display: flex;
  align-items: flex-start;
  min-width: 1693px;
  gap: 20px;
`;

const SloganAndSentence = styled.div`
  width: 951px;
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
  text-shadow: 0px 4px 4px #00000040;
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
  text-shadow: 0px 4px 4px #00000040;
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
  text-shadow: 0px 4px 4px #00000040;
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
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: normal;
`;

const PexelsLumn6049691 = styled.img`
  width: 722px;
  height: 390px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  height: 45px;
  margin-top: 96px;
  display: flex;
  padding: 5px 904px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--cod-gray);
`;

const Footer = styled.div`
  width: 111px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${InterBoldWhite24px}
  width: 109px;
  height: 31px;
  margin-left: -2px;
  letter-spacing: 0;
  line-height: normal;
`;

export default LandingPage;
