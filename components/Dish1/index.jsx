import React from "react";
import styled from "styled-components";
import {
  KuraleNormalTobaccoBrown45px,
  LaomuangkhongRegularNormalWhite24px,
  ValignTextMiddle,
} from "../../styledMixins";


class Dish1 extends React.Component {
  render() {
    const { dish1, image1, className } = this.props;

    return (
      <Dish11 className={`dish1 ${className || ""}`}>
        <Dish12 className="dish1-1">{dish1}</Dish12>
        <FlexRow className="flex-row-1">
          <Image1 className="image1" src={image1} alt="image1" />
          <DescLorem1 className="desc-lorem1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </DescLorem1>
        </FlexRow>
      </Dish11>
    );
  }
}

const Dish11 = styled.div`
  width: 1174px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 365px;
`;

const Dish12 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 546px;
  height: 87px;
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
  height: 278px;
  object-fit: cover;
`;

const DescLorem1 = styled.p`
  ${LaomuangkhongRegularNormalWhite24px}
  width: 896px;
  min-height: 122px;
  letter-spacing: 0;
  line-height: normal;
`;

const Dish2 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish1.dish2  & {
    width: 632px;
  }
`;

const Dish21 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish1.dish2-1  & {
    width: 632px;
  }
`;

const Dish22 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish1.dish2-2  & {
    width: 632px;
  }
`;

const Dish23 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish1.dish2-3  & {
    width: 632px;
  }
`;

const Dish24 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish1.dish2-4  & {
    width: 632px;
  }
`;

export default Dish1;
