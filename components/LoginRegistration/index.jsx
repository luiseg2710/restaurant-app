import React from "react";
import { Link } from "react-router-dom";
import FooterSocialMedia from "../FooterSocialMedia";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalTobaccoBr,
  InterBoldWhite24px,
  LaomuangkhongRegularNormalMistGray2,
  InterNormalWhite27px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./LoginRegistration.css";

function LoginRegistration(props) {
  const { place, ellipse1, ilBagliore, restaurant, signUpForm, joinNow, aboutUs } = props;

  return (
    <div className="container-center-horizontal">
      <div className="login-registration screen">
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
            <JoinNow>{joinNow}</JoinNow>
            <Rectangle1></Rectangle1>
          </OverlapGroup1>
        </OverlapGroup5>
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

const Place = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  margin-top: 13px;
  min-width: 76px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroup5 = styled.div`
  width: 801px;
  height: 729px;
  position: relative;
  margin-top: 125px;
  margin-left: 1px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 784px;
  height: 351px;
  top: 0;
  left: 3px;
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
  width: 801px;
  height: 712px;
  top: 17px;
  left: 0;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 335px;
  height: 71px;
  top: 553px;
  left: 224px;
`;

const JoinNow = styled.div`
  ${ValignTextMiddle}
  ${LaomuangkhongRegularNormalMistGray2}
            position: absolute;
  width: 335px;
  height: 71px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 335px;
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
  align-self: flex-start;
  margin-top: 135px;
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

export default LoginRegistration;
