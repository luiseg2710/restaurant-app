import React from "react";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown45px,
  LaomuangkhongRegularNormalWhite24px,
  ValignTextMiddle,
} from "../../styledMixins";


class Drink12 extends React.Component {
  render() {
    const { drink1, image1, className } = this.props;

    return (
      <Drink1 className={`drink-1-6 ${className || ""}`}>
        <Drink11 className="drink-1-7">{drink1}</Drink11>
        <FlexRow className="flex-row-17">
          <Image1 className="image1-3" src={image1} alt="image1" />
          <DescLorem1 className="desc-lorem1-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </DescLorem1>
        </FlexRow>
      </Drink1>
    );
  }
}

const Drink1 = styled.div`
  width: 1174px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 292.7582092285156px;
  gap: 23px;

  &.drink-1-6.drink-2-4 {
    margin-top: 35.2px;
    min-height: 292.516357421875px;
  }
`;

const Drink11 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 444px;
  height: 40px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  min-width: 1170px;
  gap: 59px;
`;

const Image1 = styled.img`
  width: 215px;
  height: 230px;
  object-fit: cover;
`;

const DescLorem1 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 101px;
  margin-top: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink2 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .drink-1-6.drink-2-4  & {
    width: 841px;
  }
`;

export default Drink12;
