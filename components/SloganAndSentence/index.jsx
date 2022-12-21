import React from "react";
import "./SloganAndSentence.css";

function SloganAndSentence(props) {
  const { children, className } = props;

  return (
    <div className={`slogan-and-sentence ${className || ""}`}>
      <div className="dishes-5 valign-text-middle kurale-normal-tobacco-brown-63px">{children}</div>
    </div>
  );
}

export default SloganAndSentence;
