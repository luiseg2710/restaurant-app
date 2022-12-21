import React from "react";
import Drink5 from "../Drink5";
import "./CocktailsList.css";

function CocktailsList(props) {
  const { image1, img2, img3, img4, drink51Props, drink52Props } = props;

  return (
    <div className="juice-list">
      <div className="drink-1">
        <p className="desc-lorem1 inter-normal-white-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <img className="image1" src={image1} alt="image1" />
        <div className="drink-1-1 valign-text-middle kurale-normal-tobacco-brown-45px">Lorem ipsum dolor sit</div>
      </div>
      <div className="drink-2">
        <img className="img2" src={img2} alt="img2" />
        <p className="desc-lorem inter-normal-white-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="drink-3">
        <img className="img3" src={img3} alt="Img3" />
        <p className="desc-lorem inter-normal-white-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
      <div className="drink-4">
        <img className="img4" src={img4} alt="img4" />
        <p className="desc-lorem4 inter-normal-white-24px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
          odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <p className="drink-4-1 valign-text-middle kurale-normal-tobacco-brown-45px">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <Drink5 img5={drink51Props.img5} />
      <Drink5 img5={drink52Props.img5} className={drink52Props.className} />
    </div>
  );
}

export default CocktailsList;
