import React from "react";
import Dish1 from "../Dish1";
import Dish3 from "../Dish3";
import "./DishesList.css";

function DishesList(props) {
  const { img5, className, dish11Props, dish12Props, dish31Props, dish32Props } = props;

  return (
    <div className={`dishes-list ${className || ""}`}>
      <Dish1 dish1={dish11Props.dish1} image1={dish11Props.image1} className={dish11Props.className} />
      <Dish1 dish1={dish12Props.dish1} image1={dish12Props.image1} className={dish12Props.className} />
      <Dish3 dish3={dish31Props.dish3} img3={dish31Props.img3} className={dish31Props.className} />
      <Dish3 dish3={dish32Props.dish3} img3={dish32Props.img3} className={dish32Props.className} />
      <div className="dish5">
        <p className="dish5-1 valign-text-middle kurale-normal-tobacco-brown-45px">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <div className="flex-row-10">
          <img className="img5-4" src={img5} alt="Img5" />
          <p className="desc-lorem5-1 inter-normal-white-24px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DishesList;
