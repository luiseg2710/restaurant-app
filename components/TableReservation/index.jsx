import React from "react";
import { Link } from "react-router-dom";
import FooterSocialMedia from "../FooterSocialMedia";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalTobaccoBr,
  InterBoldWhite24px,
  LaomuangkhongRegularNormalMistGray2,
  InterNormalWhite27px,
  InterSemiBoldWhite36px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./TableReservation.css";

function TableReservation(props) {
  const {
    ilBaglioreNavbar,
    place,
    ellipse1,
    ilBagliore,
    restaurant,
    signUpForm,
    makeReservation,
    clearForm,
    aboutUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="table-reservation screen">
        <FlexRow>
          <IlBaglioreNavbar>{ilBaglioreNavbar}</IlBaglioreNavbar>
          <FlexCol>
            <Link to="/landing-page">
              <Place>{place}</Place>
            </Link>
            <OverlapGroup5>
              <OverlapGroup>
                <Ellipse1 src={ellipse1} alt="Ellipse 1" />
                <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
                <Restaurant>{restaurant}</Restaurant>
              </OverlapGroup>
              <SignUpForm src={signUpForm} alt="Sign Up Form" />
              <OverlapGroup1>
                <MakeReservation>{makeReservation}</MakeReservation>
                <Rectangle1></Rectangle1>
              </OverlapGroup1>
              <OverlapGroup2>
                <ClearForm>{clearForm}</ClearForm>
                <Rectangle11></Rectangle11>
              </OverlapGroup2>
            </OverlapGroup5>
          </FlexCol>
        </FlexRow>
        <FootContainer>
          <Footbar></Footbar>
          <Link to="/about-us">
            <FooterContactAboutUs>
              <AboutUs>{aboutUs}</AboutUs>
            </FooterContactAboutUs>
          </Link>
          <FooterSocialMedia />
        </FootContainer>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 1015px;
  margin-top: 4px;
  margin-left: -58px;
  display: flex;
  align-items: flex-start;
  min-width: 1445px;
  gap: 258px;
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
  width: 854px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1006px;
  gap: 23px;
`;

const Place = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  min-width: 76px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroup5 = styled.div`
  width: 854px;
  height: 950px;
  position: relative;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 784px;
  height: 351px;
  top: 102px;
  left: 30px;
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
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const SignUpForm = styled.img`
  position: absolute;
  width: 854px;
  height: 950px;
  top: 0;
  left: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 308px;
  height: 71px;
  top: 859px;
  left: 341px;
  border-radius: 13px;
`;

const MakeReservation = styled.div`
  ${ValignTextMiddle}
  ${LaomuangkhongRegularNormalMistGray2}
            position: absolute;
  width: 204px;
  height: 71px;
  top: 0;
  left: 52px;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 308px;
  height: 71px;
  top: 0;
  left: 0;
  border-radius: 13px;
  border: 1px solid;
  border-color: var(--mist-gray-2);
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 164px;
  height: 71px;
  top: 859px;
  left: 668px;
`;

const ClearForm = styled.div`
  ${ValignTextMiddle}
  ${LaomuangkhongRegularNormalMistGray2}
            position: absolute;
  width: 164px;
  height: 71px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Rectangle11 = styled.div`
  position: absolute;
  width: 164px;
  height: 71px;
  top: 0;
  left: 0;
  border-radius: 13px;
  border: 1px solid;
  border-color: var(--mist-gray-2);
`;

const FootContainer = styled.div`
  width: 1984px;
  height: 45px;
  position: relative;
`;

const Footbar = styled.div`
  position: absolute;
  width: 1920px;
  height: 45px;
  top: 0;
  left: 0;
  background-color: var(--cod-gray);
`;

const FooterContactAboutUs = styled.div`
  position: absolute;
  width: 162px;
  height: 31px;
  top: 5px;
  left: 13px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${InterBoldWhite24px}
  width: 160px;
  height: 31px;
  letter-spacing: 0;
  line-height: normal;
`;

export default TableReservation;
