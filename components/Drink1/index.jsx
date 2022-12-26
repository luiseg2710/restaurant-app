import React from "react";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown45px,
  LaomuangkhongRegularNormalWhite24px,
  ValignTextMiddle,
} from "../../styledMixins";


class Drink1 extends React.Component {
  render() {
    const { image1, className } = this.props;

    return (
      <Drink11 className={`drink-1 ${className || ""}`}>
        <DescLorem1 className="desc-lorem1-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem1>
        <Image1 className="image1-1" src={image1} alt="image1" />
        <Drink12 className="drink-1-1">Lorem ipsum dolor sit</Drink12>
      </Drink11>
    );
  }
}

const Drink11 = styled.div`
  width: 1174px;
  height: 301.7582092285156px;
  position: relative;

  &.drink-1.drink-1-2 {
    margin-left: 5px;
  }
`;

const DescLorem1 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 274px;
  letter-spacing: 0;
  line-height: normal;
`;

const Image1 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 0;
  object-fit: cover;
`;

const Drink12 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            position: absolute;
  width: 546px;
  height: 72px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

export default Drink1;
