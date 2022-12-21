import React from "react";
import "./Dish3.css";

function Dish3(props) {
  const { dish3, img3, className } = props;

  return (
    <div className={`dish-5-1 ${className || ""}`}>
      <div className="dish3 valign-text-middle kurale-normal-tobacco-brown-45px">{dish3}</div>
      <div className="flex-row-20">
        <img className="img3-4" src={img3} alt="Img3" />
        <p className="desc-lorem-9 inter-normal-white-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}

export default Dish3;
