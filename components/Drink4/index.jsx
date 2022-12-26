import React from "react";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown45px,
  LaomuangkhongRegularNormalWhite24px,
  ValignTextMiddle,
} from "../../styledMixins";


class Drink4 extends React.Component {
  render() {
    const { img4, drink4, className } = this.props;

    return (
      <Drink41 className={`drink-4 ${className || ""}`}>
        <DescLorem4 className="desc-lorem4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem4>
        <Img4 className="img4" src={img4} alt="img4" />
        <Drink42 className="drink-4-1">{drink4}</Drink42>
      </Drink41>
    );
  }
}

const Drink41 = styled.div`
  width: 1157px;
  height: 301.7579345703125px;
  position: relative;
  margin-top: 23.5px;

  &.drink-4.drink-4-2 {
    margin-left: 5px;
    margin-top: 26.5px;
  }

  &.drink-4.drink-4-3 {
    height: 301.7582092285156px;
    margin-top: 26.5px;
  }
`;

const DescLorem4 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 257px;
  letter-spacing: 0;
  line-height: normal;
`;

const Img4 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 0;
  object-fit: cover;
`;

const Drink42 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            position: absolute;
  width: 841px;
  height: 72px;
  top: 0;
  left: 0;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink43 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .drink-4.drink-4-3  & {
    text-shadow: unset;
  }
`;

export default Drink4;
