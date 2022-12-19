import React from "react";
import styled from "styled-components";
import { KuraleNormalTobaccoBrown45px, InterNormalWhite24px, ValignTextMiddle } from "../../styledMixins";


function Dish3(props) {
  const { dish3, img3, className } = props;

  return (
    <Dish31 className={`dish3 ${className || ""}`}>
      <Dish32 className="dish3-1">{dish3}</Dish32>
      <FlexRow className="flex-row-8">
        <Img3 className="img3-1" src={img3} alt="Img3" />
        <DescLorem3 className="desc-lorem3-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem3>
      </FlexRow>
    </Dish31>
  );
}

const Dish31 = styled.div`
  width: 1157px;
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 365px;
`;

const Dish32 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 865px;
  height: 87px;
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
  height: 278px;
  object-fit: cover;
`;

const DescLorem3 = styled.p`
  ${InterNormalWhite24px}
  width: 896px;
  min-height: 122px;
  letter-spacing: 0;
  line-height: normal;
`;

const Dish4 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish3.dish4  & {
    width: 841px;
  }
`;

const Dish41 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish3.dish4-1  & {
    width: 841px;
  }
`;

const Dish42 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish3.dish4-2  & {
    width: 841px;
  }
`;

const Dish43 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish3.dish4-3  & {
    width: 841px;
  }
`;

const Dish44 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            
            
           .dish3.dish4-4  & {
    width: 841px;
  }
`;

export default Dish3;
