import React from "react";
import Dish1 from "../Dish1";
import Dish3 from "../Dish3";
import styled from "styled-components";
import { KuraleNormalTobaccoBrown45px, InterNormalWhite24px, ValignTextMiddle } from "../../styledMixins";


function DishesList(props) {
  const { img5, className, dish11Props, dish12Props, dish31Props, dish32Props } = props;

  return (
    <DishesList1 className={`dishes-list ${className || ""}`}>
      <Dish1 dish1={dish11Props.dish1} image1={dish11Props.image1} />
      <Dish1 dish1={dish12Props.dish1} image1={dish12Props.image1} className={dish12Props.className} />
      <Dish3 dish3={dish31Props.dish3} img3={dish31Props.img3} />
      <Dish3 dish3={dish32Props.dish3} img3={dish32Props.img3} className={dish32Props.className} />
      <Dish5 className="dish5">
        <Dish51 className="dish5-1">Lorem ipsum dolor sit amet consectetur</Dish51>
        <FlexRow className="flex-row-6">
          <Img5 className="img5-1" src={img5} alt="Img5" />
          <DescLorem5 className="desc-lorem5-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </DescLorem5>
        </FlexRow>
      </Dish5>
    </DishesList1>
  );
}

const DishesList1 = styled.div`
  width: 1170px;
  height: 1942px;
  z-index: 2;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
  margin-left: 109px;
  display: flex;
  flex-direction: column;

  &.dishes-list.dishes-list-1 {
    z-index: 1;
  }
`;

const Dish5 = styled.div`
  margin-left: 5px;
  width: 1152px;
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 365px;
`;

const Dish51 = styled.p`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown45px}
            width: 836px;
  height: 87px;
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
  height: 278px;
  object-fit: cover;
`;

const DescLorem5 = styled.p`
  ${InterNormalWhite24px}
  width: 896px;
  min-height: 122px;
  letter-spacing: 0;
  line-height: normal;
`;

export default DishesList;
