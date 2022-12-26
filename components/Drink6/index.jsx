import React from "react";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown45px,
  LaomuangkhongRegularNormalWhite24px,
  ValignTextMiddle,
} from "../../styledMixins";


class Drink6 extends React.Component {
  render() {
    const { drink6, img6, className } = this.props;

    return (
      <Drink61 className={`drink-6 ${className || ""}`}>
        <Drink62 className="drink-6-1">{drink6}</Drink62>
        <FlexRow className="flex-row-13">
          <Img6 className="img6" src={img6} alt="Img6" />
          <DescLorem6 className="desc-lorem6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </DescLorem6>
        </FlexRow>
      </Drink61>
    );
  }
}

const Drink61 = styled.div`
  margin-left: 5px;
  width: 1152px;
  margin-top: 23.2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 301.7582092285156px;

  &.drink-6.drink-5-2 {
    margin-left: 10px;
    margin-top: 26.2px;
  }

  &.drink-6.drink-6-2 {
    margin-left: 10px;
    margin-top: 26.2px;
  }

  &.drink-6.drink-6-3 {
    margin-top: 26.2px;
    min-height: 301.75830078125px;
  }
`;

const Drink62 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 836px;
  height: 72px;
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

const Img6 = styled.img`
  width: 215px;
  height: 230px;
  object-fit: cover;
`;

const DescLorem6 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 101px;
  margin-top: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const DescLorem5 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}

  .drink-6.drink-5-2  & {
    margin-bottom: 0;
    margin-top: unset;
  }
`;

const Drink63 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .drink-6.drink-6-3  & {
    text-shadow: unset;
  }
`;

export default Drink6;
