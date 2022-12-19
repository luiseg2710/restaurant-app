import React from "react";
import Drink5 from "../Drink5";
import styled from "styled-components";
import { InterNormalWhite24px, KuraleNormalTobaccoBrown45px, ValignTextMiddle } from "../../styledMixins";


function CocktailsList(props) {
  const { image1, img2, img3, img4, drink51Props, drink52Props } = props;

  return (
    <JuiceList>
      <Drink1>
        <DescLorem1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem1>
        <Image1 src={image1} alt="image1" />
        <Drink11>Lorem ipsum dolor sit</Drink11>
      </Drink1>
      <Drink2>
        <Img2 src={img2} alt="img2" />
        <DescLorem2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem2>
      </Drink2>
      <Drink3>
        <Img2 src={img3} alt="Img3" />
        <DescLorem2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem2>
      </Drink3>
      <Drink4>
        <Image1 src={img4} alt="img4" />
        <DescLorem4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </DescLorem4>
        <Drink41>Lorem ipsum dolor sit amet consectetur</Drink41>
      </Drink4>
      <Drink5 img5={drink51Props.img5} />
      <Drink5 img5={drink52Props.img5} className={drink52Props.className} />
    </JuiceList>
  );
}

const JuiceList = styled.div`
  width: 1170px;
  height: 1942px;
  z-index: 2;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
  margin-left: 109px;
  display: flex;
  flex-direction: column;
`;

const Drink1 = styled.div`
  width: 1174px;
  height: 301.7582092285156px;
  position: relative;
`;

const DescLorem1 = styled.p`
  ${InterNormalWhite24px}
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

const Drink11 = styled.div`
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

const Drink2 = styled.div`
  width: 1172px;
  margin-top: 71.9px;
  display: flex;
  gap: 59px;
`;

const Img2 = styled.img`
  width: 215px;
  height: 229.832275390625px;
  object-fit: cover;
`;

const DescLorem2 = styled.p`
  ${InterNormalWhite24px}
  margin-top: 64.5px;
  width: 896px;
  height: 100.86164093017578px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink3 = styled.div`
  width: 1155px;
  margin-top: 104.2px;
  display: flex;
  gap: 42px;
`;

const Drink4 = styled.div`
  width: 1157px;
  height: 301.7582092285156px;
  position: relative;
  margin-top: 32.2px;
`;

const DescLorem4 = styled.p`
  ${InterNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 257px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink41 = styled.p`
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

const SmoothiesList = styled.div`
  width: 1170px;
  height: 1942px;
  z-index: 2;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
  margin-left: 109px;
  display: flex;
  flex-direction: column;
`;

const Drink12 = styled.div`
  width: 1174px;
  height: 301.7582092285156px;
  position: relative;
`;

const DescLorem11 = styled.p`
  ${InterNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 274px;
  letter-spacing: 0;
  line-height: normal;
`;

const Image11 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 0;
  object-fit: cover;
`;

const Drink13 = styled.div`
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

const Drink21 = styled.div`
  width: 1172px;
  margin-top: 71.9px;
  display: flex;
  gap: 59px;
`;

const Img21 = styled.img`
  width: 215px;
  height: 229.832275390625px;
  object-fit: cover;
`;

const DescLorem21 = styled.p`
  ${InterNormalWhite24px}
  margin-top: 64.5px;
  width: 896px;
  height: 100.86164093017578px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink31 = styled.div`
  width: 1155px;
  margin-top: 104.2px;
  display: flex;
  gap: 42px;
`;

const Drink42 = styled.div`
  width: 1157px;
  height: 301.7582092285156px;
  position: relative;
  margin-top: 32.2px;
`;

const DescLorem41 = styled.p`
  ${InterNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 257px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink43 = styled.p`
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

const CoffeeList = styled.div`
  width: 1170px;
  height: 1942px;
  z-index: 2;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
  margin-left: 109px;
  display: flex;
  flex-direction: column;
`;

const Drink14 = styled.div`
  width: 1174px;
  height: 301.7582092285156px;
  position: relative;
`;

const DescLorem12 = styled.p`
  ${InterNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 274px;
  letter-spacing: 0;
  line-height: normal;
`;

const Image12 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 0;
  object-fit: cover;
`;

const Drink15 = styled.div`
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

const Drink22 = styled.div`
  width: 1172px;
  margin-top: 71.9px;
  display: flex;
  gap: 59px;
`;

const Img22 = styled.img`
  width: 215px;
  height: 229.832275390625px;
  object-fit: cover;
`;

const DescLorem22 = styled.p`
  ${InterNormalWhite24px}
  margin-top: 64.5px;
  width: 896px;
  height: 100.86164093017578px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink32 = styled.div`
  width: 1155px;
  margin-top: 104.2px;
  display: flex;
  gap: 42px;
`;

const Drink44 = styled.div`
  width: 1157px;
  height: 301.7582092285156px;
  position: relative;
  margin-top: 32.2px;
`;

const DescLorem42 = styled.p`
  ${InterNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 257px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink45 = styled.p`
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

const CocktailsList1 = styled.div`
  width: 1170px;
  height: 1942px;
  z-index: 2;
  position: relative;
  align-self: flex-start;
  margin-top: 1px;
  margin-left: 109px;
  display: flex;
  flex-direction: column;
`;

const Drink16 = styled.div`
  width: 1174px;
  height: 301.7582092285156px;
  position: relative;
`;

const DescLorem13 = styled.p`
  ${InterNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 274px;
  letter-spacing: 0;
  line-height: normal;
`;

const Image13 = styled.img`
  position: absolute;
  width: 215px;
  height: 230px;
  top: 72px;
  left: 0;
  object-fit: cover;
`;

const Drink17 = styled.div`
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

const Drink23 = styled.div`
  width: 1172px;
  margin-top: 71.9px;
  display: flex;
  gap: 59px;
`;

const Img23 = styled.img`
  width: 215px;
  height: 229.832275390625px;
  object-fit: cover;
`;

const DescLorem23 = styled.p`
  ${InterNormalWhite24px}
  margin-top: 64.5px;
  width: 896px;
  height: 100.86164093017578px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink33 = styled.div`
  width: 1155px;
  margin-top: 104.2px;
  display: flex;
  gap: 42px;
`;

const Drink46 = styled.div`
  width: 1157px;
  height: 301.7582092285156px;
  position: relative;
  margin-top: 32.2px;
`;

const DescLorem43 = styled.p`
  ${InterNormalWhite24px}
  position: absolute;
  width: 896px;
  top: 136px;
  left: 257px;
  letter-spacing: 0;
  line-height: normal;
`;

const Drink47 = styled.p`
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

export default CocktailsList;
