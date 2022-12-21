import React from "react";
import "./FooterSocialMedia.css";

function FooterSocialMedia(props) {
  const { iconTwitter } = props;

  return (
    <div className="footer-social-media">
      <img className="icon-facebook" src="/img/fb-logo@2x.png" alt="icon-facebook" />
      <div className="overlap-group3">
        <img className="instra-logo" src="/img/instra-logo@2x.png" alt="instra-logo" />
        <div className="facebook inter-bold-tobacco-brown-24px">Facebook</div>
      </div>
      <div className="overlap-group4">
        <div className="instagram inter-bold-tobacco-brown-24px">Instagram</div>
        <img className="icon-twitter" src={iconTwitter} alt="icon-twitter" />
      </div>
      <div className="twitter inter-bold-tobacco-brown-24px">Twitter</div>
    </div>
  );
}

export default FooterSocialMedia;
