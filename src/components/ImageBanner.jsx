import React from "react";
import '../styles/ImageBanner.scss'

function ImageBanner(props) {
  return (
    <div className="image__banner">
      <img src={props.imageUrl} alt="image de l'appartement" />
    </div>
  );
}

export default ImageBanner;
