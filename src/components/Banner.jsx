import React from "react";
import "../styles/Banner.scss";

function Banner(props) {
  // Création de la Banner sous condition
  const banner = () => {
    // Si la Banner contient une props alors retournera une class differente
    if (!props.bannerImg) {
      return (
        <section className="banner">
          <h1>Chez vous, partout et ailleurs</h1>
        </section>
      );
    }
    return <section className="banner-default"></section>;
  };
  return banner();
}

export default Banner;
