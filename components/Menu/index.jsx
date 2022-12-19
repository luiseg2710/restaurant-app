import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalTobaccoBr,
  InterBoldWhite24px,
  InterNormalTobaccoBrown27px,
  InterNormalWhite27px,
  InterSemiBoldWhite36px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Menu.css";

function Menu(props) {
  const {
    ilBaglioreNavbar,
    loginRegistration,
    booktable,
    menu,
    place,
    ellipse1,
    ilBagliore,
    restaurant,
    pexelsMariaOrlova49464421,
    pexelsMariaOrlova49464422,
    dishes1,
    dishes2,
    aboutUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="menu screen" onclick="window.open('landing-page.html', '_self');">
        <FlexRow>
          <IlBaglioreNavbar>{ilBaglioreNavbar}</IlBaglioreNavbar>
          <LoginRegistration>{loginRegistration}</LoginRegistration>
          <FlexCol>
            <Link to="/table-reservation">
              <Booktable>{booktable}</Booktable>
            </Link>
            <Menu1>{menu}</Menu1>
            <Link to="/landing-page">
              <Place>{place}</Place>
            </Link>
          </FlexCol>
        </FlexRow>
        <OverlapGroupContainer>
          <OverlapGroup3>
            <OverlapGroup1>
              <OverlapGroup>
                <Ellipse1 src={ellipse1} alt="Ellipse 1" />
                <ILBAGLIORE>{ilBagliore}</ILBAGLIORE>
                <Restaurant>{restaurant}</Restaurant>
              </OverlapGroup>
              <Link to="/dishes">
                <PexelsMariaOrlova49464421 src={pexelsMariaOrlova49464421} alt="pexels-maria-orlova-4946442 1" />
              </Link>
              <Link to="/drinks">
                <PexelsMariaOrlova49464422 src={pexelsMariaOrlova49464422} alt="pexels-maria-orlova-4946442 2" />
              </Link>
              <Link to="/dishes">
                <SloganAndSentence>
                  <Dishes>{dishes1}</Dishes>
                </SloganAndSentence>
              </Link>
            </OverlapGroup1>
            <Link to="/drinks">
              <SloganAndSentence1>
                <Dishes>{dishes2}</Dishes>
              </SloganAndSentence1>
            </Link>
          </OverlapGroup3>
          <OverlapGroup2>
            <Link to="/about-us">
              <FooterContactAboutUs>
                <AboutUs>{aboutUs}</AboutUs>
              </FooterContactAboutUs>
            </Link>
          </OverlapGroup2>
        </OverlapGroupContainer>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 116px;
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

const FlexCol = styled.div`
  width: 230px;
  align-self: flex-end;
  margin-left: 645px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 105px;
  gap: 3px;
`;

const Booktable = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  margin-right: 1px;
  min-width: 229px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Menu1 = styled.div`
  ${InterNormalTobaccoBrown27px}
  min-height: 33px;
  margin-right: 4px;
  min-width: 72px;
  letter-spacing: 0;
  line-height: normal;
`;

const Place = styled.div`
  ${InterNormalWhite27px}
  min-height: 33px;
  min-width: 76px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const OverlapGroupContainer = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 909px;
  gap: 162px;
`;

const OverlapGroup3 = styled.div`
  width: 1609px;
  height: 702px;
  position: relative;
  margin-left: 5px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1609px;
  height: 702px;
  top: 0;
  left: 0;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 784px;
  height: 351px;
  top: 0;
  left: 405px;
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

const PexelsMariaOrlova49464421 = styled.img`
  position: absolute;
  width: 634px;
  height: 378px;
  top: 324px;
  left: 0;
  object-fit: cover;
  cursor: pointer;
`;

const PexelsMariaOrlova49464422 = styled.img`
  position: absolute;
  width: 634px;
  height: 378px;
  top: 324px;
  left: 975px;
  object-fit: cover;
  cursor: pointer;
`;

const SloganAndSentence = styled.div`
  position: absolute;
  width: 193px;
  height: 87px;
  top: 237px;
  left: 214px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
`;

const Dishes = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            height: 87px;
  margin-left: -2px;
  width: 191px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const SloganAndSentence1 = styled.div`
  position: absolute;
  width: 193px;
  height: 87px;
  top: 237px;
  left: 1215px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px #00000040;
  cursor: pointer;
`;

const OverlapGroup2 = styled.div`
  height: 45px;
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
  align-items: flex-end;
  justify-content: center;
  cursor: pointer;
`;

const AboutUs = styled.div`
  ${InterBoldWhite24px}
  width: 160px;
  height: 31px;
  margin-left: -2px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Menu;
