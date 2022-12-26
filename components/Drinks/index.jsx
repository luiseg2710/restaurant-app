import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown63px,
  LaomuangkhongRegularNormalTobaccoBr,
  KuraleNormalTobaccoBrown45px,
  BellefairNormalWhite72px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Drinks.css";

class Drinks extends React.Component {
  render() {
    const {
      gobackbutton,
      drinks,
      ellipse1,
      ilBagliore,
      restaurant,
      juice,
      drink1,
      smoothies,
      drink2,
      coffee,
      drink3,
      wine,
      drink4,
      cocktails,
      drink5,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="drinks screen">
          <Link to="/menu" className="align-self-flex-start">
            <GoBackButton src={gobackbutton} alt="GoBackButton" />
          </Link>
          <OverlapGroup1>
            <Drinks1>{drinks}</Drinks1>
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
          <FlexRow>
            <FlexCol>
              <Link to="/juice">
                <Juice>{juice}</Juice>
              </Link>
              <Link to="/juice">
                <Drink1 src={drink1} alt="drink1" />
              </Link>
            </FlexCol>
            <FlexCol1>
              <Link to="/smoothies">
                <Smoothies>{smoothies}</Smoothies>
              </Link>
              <Link to="/smoothies">
                <Drink1 src={drink2} alt="drink2" />
              </Link>
            </FlexCol1>
            <FlexCol2>
              <Link to="/coffee">
                <Coffee>{coffee}</Coffee>
              </Link>
              <Link to="/coffee">
                <Drink1 src={drink3} alt="drink3" />
              </Link>
            </FlexCol2>
            <FlexCol3>
              <Link to="/wine">
                <Wine>{wine}</Wine>
              </Link>
              <Link to="/wine">
                <Drink4 src={drink4} alt="drink4" />
              </Link>
            </FlexCol3>
            <FlexCol4>
              <Link to="/cocktails-mixed-drinks">
                <Cocktails>{cocktails}</Cocktails>
              </Link>
              <Link to="/cocktails-mixed-drinks">
                <Drink5 src={drink5} alt="drink5" />
              </Link>
            </FlexCol4>
          </FlexRow>
        </div>
      </div>
    );
  }
}

const GoBackButton = styled.img`
  width: 50px;
  height: 50px;
  align-self: flex-start;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  width: 788px;
  height: 410px;
  position: relative;
  margin-top: 89px;
  margin-right: 6px;
`;

const Drinks1 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            position: absolute;
  width: 182px;
  height: 87px;
  top: 323px;
  left: 306px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const Logo = styled.div`
  position: absolute;
  height: 353px;
  top: 0;
  left: 0;
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

const FlexRow = styled.div`
  height: 388px;
  margin-top: 61px;
  margin-right: 0.54px;
  display: flex;
  align-items: flex-start;
  min-width: 1645px;
`;

const FlexCol = styled.div`
  width: 223px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const Juice = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 101px;
  height: 49px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Drink1 = styled.img`
  width: 223px;
  height: 286px;
  object-fit: cover;
  cursor: pointer;
`;

const FlexCol1 = styled.div`
  width: 223px;
  margin-left: 111px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const Smoothies = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 206px;
  height: 49px;
  margin-right: 1px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const FlexCol2 = styled.div`
  width: 223px;
  margin-left: 158px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const Coffee = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 117px;
  height: 49px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const FlexCol3 = styled.div`
  width: 221px;
  margin-left: 162px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const Wine = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 107px;
  height: 49px;
  margin-left: 0.29px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Drink4 = styled.img`
  width: 221px;
  height: 286px;
  object-fit: cover;
  cursor: pointer;
`;

const FlexCol4 = styled.div`
  width: 218px;
  margin-left: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 388px;
  gap: 53px;
`;

const Cocktails = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 178px;
  height: 49px;
  margin-right: 0.46px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Drink5 = styled.img`
  width: 218px;
  height: 286px;
  object-fit: cover;
  cursor: pointer;
`;

export default Drinks;
