import React from "react";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown45px,
  LaomuangkhongRegularNormalWhite24px,
  ValignTextMiddle,
} from "../../styledMixins";


class Drink5 extends React.Component {
  render() {
    const { img5, className } = this.props;

    return (
      <Drink51 className={`drink-5-3 ${className || ""}`}>
        <Drink52 className="drink-5-4">Lorem ipsum dolor sit amet consectetur</Drink52>
        <FlexRow className="flex-row-19">
          <Img5 className="img5-2" src={img5} alt="Img5" />
          <DescLorem5 className="desc-lorem5-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </DescLorem5>
        </FlexRow>
      </Drink51>
    );
  }
}

const Drink51 = styled.div`
  margin-left: 5px;
  width: 1152px;
  margin-top: 35.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 292.7581787109375px;
  gap: 23px;

  &.drink-5-3.drink-6-4 {
    min-height: 292.75830078125px;
  }
`;

const Drink52 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 836px;
  height: 40px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1148px;
  gap: 37px;
`;

const Img5 = styled.img`
  width: 215px;
  height: 230px;
  object-fit: cover;
`;

const DescLorem5 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 101px;
  margin-bottom: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const DescLorem6 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}

  .drink-5-3.drink-6-4  & {
    margin-top: 0;
    margin-bottom: unset;
  }
`;

export default Drink5;
