import React from "react";
import "./Drink5.css";

function Drink5(props) {
  const { img5, className } = props;

  return (
    <div className={`drink-5-4 ${className || ""}`}>
      <p className="drink-5 valign-text-middle kurale-normal-tobacco-brown-45px">
        Lorem ipsum dolor sit amet consectetur
      </p>
      <div className="flex-row">
        <img className="img5" src={img5} alt="Img5" />
        <p className="desc-lorem5 inter-normal-white-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}

export default Drink5;
