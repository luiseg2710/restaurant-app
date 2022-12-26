import React from "react";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown45px,
  LaomuangkhongRegularNormalWhite24px,
  ValignTextMiddle,
} from "../../styledMixins";


class Drink3 extends React.Component {
  render() {
    const { img3, className } = this.props;

    return (
      <Drink31 className={`drink-3-4 ${className || ""}`}>
        <Drink32 className="drink-3-5">Lorem ipsum dolor sit amet consectetur</Drink32>
        <FlexRow className="flex-row-18">
          <Img3 className="img3-3" src={img3} alt="Img3" />
          <DescLorem3 className="desc-lorem3-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </DescLorem3>
        </FlexRow>
      </Drink31>
    );
  }
}

const Drink31 = styled.div`
  width: 1157px;
  margin-top: 35.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 292.517333984375px;
  gap: 23px;

  &.drink-3-4.drink-4-4 {
    min-height: 292.75830078125px;
  }
`;

const Drink32 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 841px;
  height: 40px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1153px;
  gap: 42px;
`;

const Img3 = styled.img`
  width: 215px;
  height: 230px;
  object-fit: cover;
`;

const DescLorem3 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 101px;
  margin-bottom: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const DescLorem4 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}

  .drink-3-4.drink-4-4  & {
    margin-top: 0;
    margin-bottom: unset;
  }
`;

export default Drink3;
