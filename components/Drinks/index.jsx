import React from "react";
import { Link } from "react-router-dom";
import SloganAndSentence from "../SloganAndSentence";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalTobaccoBr,
  InterBoldWhite24px,
  InterNormalTobaccoBrown27px,
  KuraleNormalTobaccoBrown45px,
  InterNormalWhite27px,
  InterSemiBoldWhite36px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Drinks.css";

function Drinks(props) {
  const {
    ilBaglioreNavbar,
    loginRegistration,
    place,
    dishes,
    drinks,
    tableReservation,
    ellipse1,
    ilBagliore,
    restaurant,
    appetizers,
    firstCourse,
    secondCourse,
    sideDishes,
    desserts,
    pexelsMariaOrlova49464421,
    pexelsJankoFerlic5904771,
    pexelsSnapwire6759511,
    pexelsValeriaBoltneva8425711,
    pexelsAlishaMishra13435041,
    aboutUs,
    sloganAndSentenceProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="drinks screen">
        <FlexRow>
          <IlBaglioreNavbar>{ilBaglioreNavbar}</IlBaglioreNavbar>
          <LoginRegistration>{loginRegistration}</LoginRegistration>
          <OverlapGroup3>
            <Link to="/landing-page">
              <Place>{place}</Place>
            </Link>
            <Link to="/dishes">
              <Dishes>{dishes}</Dishes>
            </Link>
            <Link to="/desserts">
              <Drinks1>{drinks}</Drinks1>
            </Link>
            <Link to="/table-reservation">
              <TableReservation>{tableReservation}</TableReservation>
            </Link>
          </OverlapGroup3>
        </FlexRow>
        <OverlapGroup1>
          <OverlapGroup>
            <Ellipse1 src={ellipse1} alt="Ellipse 1" />
            <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
            <Restaurant>{restaurant}</Restaurant>
          </OverlapGroup>
          <SloganAndSentence>{sloganAndSentenceProps.children}</SloganAndSentence>
        </OverlapGroup1>
        <OverlapGroup4>
          <Titles>
            <Link to="/juice">
              <Appetizers>{appetizers}</Appetizers>
            </Link>
            <Link to="/smoothies">
              <FirstCourse>{firstCourse}</FirstCourse>
            </Link>
            <Link to="/coffee">
              <SecondCourse>{secondCourse}</SecondCourse>
            </Link>
            <Link to="/wine">
              <SideDishes>{sideDishes}</SideDishes>
            </Link>
            <Link to="/cocktails-mixed-drinks">
              <Desserts>{desserts}</Desserts>
            </Link>
          </Titles>
          <Images>
            <Link to="/juice">
              <PexelsMariaOrlova49464421 src={pexelsMariaOrlova49464421} alt="pexels-maria-orlova-4946442 1" />
            </Link>
            <Link to="/smoothies">
              <PexelsJankoFerlic5904771 src={pexelsJankoFerlic5904771} alt="pexels-janko-ferlic-590477 1" />
            </Link>
            <Link to="/coffee">
              <PexelsSnapwire6759511 src={pexelsSnapwire6759511} alt="pexels-snapwire-675951 1" />
            </Link>
            <Link to="/wine">
              <PexelsValeriaBoltneva8425711 src={pexelsValeriaBoltneva8425711} alt="pexels-valeria-boltneva-842571 1" />
            </Link>
            <Link to="/cocktails-mixed-drinks">
              <PexelsAlishaMishra13435041 src={pexelsAlishaMishra13435041} alt="pexels-alisha-mishra-1343504 1" />
            </Link>
          </Images>
        </OverlapGroup4>
        <OverlapGroup2>
          <Link to="/about-us">
            <FooterContactAboutUs>
              <AboutUs>{aboutUs}</AboutUs>
            </FooterContactAboutUs>
          </Link>
        </OverlapGroup2>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 137px;
  align-self: flex-start;
  margin-top: 4px;
  margin-left: -58px;
  display: flex;
  align-items: flex-start;
  min-width: 1952px;
`;

const IlBaglioreNavbar = styled.div`
  ${InterSemiBoldWhite36px}
  width: 333px;
  min-height: 87px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const LoginRegistration = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  margin-left: 627px;
  margin-top: 11px;
  min-width: 117px;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup3 = styled.div`
  width: 230px;
  height: 126px;
  position: relative;
  align-self: flex-end;
  margin-left: 645px;
`;

const Place = styled.div`
  ${InterNormalWhite27px}
  position: absolute;
  top: 93px;
  left: 154px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Dishes = styled.div`
  ${InterNormalWhite27px}
  position: absolute;
  top: 31px;
  left: 143px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Drinks1 = styled.div`
  ${InterNormalTobaccoBrown27px}
  position: absolute;
  top: 62px;
  left: 147px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const TableReservation = styled.div`
  ${InterNormalWhite27px}
  position: absolute;
  top: 0;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 788px;
  height: 392px;
  position: relative;
  margin-top: 30px;
  margin-right: 6px;
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

const OverlapGroup4 = styled.div`
  width: 1663px;
  height: 367px;
  position: relative;
  margin-top: 13px;
  margin-left: 31.16px;
`;

const Titles = styled.div`
  position: absolute;
  height: 87px;
  top: 0;
  left: 55px;
  display: flex;
  align-items: flex-start;
  min-width: 1607px;
`;

const Appetizers = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 124px;
  height: 87px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const FirstCourse = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 235px;
  height: 87px;
  margin-left: 148px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const SecondCourse = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 127px;
  height: 87px;
  margin-left: 196px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const SideDishes = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 115px;
  height: 87px;
  margin-left: 265px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Desserts = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 178px;
  height: 87px;
  margin-left: 209px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Images = styled.div`
  position: absolute;
  width: 1663px;
  height: 286px;
  top: 81px;
  left: 0;
  display: flex;
`;

const PexelsMariaOrlova49464421 = styled.img`
  margin-top: 6px;
  width: 223px;
  height: 286px;
  margin-left: -4px;
  object-fit: cover;
  cursor: pointer;
`;

const PexelsJankoFerlic5904771 = styled.img`
  margin-top: 8px;
  width: 223px;
  height: 286px;
  margin-left: 109px;
  object-fit: cover;
  cursor: pointer;
`;

const PexelsSnapwire6759511 = styled.img`
  margin-top: 4px;
  width: 223px;
  height: 286px;
  margin-left: 159px;
  object-fit: cover;
  cursor: pointer;
`;

const PexelsValeriaBoltneva8425711 = styled.img`
  width: 220.705078125px;
  height: 286px;
  margin-left: 162px;
  object-fit: cover;
  cursor: pointer;
`;

const PexelsAlishaMishra13435041 = styled.img`
  margin-top: 2px;
  width: 218.45703125px;
  height: 286px;
  margin-left: 133px;
  object-fit: cover;
  cursor: pointer;
`;

const OverlapGroup2 = styled.div`
  height: 45px;
  margin-top: 92px;
  display: flex;
  padding: 5px 878px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1920px;
  background-color: var(--cod-gray);
`;

const FooterContactAboutUs = styled.div`
  width: 162px;
  display: flex;
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${InterBoldWhite24px}
  width: 160px;
  height: 31px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Drinks;
