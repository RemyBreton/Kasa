import React from "react";
import '../styles/ImageBanner.scss'

function ImageBanner(props) {
  const imageUrl  = props.imageUrl ? props.imageUrl : 'src/assets/AboutBanner.svg';

  return (
    <div className="image__banner">
      <img src={imageUrl} alt="image de l'appartement" />
    </div>
  );
}

export default ImageBanner;
