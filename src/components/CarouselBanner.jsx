import React, { useState } from "react";
import "../styles/CarouselBanner.scss";
import chevronNext from "../assets/ChevronNext.svg";
import chevronPrevious from "../assets/ChevronPrevious.svg";

function CarouselBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);
  // currentPicture commence à 0

  const getClassName = (i) => {
    // si currentPicture+1 ajout de la className "Show"
    if (i === currentPicture) return "show";
    return "";
  };

  const next = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
    // modulo qui permettra de loop à l'infini sur l'array sans depasser le nombre d'entrée
  };
  const previous = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      // currentPicture est egale à 0 donc le nouveau est égale à -1
      // mais attention si il est inferieur 0 alors notre nouvelle index sera pictures.length -1
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const pictureAvailable = () => {
    return pictures && pictures.length > 0;
  };

  const carouselOrDefaultBanner = () => {
    if (!pictureAvailable()) {
      // Si different de la fonction alors return une img sinon return un map() avec les img de l'api
      return (
        <img
          className="default__banner"
          src="src/assets/AboutBanner.svg"
          alt="default image"
        ></img>
      );
    }
    return pictures.map((pic, i) => (
      <img
        key={pic}
        src={pic}
        alt="carousel appartements"
        className={getClassName(i)}
      ></img>
    ));
  };

  return (
    <div className="image__banner">
      <div className="image__container">{carouselOrDefaultBanner()}</div>
      {pictureAvailable() && (
        <>
          <img
            className="btn-previous"
            src={chevronPrevious}
            onClick={previous}
          />
          <span>{currentPicture + 1 + "/" + pictures.length}</span>
          <img
            className="btn-next"
            src={chevronNext}
            onClick={next}
          />
        </>
      )}
    </div>
  );
}

export default CarouselBanner;
