import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalTobaccoBr1,
  LaomuangkhongRegularNormalWhite27px1,
  LaomuangkhongRegularNormalTobaccoBr,
  LaomuangkhongRegularNormalWhite24px,
  InterNormalWhite27px,
  BellefairNormalWhite72px,
} from "../../styledMixins";
import "./AboutUs.css";

class AboutUs extends React.Component {
  render() {
    const {
      gobackbutton,
      place,
      aboutUs,
      loremIpsumDolorSi,
      ellipse1,
      ilBagliore,
      restaurant,
      fbLogo,
      facebook,
      twitterIcon,
      twitter,
      instraLogo,
      instagram,
      contact,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="about-us screen" onclick="window.open('home-page.html', '_self');">
          <Link to="/home-page">
            <GoBackButton src={gobackbutton} alt="GoBackButton" />
          </Link>
          <FlexCol>
            <Link to="/home-page">
              <Place>{place}</Place>
            </Link>
            <OverlapGroup1>
              <AboutUsSection>
                <AboutUs1>{aboutUs}</AboutUs1>
                <LoremIpsumDolorSi>{loremIpsumDolorSi}</LoremIpsumDolorSi>
              </AboutUsSection>
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
            <FooterSocialMedia>
              <FbLogo src={fbLogo} alt="fb-logo" />
              <Facebook>{facebook}</Facebook>
              <TwitterIcon src={twitterIcon} alt="twitter-icon" />
              <Twitter>{twitter}</Twitter>
              <InstraLogo src={instraLogo} alt="instra-logo" />
              <Instagram>{instagram}</Instagram>
            </FooterSocialMedia>
            <FooterContactAboutUs>
              <Contact>{contact}</Contact>
            </FooterContactAboutUs>
          </FlexCol>
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
  width: 1012px;
  margin-top: 23px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 992px;
`;

const Place = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  margin-right: 4px;
  min-width: 76px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 1012px;
  height: 545px;
  position: relative;
  margin-top: 83px;
`;

const AboutUsSection = styled.div`
  ${LaomuangkhongRegularNormalWhite27px1}
  position: absolute;
  width: 1012px;
  top: 295px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 250px;
  gap: 10px;
  box-shadow: 0px 4px 4px #00000040;
`;

const AboutUs1 = styled.div`
  min-height: 34px;
  margin-right: 3px;
  min-width: 115px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const LoremIpsumDolorSi = styled.p`
  width: 1008px;
  min-height: 206px;
  margin-right: 4px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Logo = styled.div`
  position: absolute;
  height: 353px;
  top: 0;
  left: 107px;
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

const FooterSocialMedia = styled.div`
  ${LaomuangkhongRegularNormalTobaccoBr1}
  height: 26px;
  margin-top: 123px;
  margin-left: 1px;
  display: flex;
  align-items: center;
  min-width: 451px;
`;

const FbLogo = styled.img`
  width: 19px;
  height: 20px;
  margin-top: 2px;
`;

const Facebook = styled.div`
  width: 110px;
  min-height: 22px;
  align-self: flex-start;
  margin-left: 5px;
  letter-spacing: 0;
  line-height: normal;
`;

const TwitterIcon = styled.img`
  width: 22px;
  height: 20px;
  margin-left: 32px;
  margin-top: 2px;
`;

const Twitter = styled.div`
  width: 82px;
  min-height: 25px;
  align-self: flex-start;
  margin-left: 4px;
  letter-spacing: 0;
  line-height: normal;
`;

const InstraLogo = styled.img`
  width: 19px;
  height: 20px;
  margin-left: 29px;
  margin-top: 2px;
`;

const Instagram = styled.div`
  width: 117px;
  min-height: 26px;
  margin-left: 5px;
  letter-spacing: 0;
  line-height: normal;
`;

const FooterContactAboutUs = styled.div`
  width: 212px;
  margin-top: 128px;
  margin-right: 2px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const Contact = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 210px;
  height: 54px;
  margin-left: -2px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default AboutUs;
