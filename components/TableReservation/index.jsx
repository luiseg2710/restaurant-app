import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  LaomuangkhongRegularNormalWhite24px,
  LaomuangkhongRegularNormalTobaccoBr1,
  LaomuangkhongRegularNormalTobaccoBr,
  LaomuangkhongRegularNormalWhite27px,
  LaomuangkhongRegularNormalMistGray2,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./TableReservation.css";

class TableReservation extends React.Component {
  render() {
    const {
      gobackbutton,
      ellipse1,
      ilBagliore,
      restaurant,
      reservationForm,
      makeReservation,
      clearForm,
      place,
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
        <div className="table-reservation screen">
          <FlexRow>
            <Link to="/home-page">
              <GoBackButton src={gobackbutton} alt="GoBackButton" />
            </Link>
            <OverlapGroup3>
              <OverlapGroup>
                <Ellipse1 src={ellipse1} alt="Ellipse 1" />
                <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
                <Restaurant>{restaurant}</Restaurant>
              </OverlapGroup>
              <ReservationForm src={reservationForm} alt="Reservation Form" />
              <OverlapGroup1>
                <MakeReservation>{makeReservation}</MakeReservation>
                <Rectangle1></Rectangle1>
              </OverlapGroup1>
              <OverlapGroup2>
                <ClearForm>{clearForm}</ClearForm>
                <Rectangle11></Rectangle11>
              </OverlapGroup2>
            </OverlapGroup3>
            <Link to="/home-page">
              <Place>{place}</Place>
            </Link>
          </FlexRow>
          <FlexRow1>
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
          </FlexRow1>
        </div>
      </div>
    );
  }
}

const FlexRow = styled.div`
  height: 999px;
  margin-top: 6px;
  margin-right: 46px;
  display: flex;
  align-items: flex-start;
  min-width: 1834px;
`;

const GoBackButton = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const OverlapGroup3 = styled.div`
  width: 854px;
  height: 950px;
  position: relative;
  align-self: flex-end;
  margin-left: 463px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 784px;
  height: 351px;
  top: 90px;
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

const ReservationForm = styled.img`
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

const Place = styled.div`
  ${LaomuangkhongRegularNormalWhite27px}
  min-height: 34px;
  margin-left: 390px;
  margin-top: 23px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const FlexRow1 = styled.div`
  height: 31px;
  margin-left: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 1789px;
  gap: 1228px;
`;

const AboutUs = styled.div`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 110px;
  min-height: 31px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const FooterSocialMedia = styled.div`
  ${LaomuangkhongRegularNormalTobaccoBr1}
  height: 26px;
  display: flex;
  align-items: center;
  min-width: 451px;
`;

const FbLogo = styled.img`
  width: 19px;
  height: 20px;
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

export default TableReservation;
