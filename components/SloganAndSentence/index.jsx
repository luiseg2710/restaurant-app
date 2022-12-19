import React from "react";
import styled from "styled-components";
import { KuraleNormalTobaccoBrown63px, ValignTextMiddle } from "../../styledMixins";


function SloganAndSentence(props) {
  const { children } = props;

  return (
    <SloganAndSentence1>
      <Dishes>{children}</Dishes>
    </SloganAndSentence1>
  );
}

const SloganAndSentence1 = styled.div`
  position: absolute;
  width: 193px;
  height: 87px;
  top: 305px;
  left: 302px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px #00000040;
`;

const Dishes = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            height: 87px;
  margin-left: -2px;
  width: 191px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

const SloganAndSentence2 = styled.div`
  position: absolute;
  width: 193px;
  height: 87px;
  top: 305px;
  left: 302px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px #00000040;
`;

const Dishes1 = styled.div`
  ${ValignTextMiddle}
  ${KuraleNormalTobaccoBrown63px}
            height: 87px;
  margin-left: -2px;
  width: 191px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: normal;
`;

export default SloganAndSentence;
