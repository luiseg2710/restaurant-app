import React from "react";
import styled from "styled-components";
import { InterBoldTobaccoBrown24px } from "../../styledMixins";


function FooterSocialMedia() {
  return (
    <FooterSocialMedia1>
      <IconFacebook src="/img/fb-logo-1@2x.png" alt="icon-facebook" />
      <OverlapGroup3>
        <InstraLogo src="/img/instra-logo-1@2x.png" alt="instra-logo" />
        <Facebook>Facebook</Facebook>
      </OverlapGroup3>
      <OverlapGroup4>
        <Facebook>Instagram</Facebook>
        <InstraLogo src="/img/ph-twitter-logo@2x.png" alt="icon-twitter" />
      </OverlapGroup4>
      <Twitter>Twitter</Twitter>
    </FooterSocialMedia1>
  );
}

const FooterSocialMedia1 = styled.div`
  position: absolute;
  height: 35px;
  top: 5px;
  left: 1427px;
  display: flex;
  align-items: flex-start;
  min-width: 557px;
`;

const IconFacebook = styled.img`
  width: 22px;
  height: 22px;
  align-self: center;
  margin-bottom: 5px;
`;

const OverlapGroup3 = styled.div`
  width: 183px;
  height: 30px;
  position: relative;
`;

const InstraLogo = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 153px;
`;

const Facebook = styled.div`
  ${InterBoldTobaccoBrown24px}
  position: absolute;
  width: 160px;
  top: 2px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup4 = styled.div`
  width: 183px;
  height: 30px;
  position: relative;
  margin-left: 1px;
`;

const Twitter = styled.div`
  ${InterBoldTobaccoBrown24px}
  width: 160px;
  min-height: 33px;
  align-self: flex-end;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: normal;
`;

const FooterSocialMedia2 = styled.div`
  position: absolute;
  height: 35px;
  top: 5px;
  left: 1427px;
  display: flex;
  align-items: flex-start;
  min-width: 557px;
`;

const IconFacebook1 = styled.img`
  width: 22px;
  height: 22px;
  align-self: center;
  margin-bottom: 5px;
`;

const OverlapGroup31 = styled.div`
  width: 183px;
  height: 30px;
  position: relative;
`;

const InstraLogo1 = styled.img`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 0;
  left: 153px;
`;

const Facebook1 = styled.div`
  ${InterBoldTobaccoBrown24px}
  position: absolute;
  width: 160px;
  top: 2px;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
`;

const OverlapGroup2 = styled.div`
  width: 183px;
  height: 30px;
  position: relative;
  margin-left: 1px;
`;

const Twitter1 = styled.div`
  ${InterBoldTobaccoBrown24px}
  width: 160px;
  min-height: 33px;
  align-self: flex-end;
  margin-left: 1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default FooterSocialMedia;
