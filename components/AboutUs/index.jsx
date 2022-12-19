import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  InterBoldTobaccoBrown24px,
  LaomuangkhongRegularNormalTobaccoBr,
  InterBoldWhite24px,
  InterMediumWhite27px,
  InterNormalWhite27px,
  InterSemiBoldWhite36px,
  BellefairNormalWhite72px,
} from "../../styledMixins";
import "./AboutUs.css";

function AboutUs(props) {
  const {
    ilBaglioreNavbar,
    place,
    ellipse1,
    ilBagliore,
    restaurant,
    aboutUs,
    loremIpsumDolorSi,
    iconFacebook,
    facebook,
    iconTwitter,
    instraLogo,
    instagram,
    twitter,
    contact,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="about-us screen">
        <FlexRow>
          <IlBaglioreNavbar>{ilBaglioreNavbar}</IlBaglioreNavbar>
          <Link to="/landing-page">
            <Place>{place}</Place>
          </Link>
        </FlexRow>
        <OverlapGroup3>
          <OverlapGroup>
            <Ellipse1 src={ellipse1} alt="Ellipse 1" />
            <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
            <Restaurant>{restaurant}</Restaurant>
          </OverlapGroup>
          <SignUpForm>
            <AboutUs1>{aboutUs}</AboutUs1>
            <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
          </SignUpForm>
        </OverlapGroup3>
        <FooterSocialMedia>
          <IconFacebook src={iconFacebook} alt="icon-facebook" />
          <OverlapGroup1>
            <Facebook>{facebook}</Facebook>
            <IconTwitter src={iconTwitter} alt="icon-twitter" />
          </OverlapGroup1>
          <OverlapGroup2>
            <InstraLogo src={instraLogo} alt="instra-logo" />
            <Instagram>{instagram}</Instagram>
            <Twitter>{twitter}</Twitter>
          </OverlapGroup2>
        </FooterSocialMedia>
        <FootContainer>
          <Footbar></Footbar>
          <FooterContactAboutUs>
            <Contact>{contact}</Contact>
          </FooterContactAboutUs>
        </FootContainer>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 87px;
  align-self: flex-start;
  margin-top: 4px;
  margin-left: -58px;
  display: flex;
  align-items: flex-start;
  min-width: 1056px;
  gap: 647px;
`;

const IlBaglioreNavbar = styled.div`
  ${InterSemiBoldWhite36px}
  width: 333px;
  min-height: 87px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Place = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  margin-top: 9px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  width: 1012px;
  height: 599px;
  position: relative;
  margin-top: 80px;
  margin-left: 4px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 784px;
  height: 351px;
  top: 0;
  left: 107px;
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

const SignUpForm = styled.div`
  ${InterMediumWhite27px}
  position: absolute;
  width: 1012px;
  height: 311px;
  top: 288px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 72px;
  box-shadow: 0px 4px 4px #00000040;
`;

const AboutUs1 = styled.div`
  margin-left: 444px;
  width: 120px;
  height: 33px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const LoremIpsumDolorSi = styled.p`
  width: 1008px;
  height: 206px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const FooterSocialMedia = styled.div`
  margin-top: 55px;
  margin-left: 7px;
  display: flex;
  align-items: center;
  min-width: 503px;
`;

const IconFacebook = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 3.5px;
`;

const OverlapGroup1 = styled.div`
  width: 172px;
  height: 23px;
  position: relative;
  margin-bottom: 5px;
`;

const Facebook = styled.div`
  ${InterBoldTobaccoBrown24px}
  position: absolute;
  width: 160px;
  top: 1px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const IconTwitter = styled.img`
  position: absolute;
  width: 26px;
  height: 23px;
  top: 0;
  left: 146px;
`;

const OverlapGroup2 = styled.div`
  ${InterBoldTobaccoBrown24px}
  width: 300px;
  height: 38px;
  position: relative;
  margin-left: 2px;
`;

const InstraLogo = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 109px;
`;

const Instagram = styled.div`
  position: absolute;
  width: 160px;
  top: 6px;
  left: 140px;
  letter-spacing: 0;
  line-height: normal;
`;

const Twitter = styled.div`
  position: absolute;
  width: 160px;
  top: 5px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const FootContainer = styled.div`
  width: 1920px;
  height: 97px;
  position: relative;
  margin-top: 120px;
`;

const Footbar = styled.div`
  position: absolute;
  width: 1920px;
  height: 45px;
  top: 52px;
  left: 0;
  background-color: var(--cod-gray);
`;

const FooterContactAboutUs = styled.div`
  position: absolute;
  width: 428px;
  height: 88px;
  top: 0;
  left: 747px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Contact = styled.p`
  ${InterBoldWhite24px}
  width: 426px;
  height: 88px;
  margin-left: -2px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default AboutUs;
