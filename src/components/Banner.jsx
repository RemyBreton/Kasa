import React from "react";
import "../styles/Banner.scss";

function Banner(props) {
  const banner = () => {
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
