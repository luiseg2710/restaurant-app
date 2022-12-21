import React from "react";
import "./Dish1.css";

function Dish1(props) {
  const { dish1, image1, className } = props;

  return (
    <div className={`dish-4 ${className || ""}`}>
      <div className="dish1 valign-text-middle kurale-normal-tobacco-brown-45px">{dish1}</div>
      <div className="flex-row-15">
        <img className="image1-4" src={image1} alt="image1" />
        <p className="desc-lorem-4 inter-normal-white-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}

export default Dish1;
