import React from "react";
import "../styles/FlatHeader.scss";

function FlatHeader({flat}) {

  return (
    <div className="flat__header">
      <div className="flat__title">
        <h1 className="flat-page__title">{flat.title}</h1>
        <h2 className="flat-page__subtitle">{flat.location}</h2>
        <div className="flat__tags">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="flat__owner">
        <div className="flat__owner__details">
          <h3>{flat.host.name}</h3>
          <img className="flat__owner__badge" src={flat.host.picture} />
        </div>
        <div className="flat__owner__stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>★</span>
            // pour chaque numéro création d'une span avec une étoile de couleur par defaut grise mais si le rating
            // est superieur ou égale au numéro création d'une classe 'on'
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlatHeader;
