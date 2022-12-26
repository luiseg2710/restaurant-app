import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalWhite24px,
  LaomuangkhongRegularNormalTobaccoBr1,
  LaomuangkhongRegularNormalTobaccoBr,
  LaomuangkhongRegularNormalWhite27px,
  BellefairNormalWhite72px,
} from "../../styledMixins";
import "./LoginRegistration.css";

class LoginRegistration extends React.Component {
  render() {
    const {
      gobackbutton,
      place,
      ellipse1,
      ilBagliore,
      restaurant,
      signUpForm,
      aboutUs,
      fbLogo,
      facebook,
      twitterIcon,
      twitter,
      instraLogo,
      instagram,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="login-registration screen">
          <Link to="/home-page">
            <GoBackButton src={gobackbutton} alt="GoBackButton" />
          </Link>
          <FlexCol>
            <Link to="/home-page">
              <Place>{place}</Place>
            </Link>
            <OverlapGroup1>
              <OverlapGroup>
                <Ellipse1 src={ellipse1} alt="Ellipse 1" />
                <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
                <Restaurant>{restaurant}</Restaurant>
              </OverlapGroup>
              <SignUpForm src={signUpForm} alt="Sign Up Form" />
            </OverlapGroup1>
            <FlexRow>
              <Link to="/about-us">
                <AboutUs>{aboutUs}</AboutUs>
              </Link>
              <FooterSocialMedia>
                <FbLogo src={fbLogo} alt="fb-logo" />
                <Facebook>{facebook}</Facebook>
                <TwitterIcon src={twitterIcon} alt="twitter-icon" />
                <Twitter>{twitter}</Twitter>
                <InstraLogo src={instraLogo} alt="instra-logo" />
                <Instagram>{instagram}</Instagram>
              </FooterSocialMedia>
            </FlexRow>
          </FlexCol>
        </div>
      </div>
    );
  }
}

const GoBackButton = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 1px;
  cursor: pointer;
`;

const FlexCol = styled.div`
  width: 1789px;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1018px;
`;

const Place = styled.div`
  ${LaomuangkhongRegularNormalWhite27px}
  min-height: 34px;
  margin-right: 8px;
  min-width: 77px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 801px;
  height: 736px;
  position: relative;
  margin-top: 82px;
  margin-right: 8px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 784px;
  height: 353px;
  top: 0;
  left: 3px;
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
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const SignUpForm = styled.img`
  position: absolute;
  width: 801px;
  height: 712px;
  top: 24px;
  left: 0;
`;

const FlexRow = styled.div`
  height: 27px;
  margin-top: 139px;
  display: flex;
  align-items: flex-start;
  min-width: 1789px;
  gap: 1228px;
`;

const AboutUs = styled.div`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 110px;
  min-height: 23px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const FooterSocialMedia = styled.div`
  ${LaomuangkhongRegularNormalTobaccoBr1}
  height: 26px;
  align-self: flex-end;
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

export default LoginRegistration;
