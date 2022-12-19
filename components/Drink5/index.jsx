import React from "react";
import styled from "styled-components";
import { KuraleNormalTobaccoBrown45px, InterNormalWhite24px, ValignTextMiddle } from "../../styledMixins";


function Drink5(props) {
  const { img5, className } = props;

  return (
    <Drink51 className={`drink-5 ${className || ""}`}>
      <Drink52 className="drink-5-1">Lorem ipsum dolor sit amet consectetur</Drink52>
      <FlexRow className="flex-row">
        <Img5 className="img5" src={img5} alt="Img5" />
        <DescLorem5 className="desc-lorem5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem5>
      </FlexRow>
    </Drink51>
  );
}

const Drink51 = styled.div`
  margin-left: 5px;
  width: 1152px;
  margin-top: 34.7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 301.7582092285156px;

  &.drink-5.drink-6 {
    margin-top: 32.2px;
  }

  &.drink-5.drink-6-1 {
    margin-top: 32.2px;
  }

  &.drink-5.drink-6-2 {
    margin-top: 32.2px;
  }

  &.drink-5.drink-6-3 {
    margin-top: 32.2px;
  }
`;

const Drink52 = styled.p`
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

const Img5 = styled.img`
  width: 215px;
  height: 230px;
  object-fit: cover;
`;

const DescLorem5 = styled.p`
  ${InterNormalWhite24px}
  width: 896px;
  min-height: 101px;
  margin-bottom: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const DescLorem51 = styled.p`
  ${InterNormalWhite24px}

  .drink-5.drink-6  & {
    margin-top: 0;
    margin-bottom: unset;
  }
`;

const DescLorem52 = styled.p`
  ${InterNormalWhite24px}

  .drink-5.drink-6-1  & {
    margin-top: 0;
    margin-bottom: unset;
  }
`;

const DescLorem53 = styled.p`
  ${InterNormalWhite24px}

  .drink-5.drink-6-2  & {
    margin-top: 0;
    margin-bottom: unset;
  }
`;

const DescLorem54 = styled.p`
  ${InterNormalWhite24px}

  .drink-5.drink-6-3  & {
    margin-top: 0;
    margin-bottom: unset;
  }
`;

export default Drink5;
